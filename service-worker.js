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
    "revision": "2307566c9cd68de86d7bd8b6ee35a07c"
  },
  {
    "url": "about/app/index.html",
    "revision": "6b9b1b980549fb31a3dac8a8e2a15855"
  },
  {
    "url": "about/app/t1-protocol.html",
    "revision": "aa45e2ffa3e90df0778773e92979dd5f"
  },
  {
    "url": "about/app/t2-secrect.html",
    "revision": "0ea8cf34dbe3f6bda9fae919bad78e88"
  },
  {
    "url": "about/app/t3-miniapps-sec.html",
    "revision": "f535d593d4faa9de07f85b7068df8b8e"
  },
  {
    "url": "about/index/index.html",
    "revision": "84dda67419927b54e588fdc1fd20bd1c"
  },
  {
    "url": "ai/index.html",
    "revision": "828984452a36ec62e8286a62d715bd3e"
  },
  {
    "url": "ai/t1-gzj.html",
    "revision": "5df937fbe82edec4e0e6aa758fa25104"
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
    "url": "assets/js/106.db63152f.js",
    "revision": "e15cd016877f8660af0a5ee663ea633c"
  },
  {
    "url": "assets/js/107.ff6cdc56.js",
    "revision": "31fd1db43d880e0f6ba7f7f8df1d77f9"
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
    "url": "assets/js/12.18df4f1f.js",
    "revision": "a1bc68ca9d7a384d0ebed7ba81374da9"
  },
  {
    "url": "assets/js/120.7a30713b.js",
    "revision": "3e9afdc6cff5f42aeceea954d6691bf4"
  },
  {
    "url": "assets/js/121.c21d9a90.js",
    "revision": "c63d59dd6a1001aa20965945fb1c4c45"
  },
  {
    "url": "assets/js/122.a1e98082.js",
    "revision": "fb245f1e8240784933c40331c4d96fa7"
  },
  {
    "url": "assets/js/123.4f19c706.js",
    "revision": "d229dd292517f6a853030f869ecc06f3"
  },
  {
    "url": "assets/js/124.f7bbe2c0.js",
    "revision": "90490f7c833233ab5f8b3af40a8789e5"
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
    "url": "assets/js/13.89fd4d29.js",
    "revision": "d1a1a8f89543c4fc4a137198e4a073b1"
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
    "url": "assets/js/133.1240df65.js",
    "revision": "d48c8159e276a021d614745ce53e0928"
  },
  {
    "url": "assets/js/134.bbfa5aba.js",
    "revision": "86c3ba8f8481b9d2427238cd39aa24ef"
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
    "url": "assets/js/138.57ea089f.js",
    "revision": "3e2b548882b3ddd5a1ded468ce54d767"
  },
  {
    "url": "assets/js/139.8d041d47.js",
    "revision": "7b3f64e34a998bb99793d5999187dded"
  },
  {
    "url": "assets/js/14.878f25c8.js",
    "revision": "e1ba8e957942181d372d46dfd1d2be33"
  },
  {
    "url": "assets/js/140.6f761963.js",
    "revision": "e35d1262dbaa3c740636057bbf73cc95"
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
    "url": "assets/js/143.27aad329.js",
    "revision": "a65ddab8b9f47fd88a72195c6e273e99"
  },
  {
    "url": "assets/js/144.29a455a8.js",
    "revision": "a154b05ea0e32214edf0b2cbcbbb970c"
  },
  {
    "url": "assets/js/145.e4f3bfb5.js",
    "revision": "840d0b04c8ba8c663d6177c743e60689"
  },
  {
    "url": "assets/js/146.6dc9f20d.js",
    "revision": "002ac64dfcb17ba5d36fedae70df63c0"
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
    "url": "assets/js/149.2fbf1ced.js",
    "revision": "9e12db30c4e13d49a5970548d5f4183d"
  },
  {
    "url": "assets/js/15.dd92496d.js",
    "revision": "f00eb863eabe663441fa39fab46ee5de"
  },
  {
    "url": "assets/js/150.dcfb5ecc.js",
    "revision": "fbad7c3dd768dc25e1ceac1d7d79f62b"
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
    "url": "assets/js/153.f676e698.js",
    "revision": "3c206348284a82e4bebf56ede065f0a4"
  },
  {
    "url": "assets/js/154.b74464f9.js",
    "revision": "c83435fd824a4742e755289d4b399331"
  },
  {
    "url": "assets/js/155.91a49a89.js",
    "revision": "707ad23cce3e3c3ec2ed46b5a20bccfb"
  },
  {
    "url": "assets/js/156.487b75a1.js",
    "revision": "3a0eacec9437bdde779a5ed14f451e58"
  },
  {
    "url": "assets/js/157.628cf3d2.js",
    "revision": "8ee52594cb3e239e28a7b8206e21071c"
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
    "url": "assets/js/162.a6a44401.js",
    "revision": "fb4139e3f5b6e511481e750e1247e94e"
  },
  {
    "url": "assets/js/163.1affd05b.js",
    "revision": "797f2ab1402fa1bad1a01d4ec109dd2c"
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
    "url": "assets/js/166.c764926f.js",
    "revision": "0d4199ad0de1b6790e74eee842eff580"
  },
  {
    "url": "assets/js/167.d9f3ab77.js",
    "revision": "b3381f4a9545c393032afcd0b2819a21"
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
    "url": "assets/js/179.2cdfedd2.js",
    "revision": "6506bce4bef546f086592a847fecca13"
  },
  {
    "url": "assets/js/18.06797c0d.js",
    "revision": "ac89ef8caeec7579ee2be0dc3c949615"
  },
  {
    "url": "assets/js/180.85755187.js",
    "revision": "5a4a0ff1dad1e59f171e7e07ee460b38"
  },
  {
    "url": "assets/js/181.e3222d56.js",
    "revision": "f93428733aa1ec5017d675b74f157216"
  },
  {
    "url": "assets/js/182.cc5ff3cb.js",
    "revision": "9ccb58e3137ad281d39164ce9eadd6bc"
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
    "url": "assets/js/187.7577f0f0.js",
    "revision": "5ec71280ec00e62004722fa5c09963b0"
  },
  {
    "url": "assets/js/188.6210588c.js",
    "revision": "f19bb0abbbe402221b93865c3ee7e4fe"
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
    "url": "assets/js/195.4e9cdb27.js",
    "revision": "7759466173ee7ab8dde607315036768f"
  },
  {
    "url": "assets/js/196.e18800bc.js",
    "revision": "6381957cf6076f877542cc917ef3361c"
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
    "url": "assets/js/212.c5cb5b72.js",
    "revision": "f104f78fef5dc2ce58cb1f247a478b71"
  },
  {
    "url": "assets/js/213.faa636c1.js",
    "revision": "07f185a782c876d39d503eaf133f1c8a"
  },
  {
    "url": "assets/js/214.737a1562.js",
    "revision": "53ae8fd7bf601a93e0158f7603809731"
  },
  {
    "url": "assets/js/215.4df9a28d.js",
    "revision": "afb14adac467ab52c961387fec3f8487"
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
    "url": "assets/js/22.f80e7aa3.js",
    "revision": "dab6fe4085b539be0d09ecdbbd21d97c"
  },
  {
    "url": "assets/js/220.251eecf0.js",
    "revision": "9f3c925b0774f37735a21e218b2fd30d"
  },
  {
    "url": "assets/js/221.687b9c82.js",
    "revision": "07017c316a287953a6513ec2b3616cd9"
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
    "url": "assets/js/23.b168cf43.js",
    "revision": "59536bf8ed9dcda9043eb26090146090"
  },
  {
    "url": "assets/js/230.fb449300.js",
    "revision": "28d41c0819896c2b5901b8f90a1b407c"
  },
  {
    "url": "assets/js/231.bad4dd8b.js",
    "revision": "0193539c6299161ba84bf66141db6312"
  },
  {
    "url": "assets/js/232.e15b74e6.js",
    "revision": "dec5dea7db44f6846af7cb305d0b189b"
  },
  {
    "url": "assets/js/233.4184d286.js",
    "revision": "c02664c49704ad248a779646a41161ed"
  },
  {
    "url": "assets/js/234.04cd7653.js",
    "revision": "3ce96a7b0b91b30e6522b7f5a48ac868"
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
    "url": "assets/js/245.f64e3cdf.js",
    "revision": "47e71baa33c306251f52bd4b423e4806"
  },
  {
    "url": "assets/js/246.c665e213.js",
    "revision": "c878e01f59aeb0bb0e999cdda234505a"
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
    "url": "assets/js/249.a4543fac.js",
    "revision": "b6d7dcd4320845f3393a2e8e157b7241"
  },
  {
    "url": "assets/js/25.c70c235b.js",
    "revision": "70ed7d8e863d3fa74f864148e8269e7e"
  },
  {
    "url": "assets/js/250.288f45b7.js",
    "revision": "c9368db864c7811b170184397b587b5a"
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
    "url": "assets/js/58.25363bf2.js",
    "revision": "8e29a0a70f5f31e3353266ca42380c25"
  },
  {
    "url": "assets/js/59.9cb4cfd1.js",
    "revision": "29aad12e5b13d7a90d1e24767810a782"
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
    "url": "assets/js/87.b7c251e9.js",
    "revision": "e41b4dd0026ad6ba6359a337da901609"
  },
  {
    "url": "assets/js/88.425f5632.js",
    "revision": "e81f3149f04387228e18d57a89a323df"
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
    "url": "assets/js/app.8719ff9c.js",
    "revision": "ca923eb87d68f5ae061afb2f398de8ff"
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
    "revision": "1e889ad6ea72d352f8976d2e089a47d1"
  },
  {
    "url": "basis/algorithms/t1-buble-sort.html",
    "revision": "e174da41c8e1a10786d31f412619ff00"
  },
  {
    "url": "basis/algorithms/t2-selection-sort.html",
    "revision": "704331a8003dee889e0d0e0bd3502730"
  },
  {
    "url": "basis/algorithms/t3-insertion-sort.html",
    "revision": "711dae4170eabd7b39e02a7f1294b99b"
  },
  {
    "url": "basis/algorithms/t4-shell-sort.html",
    "revision": "4f05c3dcd2c1ceaf0ec75697ff640784"
  },
  {
    "url": "basis/algorithms/t5-quick-sort.html",
    "revision": "60d02b764893d4931dfaecb87aba9767"
  },
  {
    "url": "basis/algorithms/t6-heap-sort.html",
    "revision": "79954b6e2f4193c51307c225ab8ceaef"
  },
  {
    "url": "basis/algorithms/t7-merge-sort.html",
    "revision": "f1de26dbf97757976c2986037bed8672"
  },
  {
    "url": "basis/algorithms/t8-radix-sort.html",
    "revision": "5e1164d438f4adff85fa18e6d3edf5bf"
  },
  {
    "url": "basis/algorithms/t9-count-sort.html",
    "revision": "00de50cf74e626ca00d88b61bcf57f69"
  },
  {
    "url": "basis/algorithms/u1-bucket-sort.html",
    "revision": "0919839a38a13bda9b97c8d3d7d58f5d"
  },
  {
    "url": "basis/design-patterns/AdapterPattern.html",
    "revision": "d7dec066780cb6b5acc4d7eb534b970a"
  },
  {
    "url": "basis/design-patterns/BridgePattern.html",
    "revision": "fc175894f5de8e64d5bc3d8385d6f085"
  },
  {
    "url": "basis/design-patterns/BuilderPattern.html",
    "revision": "407fed8704c551af42945e892a4ed673"
  },
  {
    "url": "basis/design-patterns/ChainOfResponsibilityPattern.html",
    "revision": "3597383f4c66ea0cade2b25d7004e7aa"
  },
  {
    "url": "basis/design-patterns/ClassReleation.html",
    "revision": "17ca2566f8096a1d26c16df9caa1ec38"
  },
  {
    "url": "basis/design-patterns/CommandPattern.html",
    "revision": "2e0ae65b8cefb1eca29a29d94d180618"
  },
  {
    "url": "basis/design-patterns/CompositePattern.html",
    "revision": "9f52fd3038b8bca31d5073aba8e91570"
  },
  {
    "url": "basis/design-patterns/DecoratorPattern.html",
    "revision": "ba866ba1db91810db4fcfaac980fd5b1"
  },
  {
    "url": "basis/design-patterns/DesignPrinciples.html",
    "revision": "212e0e45ebf1a44915e37207ddbc1660"
  },
  {
    "url": "basis/design-patterns/FacadePattern.html",
    "revision": "f620c3163209b9d6e5ab0c9bc8053097"
  },
  {
    "url": "basis/design-patterns/FactoryPattern.html",
    "revision": "3b9b58a9bdb0277430d1c04e80651d02"
  },
  {
    "url": "basis/design-patterns/FilterCriteriaPattern.html",
    "revision": "208d3a94a841621ae6ec184df46b1926"
  },
  {
    "url": "basis/design-patterns/FlyweightPattern.html",
    "revision": "c859edcb905cd37f6f4cc1ebd24d4a91"
  },
  {
    "url": "basis/design-patterns/index.html",
    "revision": "f551c06f350c77daa16fc40c8cef0a4c"
  },
  {
    "url": "basis/design-patterns/InterpreterPattern.html",
    "revision": "27458d533e9d3c1f08c13b9be124b159"
  },
  {
    "url": "basis/design-patterns/IteratorPattern.html",
    "revision": "6fd32c07f7bde76e520eb456ec0b4c7e"
  },
  {
    "url": "basis/design-patterns/MediatorPattern.html",
    "revision": "6c208a6e399daf59e1b0fb8d4ba33172"
  },
  {
    "url": "basis/design-patterns/MementoPattern.html",
    "revision": "f622a29c18c455646436af1d5e4713df"
  },
  {
    "url": "basis/design-patterns/NullObjectPattern.html",
    "revision": "f64f073d37939164be1c98fd119c3220"
  },
  {
    "url": "basis/design-patterns/ObserverPattern.html",
    "revision": "f87a4d3caf62b809f3097a007b041c5d"
  },
  {
    "url": "basis/design-patterns/PrototypePattern.html",
    "revision": "b67648c27a5e6acc4c7364dd332b864c"
  },
  {
    "url": "basis/design-patterns/ProxyPattern.html",
    "revision": "33811f19dbbaa4bc495d47f42c47faac"
  },
  {
    "url": "basis/design-patterns/SingletonPattern.html",
    "revision": "3b26596e5c4eaf7d6ca555382e173c02"
  },
  {
    "url": "basis/design-patterns/StatePattern.html",
    "revision": "62a64b12182fc189dd5dca5e4bb0fe26"
  },
  {
    "url": "basis/design-patterns/StrategyPattern.html",
    "revision": "45d6a9b3959473221d2fef4d8f3157c6"
  },
  {
    "url": "basis/design-patterns/TemplatePattern.html",
    "revision": "b869441320c6f30aa136c71d3a88aa8b"
  },
  {
    "url": "basis/design-patterns/VisitorPattern.html",
    "revision": "890dfa62d2add340a56a170ebae8dca0"
  },
  {
    "url": "basis/index/index.html",
    "revision": "c905e2c3decb11fb326921a030ae7663"
  },
  {
    "url": "basis/os/index.html",
    "revision": "96b72535232a8443c94b83267e20c7d4"
  },
  {
    "url": "book/index.html",
    "revision": "fb51fa0dbaf96f35251fec9e82920090"
  },
  {
    "url": "book/t-find-books.html",
    "revision": "a81955745a53d346691bd6b657a5452c"
  },
  {
    "url": "c/audio/audio-basic.html",
    "revision": "21fe063cd418b6c1be1e289cee0b63de"
  },
  {
    "url": "c/audio/endian.html",
    "revision": "ccd9240038ab89b9c2ebd24f002a5de3"
  },
  {
    "url": "c/audio/index.html",
    "revision": "b6b78329e2b6fc5f8cd6fe407de7b9f1"
  },
  {
    "url": "c/cmake/01-basic/A-hello-cmake.html",
    "revision": "19c8b1e086468a1cdd0935241fa912a0"
  },
  {
    "url": "c/cmake/01-basic/B-hello-headers.html",
    "revision": "d60317745c3262b51837796a1f7dfdbc"
  },
  {
    "url": "c/cmake/01-basic/C-static-library.html",
    "revision": "1265e7006a2b16255f2a5ba3f82e0297"
  },
  {
    "url": "c/cmake/01-basic/D-shared-library.html",
    "revision": "021373e5a251065839634a26660f97bd"
  },
  {
    "url": "c/cmake/01-basic/E-installing.html",
    "revision": "d10a15c658423adf40d9d82d76554e6f"
  },
  {
    "url": "c/cmake/01-basic/F-build-type.html",
    "revision": "9c461bc3b9c248043db3a8edee254366"
  },
  {
    "url": "c/cmake/01-basic/G-compile-flags.html",
    "revision": "40991291d1855e3556479c1feac8dc14"
  },
  {
    "url": "c/cmake/01-basic/H-third-party-library.html",
    "revision": "0aa07a316b138ed5717003c48b27ec32"
  },
  {
    "url": "c/cmake/01-basic/I-compiling-with-clang.html",
    "revision": "a7c9755f2938f595a73c2b3cf690d41e"
  },
  {
    "url": "c/cmake/01-basic/index.html",
    "revision": "0d11b8532a9fcb3f55f760b643642bf1"
  },
  {
    "url": "c/cmake/01-basic/J-building-with-ninja.html",
    "revision": "fc6d7892e71d35686b96f22f14c093c2"
  },
  {
    "url": "c/cmake/01-basic/K-imported-targets.html",
    "revision": "1531a17de787c25ad83631338547d0eb"
  },
  {
    "url": "c/cmake/01-basic/L-cpp-standard.html",
    "revision": "d8c3223cf5edf574fd26a38c531143e3"
  },
  {
    "url": "c/cmake/index.html",
    "revision": "06a0f30d4b228678a5201f34ef283266"
  },
  {
    "url": "c/program/index.html",
    "revision": "71759bd716340c2904945b427ba82966"
  },
  {
    "url": "c/program/pointers.html",
    "revision": "d8452ee67b9399eb9d3a993bc8db27af"
  },
  {
    "url": "categories/index.html",
    "revision": "addaaa9749630a9a263591fee7d12f60"
  },
  {
    "url": "figma/figma-install-chinese-font.html",
    "revision": "eef54fe5e81d2204471d6fe4321becd1"
  },
  {
    "url": "figma/index.html",
    "revision": "6c19a7f069c479814c866229737191f1"
  },
  {
    "url": "flutter/flutter-color.html",
    "revision": "685f42ac28b1b8aba90710aef18016df"
  },
  {
    "url": "flutter/github-actions-build-flutter-android.html",
    "revision": "195c7320d260f568448b1a83d59bfcd5"
  },
  {
    "url": "flutter/github-actions-build-flutter-ios.html",
    "revision": "9fd693c626d11fd5a6290bd8ebb5bff5"
  },
  {
    "url": "flutter/index.html",
    "revision": "ff3bef5a82d3178fe14c78b82c59a1df"
  },
  {
    "url": "flutter/point.html",
    "revision": "7ed08686b2fec84e42e21d7ff7dc6378"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "5a8c1cfcfc1cae55410f89e435ec04d2"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "75851437313365e0ec726fbb9385ec5c"
  },
  {
    "url": "flutter/t3-messages.html",
    "revision": "6fea30e362085ebb2d3e51ce7f4df71c"
  },
  {
    "url": "flutter/t3-mixin.html",
    "revision": "19c20185022249de7e00c655ac70c2f3"
  },
  {
    "url": "flutter/t4-lifecycle.html",
    "revision": "b02045f043183ccecc70d310e1ad5328"
  },
  {
    "url": "flutter/t5-flutter-web-deploy.html",
    "revision": "371a5fd0e9108f3b242084914f692954"
  },
  {
    "url": "flutter/t6-docker-web-deploy.html",
    "revision": "35db9247fd489958bdc54e8bc95bd817"
  },
  {
    "url": "flutter/t7-fvm.html",
    "revision": "1a9592912095aa83f53e3004d7d86c18"
  },
  {
    "url": "flutter/t8-const.html",
    "revision": "51d4e0709946ef54f0930cc95cbab975"
  },
  {
    "url": "flutter/t9-logs.html",
    "revision": "1691c70dc6da1f0cd918f840e55e4515"
  },
  {
    "url": "flutter/u10-fvm-flutter2.html",
    "revision": "6fcd5b6296eb7398405fd06ab8ebaa7a"
  },
  {
    "url": "flutter/u11-flutter-render.html",
    "revision": "667c0174732753e768d224b33a742887"
  },
  {
    "url": "flutter/u12-flutter-create-w.html",
    "revision": "81e5cf681f5242f1022070ec899267e0"
  },
  {
    "url": "flutter/u12-flutter-web-01.html",
    "revision": "397c9df4f4a7c0928566364775ead8ee"
  },
  {
    "url": "flutter/u12-flutter-web-02.html",
    "revision": "c56940a614c1b6e0a379872da6222f55"
  },
  {
    "url": "flutter/u13-sliverappbar.html",
    "revision": "53691cd57132b8ead0572f95ee356899"
  },
  {
    "url": "flutter/u14-navbar-color.html",
    "revision": "c01ba39aec71b68cc854a76165d07ae0"
  },
  {
    "url": "flutter/u15-custom-nabar.html",
    "revision": "0aebcd4b2f3b64d461851f4d63db6b99"
  },
  {
    "url": "flutter/u16-shape.html",
    "revision": "b5e696073ca6f48a64f6f6cf9739604f"
  },
  {
    "url": "flutter/y1-statubar.html",
    "revision": "c6c35073fe4c39ebdcc49d5fe8696fc7"
  },
  {
    "url": "haskell/1-install.html",
    "revision": "b89a50d07c125b4cab046074b3770c48"
  },
  {
    "url": "haskell/2-vscode.html",
    "revision": "53e380af09d090b44f13a48134513fe2"
  },
  {
    "url": "haskell/3-pktool.html",
    "revision": "dcfe8613079d4e36cd40dac0ec1c82a0"
  },
  {
    "url": "haskell/4-digui.html",
    "revision": "afa2b19ad22ad6fe1eb89d40c154da60"
  },
  {
    "url": "haskell/index.html",
    "revision": "82b5190e6e76f8e67ed54cd36547b704"
  },
  {
    "url": "index.html",
    "revision": "1cbaf8a682f4f41f65cd5be40a29ffb3"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "python/1-file-map.html",
    "revision": "3df91825ccc5be44e035804e4e425cde"
  },
  {
    "url": "python/2-mongo-random.html",
    "revision": "6d9f0e1dab8c192ecdad1e837eb6ef61"
  },
  {
    "url": "python/3-page-upload.html",
    "revision": "fef264b77f7a016a00ef899bd1246145"
  },
  {
    "url": "python/4-bt-flask.html",
    "revision": "c202b94442de4776938f56258f3d0a30"
  },
  {
    "url": "python/index.html",
    "revision": "8e23e65798088c8f051cc1a07452eabe"
  },
  {
    "url": "python/python-develop-env.html",
    "revision": "16626b67d13c69c7837abc7e5ad0bc13"
  },
  {
    "url": "python/python-file.html",
    "revision": "dfc05c6007fb7c011dc8f37063c10d73"
  },
  {
    "url": "python/python-function.html",
    "revision": "727e52903db0e5215a0773622264a29e"
  },
  {
    "url": "python/python-string.html",
    "revision": "90d007b3a80289431d00130d1484ab77"
  },
  {
    "url": "read/head-first-oop.html",
    "revision": "c92ee3a32dfa57eab2cd8b0fda79e7c8"
  },
  {
    "url": "read/index.html",
    "revision": "ca3440b412e7fcb9ba2b3daf6a2798a9"
  },
  {
    "url": "swift/better/autoclosure.html",
    "revision": "e0ec63821d7d0570b05bc1fb6a217fc7"
  },
  {
    "url": "swift/better/available.html",
    "revision": "4a00088afb14768f39e82f0ffcab3c86"
  },
  {
    "url": "swift/better/chain.html",
    "revision": "f641dd289b65b86782d803b8b15041f9"
  },
  {
    "url": "swift/better/copy-in-copy-out.html",
    "revision": "0cb1b96c9fea55fa78668e6adc76f1a4"
  },
  {
    "url": "swift/better/Copy-On-Write.html",
    "revision": "56e900511703cc1148ae75d0e24c7219"
  },
  {
    "url": "swift/better/di.html",
    "revision": "d010e82b92728f479c9aba42b51a8e37"
  },
  {
    "url": "swift/better/index.html",
    "revision": "69e18385d839d7c70aca66de392d88c7"
  },
  {
    "url": "swift/better/last.html",
    "revision": "1433d47a52b7ef62b7836708fc22cb56"
  },
  {
    "url": "swift/better/lazy.html",
    "revision": "1b1ede500240b8c7b491d5de38a1c23d"
  },
  {
    "url": "swift/better/protocol.html",
    "revision": "56e675fd4c6d4cd4c7e16234aab93f05"
  },
  {
    "url": "swift/fp/index.html",
    "revision": "307a1e9bb52440cfc23bb5f8eb1c20c7"
  },
  {
    "url": "swift/fp/t1-fp.html",
    "revision": "91a579b8d12f5c022d0fb20bb631c13c"
  },
  {
    "url": "swift/fp/t2-lens.html",
    "revision": "375827f3b79f219a283c16c1f85a643e"
  },
  {
    "url": "swift/fp/t3-json1.html",
    "revision": "488eac4ea51eaa36c68da30ccb71ca30"
  },
  {
    "url": "swift/fp/t3-json2.html",
    "revision": "c6e8111d7c1ddc22f466701ef78ca93c"
  },
  {
    "url": "swift/fp/t3-json3.html",
    "revision": "972aa6b55929dd175bb5deb5eae9a330"
  },
  {
    "url": "swift/fp/t4-length.html",
    "revision": "74a3e62f46801087838eaba60fd1e2a9"
  },
  {
    "url": "swift/ios/index.html",
    "revision": "4d1d0b29d22ec3bc151b51933178eadf"
  },
  {
    "url": "swift/ios/ios-build-cers.html",
    "revision": "6c16b9cbad35b6e118713eb1823b6ea0"
  },
  {
    "url": "swift/ios/pod-wechat.html",
    "revision": "bf30f153e1780c963dbfa882b572b7f9"
  },
  {
    "url": "swift/ios/t1-pod-webp.html",
    "revision": "4381ae5581539b22a12aa1519b9eb190"
  },
  {
    "url": "swift/ios/t2-youhua.html",
    "revision": "eb550c8b9997aed92bdba11699765366"
  },
  {
    "url": "swift/swiftui/ActionSheet.html",
    "revision": "916c5f1401fd887474724ba8ef72ab9d"
  },
  {
    "url": "swift/swiftui/Alert.html",
    "revision": "9b43e5c890c7d2262fd57dfb39e731f5"
  },
  {
    "url": "swift/swiftui/AnyGesture.html",
    "revision": "81954ef098fc4f24e66629ecbe29317d"
  },
  {
    "url": "swift/swiftui/Bindings.html",
    "revision": "e17673d22d09c05650646846ead664fa"
  },
  {
    "url": "swift/swiftui/Button.html",
    "revision": "15bc8b390162a152ab5ca4614c252c60"
  },
  {
    "url": "swift/swiftui/DatePicker.html",
    "revision": "83781c005f94f94d5601d7cc80db06c1"
  },
  {
    "url": "swift/swiftui/DragGesture.html",
    "revision": "7f1e6b56921db60ce840130a4de6dfbd"
  },
  {
    "url": "swift/swiftui/DynamicNavigationDestinationLink.html",
    "revision": "0cca5244ee8c9303f4a73b6374343c6f"
  },
  {
    "url": "swift/swiftui/EditButton.html",
    "revision": "2136de2f97422c570ad64c9765211750"
  },
  {
    "url": "swift/swiftui/Environment.html",
    "revision": "3219a630597256899382f2de708d69ac"
  },
  {
    "url": "swift/swiftui/EnvironmentObject.html",
    "revision": "1dd1cc962e1e392d53481006e9bc7235"
  },
  {
    "url": "swift/swiftui/EnvironmentValues.html",
    "revision": "5160df1a9bebd393a9a01a7c4c5a2eae"
  },
  {
    "url": "swift/swiftui/ExclusiveGesture.html",
    "revision": "1b9235c6ce1595329e1ffa4e5e9031c8"
  },
  {
    "url": "swift/swiftui/ForEach.html",
    "revision": "f3801387a186e9b4346a13e1c5badf71"
  },
  {
    "url": "swift/swiftui/Form.html",
    "revision": "f848276362dd14c17d88b14a915edfe9"
  },
  {
    "url": "swift/swiftui/GeometryReader.html",
    "revision": "39a681a42e25e1e1e15b988125ccdddd"
  },
  {
    "url": "swift/swiftui/Group.html",
    "revision": "86ec45180a896d9532aef20d259bde3d"
  },
  {
    "url": "swift/swiftui/GroupBox.html",
    "revision": "96f006a16a38a01d5492c250413b4cd9"
  },
  {
    "url": "swift/swiftui/HSplitView.html",
    "revision": "14ac497d5a96f1e0dc2c8e55aabeb4fd"
  },
  {
    "url": "swift/swiftui/HStack.html",
    "revision": "b7d0ea1be1835f06e426f71d7d59809c"
  },
  {
    "url": "swift/swiftui/Image.html",
    "revision": "83a3571efbb3ec8516c1fb144c350e02"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "dc6d66f421ae474ec510c79c6bb9b982"
  },
  {
    "url": "swift/swiftui/ItemBasedPopUpButton.html",
    "revision": "56fd23043c4e227f869dc50e95551288"
  },
  {
    "url": "swift/swiftui/List.html",
    "revision": "6f882e1a5486507ccbf97243256248f3"
  },
  {
    "url": "swift/swiftui/LocalizedStringKey.html",
    "revision": "1b82720c60a21dde459a13d48dcc6a4c"
  },
  {
    "url": "swift/swiftui/LongPressGesture.html",
    "revision": "250674ce5c1331e92a1db9dd8d1d3eac"
  },
  {
    "url": "swift/swiftui/MagnificationGesture.html",
    "revision": "03cf942b82b5860857868bbf94ad710b"
  },
  {
    "url": "swift/swiftui/Modal.html",
    "revision": "484c6e16a8c739d4b522bdf64475f16e"
  },
  {
    "url": "swift/swiftui/NavigationButton.html",
    "revision": "6092f84d2e546f78a6ade586aa4c5bf8"
  },
  {
    "url": "swift/swiftui/NavigationView.html",
    "revision": "bb3f7961176a7a367daddf733ef8469b"
  },
  {
    "url": "swift/swiftui/ObjectBinding.html",
    "revision": "e6be159e9bb8d678fd44336f348f1672"
  },
  {
    "url": "swift/swiftui/PasteButton.html",
    "revision": "52655ce8ada2295d7189b77f76e09f50"
  },
  {
    "url": "swift/swiftui/Picker.html",
    "revision": "c77684c7b8ff04d0b16271782a7b2529"
  },
  {
    "url": "swift/swiftui/Popover.html",
    "revision": "7d0b4d03c60ace88ad948addc0280a74"
  },
  {
    "url": "swift/swiftui/PreferenceKey.html",
    "revision": "529c90b56b41b916ced4d9ecbde2f552"
  },
  {
    "url": "swift/swiftui/PresentationButton.html",
    "revision": "c0a37b0805a7e1ed9d1280d8f3c9ef27"
  },
  {
    "url": "swift/swiftui/Principle01.html",
    "revision": "53d481096ee7b369228ffab1c2796f50"
  },
  {
    "url": "swift/swiftui/Principle02.html",
    "revision": "6ee684e64091c98223ec7bc322a58f05"
  },
  {
    "url": "swift/swiftui/Principle03.html",
    "revision": "7f273a660a3a5316dd947b36c3883b38"
  },
  {
    "url": "swift/swiftui/Principle04.html",
    "revision": "46d47c60c6f8e7b95e6ea83b0883bfed"
  },
  {
    "url": "swift/swiftui/Principle05.html",
    "revision": "2b0fee9f41784336abf98fd50d5e047e"
  },
  {
    "url": "swift/swiftui/Principle06.html",
    "revision": "b0818e3d81b826e88f6f738c78f73bfd"
  },
  {
    "url": "swift/swiftui/PullDownButton.html",
    "revision": "3389e84f9f6f073e226775998f0b3661"
  },
  {
    "url": "swift/swiftui/RotationGesture.html",
    "revision": "9c9efa1b0844ba5a7116aaf7cc1aba27"
  },
  {
    "url": "swift/swiftui/ScrollView.html",
    "revision": "b216c6a1d9894fd20c188ff2a1a53dab"
  },
  {
    "url": "swift/swiftui/Section.html",
    "revision": "66518c41786a312c9a454f72806ffc16"
  },
  {
    "url": "swift/swiftui/SecureField.html",
    "revision": "2e87de2184c7c9a733db44d6c9abf5b1"
  },
  {
    "url": "swift/swiftui/SegmentedControl.html",
    "revision": "749b113cc196d1f6acd6ada10c6738e8"
  },
  {
    "url": "swift/swiftui/SequenceGesture.html",
    "revision": "5940958dd687187ae60686b36bd300bd"
  },
  {
    "url": "swift/swiftui/Sheet.html",
    "revision": "dc821533524c7df3c3cf4794b61834c1"
  },
  {
    "url": "swift/swiftui/SimultaneousGesture.html",
    "revision": "2efa6c2ebc8d07f3d868888d9647e19c"
  },
  {
    "url": "swift/swiftui/Slider.html",
    "revision": "371267a18112afb9866615b7533a1b2e"
  },
  {
    "url": "swift/swiftui/Stacks.html",
    "revision": "b65e526892354fde98d02c80925af862"
  },
  {
    "url": "swift/swiftui/State.html",
    "revision": "f0194317c81900868bb11c745a6d7d84"
  },
  {
    "url": "swift/swiftui/Stepper.html",
    "revision": "c97bf011d5dca9f9c40fbc86212fd1cf"
  },
  {
    "url": "swift/swiftui/Strideable.html",
    "revision": "2fe2dca7409ec9cb9285c3c9b0c91ab0"
  },
  {
    "url": "swift/swiftui/TabView.html",
    "revision": "034b086e08c01dc744135c6cce4c0069"
  },
  {
    "url": "swift/swiftui/TapGesture.html",
    "revision": "2b9b324cd9c2c7918933f94013cd8530"
  },
  {
    "url": "swift/swiftui/Text.html",
    "revision": "714dfff6c392b5ee0575f0640c634d99"
  },
  {
    "url": "swift/swiftui/TextField.html",
    "revision": "bca2604ba5b7363daeff75b5925833cd"
  },
  {
    "url": "swift/swiftui/Toggle.html",
    "revision": "0844db3d476f264f196bebcd101694b1"
  },
  {
    "url": "swift/swiftui/Transaction.html",
    "revision": "25d77d58afed770fbc099eb57b76c04e"
  },
  {
    "url": "swift/swiftui/UIViewController.html",
    "revision": "f890ef5faec17e5ff554d894b2f46fee"
  },
  {
    "url": "swift/swiftui/ViewModifier.html",
    "revision": "c13cea3466ae7486a64ce1105bbffebd"
  },
  {
    "url": "swift/swiftui/VSplitView.html",
    "revision": "e44cfa7afe87e7bbbd262ee925631065"
  },
  {
    "url": "swift/swiftui/VStack.html",
    "revision": "8952da1d3959ba7797855c1cc70e7a7c"
  },
  {
    "url": "swift/swiftui/WebImage.html",
    "revision": "de87c0b27daaa18ab9a76605fb32cbc6"
  },
  {
    "url": "swift/swiftui/WebView.html",
    "revision": "59dba888d303102f98d5c280943e7f25"
  },
  {
    "url": "swift/swiftui/ZStack.html",
    "revision": "d9b4542247dd9f90808b407cc514be46"
  },
  {
    "url": "swift/tips/index.html",
    "revision": "7a63e466763544304e816da4f4a62e2e"
  },
  {
    "url": "swift/ubuntu/demo.html",
    "revision": "09dc984053b95ebed910ed7a967fe455"
  },
  {
    "url": "swift/ubuntu/index.html",
    "revision": "14ea9f2b1775e091906837572d00cc6f"
  },
  {
    "url": "swift/ubuntu/spm.html",
    "revision": "34d6e332e5128ce7ad1c965b6b1f30fa"
  },
  {
    "url": "swift/ubuntu/swiftenv.html",
    "revision": "2b2396bb8d980fe994f66ea4f8d47742"
  },
  {
    "url": "swift/ubuntu/vscode.html",
    "revision": "f7b098d8d2b11525f42efa9f9248d2fc"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "576758c7a305e9e721759360ceef79b0"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "2869e5baf708a9fa171480919e7353b2"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "98ec6be5825f9b0f4168bdfa472cb224"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "735348f582dee9987bda831308d1e0ba"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "97d70696501f4094a0234e26b7b7fe7b"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "5ced67a6fba6ec46f66bef0128bb986b"
  },
  {
    "url": "swift/vapor/t6-say-oldbirds.html",
    "revision": "a5b0aded466fc0bc846d618271e40946"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "972b92e3ba428e054bfd4f9429ee13e0"
  },
  {
    "url": "swift/vapor/u-11-auth.html",
    "revision": "03e7d8779ddc37d6d156a8977fd60a9c"
  },
  {
    "url": "swift/vapor/u-12-permission.html",
    "revision": "cbe542c0066ae5ac1961f7375127f306"
  },
  {
    "url": "swift/vapor/v-20-read-code.html",
    "revision": "93455c528d441dcc8d868aa2d77c347b"
  },
  {
    "url": "swift/vapor/v-21-io.html",
    "revision": "b4b1c3c52ca4a1f0ff690a9c411547cd"
  },
  {
    "url": "swift/vapor/v-22-bio2.html",
    "revision": "afc034376d0bdebd9be9004627bbcd83"
  },
  {
    "url": "swift/vapor/v-23-swiftnio-do-text.html",
    "revision": "a37c451108f888e309ce7237fe2519b5"
  },
  {
    "url": "swift/vapor/v-24-swift-zhan-package.html",
    "revision": "c8dd8cb670a1431b83b551b2690c25f0"
  },
  {
    "url": "swift/vapor/v-25-swiftnio-do-serisize.html",
    "revision": "59f19b1c1a2b08743f656f3cc8c14a92"
  },
  {
    "url": "swift/vapor/v-26-swfitnio-grpc-1.html",
    "revision": "fd76cfc981b97cfbe02d47daab5d100b"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/ai/index.html",
    "revision": "d9ca891687d9a468e295d5144f8c724a"
  },
  {
    "url": "tag/c/c++/index.html",
    "revision": "a0d8eb905ede60d04f963f048793b852"
  },
  {
    "url": "tag/cmake/index.html",
    "revision": "495844031b7cd69c013479ebfbd5e1ed"
  },
  {
    "url": "tag/flask/index.html",
    "revision": "e4d0e9d9b6fd00ddc4ce1db6c90e05f9"
  },
  {
    "url": "tag/flowchart/index.html",
    "revision": "558394b0be9ebcf3f7bbcab1470339ac"
  },
  {
    "url": "tag/flutter/index.html",
    "revision": "0d9d3f908d357799af649a6a518edf4c"
  },
  {
    "url": "tag/flutter/page/2/index.html",
    "revision": "40add89b436b2b7f2f1b201e44748d92"
  },
  {
    "url": "tag/flutter/page/3/index.html",
    "revision": "c72ccd45ec05e47a0345d2ecb091f990"
  },
  {
    "url": "tag/git/index.html",
    "revision": "1f8cdb02834c79809c9ace058b8a547d"
  },
  {
    "url": "tag/github/index.html",
    "revision": "fe661b66afa04a45b0b00f5462ff35e4"
  },
  {
    "url": "tag/haskell/index.html",
    "revision": "77b0b230ed763621dc230fdc99e694ec"
  },
  {
    "url": "tag/html/index.html",
    "revision": "e089a52c424b13aaf1202bb417150b0c"
  },
  {
    "url": "tag/index.html",
    "revision": "e07eb3c1a0c42635a3f640b6401382ac"
  },
  {
    "url": "tag/ios/index.html",
    "revision": "cc7100361ebf27dc8e5b7e095c2a545b"
  },
  {
    "url": "tag/ios/page/2/index.html",
    "revision": "5a678f68f3bcc03cc1f3cc41c9148f4f"
  },
  {
    "url": "tag/ios/page/3/index.html",
    "revision": "8abf84aebbe7b5568158764296ee0a92"
  },
  {
    "url": "tag/ios/page/4/index.html",
    "revision": "5b7c7b5f28c042679eb8ce0edcda2970"
  },
  {
    "url": "tag/ios/page/5/index.html",
    "revision": "eb408059a5bf48a802286eaf36d47240"
  },
  {
    "url": "tag/ios/page/6/index.html",
    "revision": "d178e5c780a2f0110b3eb2cbc99c2607"
  },
  {
    "url": "tag/ios/page/7/index.html",
    "revision": "b8a8f3940b39d8e7bbe1bd686b4f7e70"
  },
  {
    "url": "tag/ios/page/8/index.html",
    "revision": "9052d8d2ff8731f3d5ec8ca4bcea6d72"
  },
  {
    "url": "tag/ios/page/9/index.html",
    "revision": "6d47d404b5cd5706c5f3741409718423"
  },
  {
    "url": "tag/json/index.html",
    "revision": "473ce1708c4de12cb19cea26e7de92bd"
  },
  {
    "url": "tag/plantuml/index.html",
    "revision": "b66baf52d0e8e2dc8af9a8ad19c52122"
  },
  {
    "url": "tag/pod/index.html",
    "revision": "3be952ee5d9e9521ff6bf032f7e1f0cb"
  },
  {
    "url": "tag/python/index.html",
    "revision": "17c08b4eed317f14eba22e34c394cf7a"
  },
  {
    "url": "tag/read/index.html",
    "revision": "a941063a8a9837ceeee496121aba6ea4"
  },
  {
    "url": "tag/swift/index.html",
    "revision": "cc2496ed085b3ad75cae3b53517e0f9f"
  },
  {
    "url": "tag/swift/page/10/index.html",
    "revision": "6842c51309b490733aecf9174cce459d"
  },
  {
    "url": "tag/swift/page/11/index.html",
    "revision": "3b087effb284415ae861b2088a168c3e"
  },
  {
    "url": "tag/swift/page/12/index.html",
    "revision": "43be37b8ab895e98599a295bea5206c1"
  },
  {
    "url": "tag/swift/page/13/index.html",
    "revision": "730d5d94ba580e2fe37ae9ef2be09906"
  },
  {
    "url": "tag/swift/page/14/index.html",
    "revision": "a0fd166de622f003a5483390801183c9"
  },
  {
    "url": "tag/swift/page/2/index.html",
    "revision": "4dbac58413833f189ac15fc2d696dcbb"
  },
  {
    "url": "tag/swift/page/3/index.html",
    "revision": "ff3c989d308ac343e55389648e394c32"
  },
  {
    "url": "tag/swift/page/4/index.html",
    "revision": "6457a4a869cb1d75dab5beec5b0b581d"
  },
  {
    "url": "tag/swift/page/5/index.html",
    "revision": "e1793a00edbde91dd78d93a77e9843a2"
  },
  {
    "url": "tag/swift/page/6/index.html",
    "revision": "ad4953f3eb7e8d60db2e5705d45b3334"
  },
  {
    "url": "tag/swift/page/7/index.html",
    "revision": "601c49898731fa6addc23ac57dbf025e"
  },
  {
    "url": "tag/swift/page/8/index.html",
    "revision": "e041b436e63a409dbd3180f940792abe"
  },
  {
    "url": "tag/swift/page/9/index.html",
    "revision": "459dcc0811a4bb214d8515251505b11d"
  },
  {
    "url": "tag/swiftenv/index.html",
    "revision": "465e05bf9935f006a1e55b637d11f70e"
  },
  {
    "url": "tag/swiftnio/index.html",
    "revision": "8059bf968e73921a1bf3902dff87fa02"
  },
  {
    "url": "tag/swiftui/index.html",
    "revision": "d2c1f26b87dad625dc05febb48d801a4"
  },
  {
    "url": "tag/swiftui/page/2/index.html",
    "revision": "bfdb322bc911021e129cf4ff009c8f88"
  },
  {
    "url": "tag/swiftui/page/3/index.html",
    "revision": "c29ad2dc5b39f263b4605c6a6c1a2a15"
  },
  {
    "url": "tag/swiftui/page/4/index.html",
    "revision": "cb67267d0b00e29b209ad73767f4eda0"
  },
  {
    "url": "tag/swiftui/page/5/index.html",
    "revision": "2aceed5e8d21fd62e0ed7cef9063c7f1"
  },
  {
    "url": "tag/swiftui/page/6/index.html",
    "revision": "917d24ba02386614b4e438c9f976af5f"
  },
  {
    "url": "tag/swiftui/page/7/index.html",
    "revision": "34147e8a7c63ad5042497bdbdb06eeed"
  },
  {
    "url": "tag/tips/index.html",
    "revision": "6cb465cc138b5a86f348c699c1c54f69"
  },
  {
    "url": "tag/tools/index.html",
    "revision": "07f78a5c557dffaee914726af99b384f"
  },
  {
    "url": "tag/tools/page/2/index.html",
    "revision": "9656c331d11b4c0b288af4a2a5471516"
  },
  {
    "url": "tag/ubuntu/index.html",
    "revision": "72d752065bc28dd0ef597a4d6e5813ff"
  },
  {
    "url": "tag/vapor/index.html",
    "revision": "4d19873c6c134451d84b9b6e5595ab72"
  },
  {
    "url": "tag/vapor/page/2/index.html",
    "revision": "09f3dc1d1b0d60ffdfd63f3081194646"
  },
  {
    "url": "tag/vapor/page/3/index.html",
    "revision": "ba08e1292c3998bb500c9e4a4490470c"
  },
  {
    "url": "tag/vscode/index.html",
    "revision": "37155832bf7a86eb2ca4768f1390444e"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "88912dea16ce549dbd80846ca1719b2f"
  },
  {
    "url": "tag/yaml/index.html",
    "revision": "7cb5b0e13c5213851011b54eb09bf490"
  },
  {
    "url": "tag/书单/index.html",
    "revision": "d1040dec499882e58c260e4aec27e41a"
  },
  {
    "url": "tag/函数式编程/index.html",
    "revision": "256c53f4d4139062699195d6fa77cc83"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "d38fa1954381f1f31f4226f363d32c77"
  },
  {
    "url": "tag/基础/page/2/index.html",
    "revision": "201b9ed027adf33eb5bee027955f9f88"
  },
  {
    "url": "tag/打包/index.html",
    "revision": "14a26a9408fddd78e1692b8ddfe9304c"
  },
  {
    "url": "tag/指针/index.html",
    "revision": "e388573261923c1c2500b0cd43b03bb6"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "e83d80851a94ec9a5e084b930fe14caa"
  },
  {
    "url": "tag/数据结构与算法/page/2/index.html",
    "revision": "291d6c6ec5bbfd689a2bdb210ed30f7a"
  },
  {
    "url": "tag/笔记/index.html",
    "revision": "fdd0068eec56b6f06dea024e5bb525af"
  },
  {
    "url": "tag/设计模式/index.html",
    "revision": "0d3e7f79c1c15dc82e862d4f472678da"
  },
  {
    "url": "tag/设计模式/page/2/index.html",
    "revision": "a24e25d322dbfdb98ce254a437e87c27"
  },
  {
    "url": "tag/设计模式/page/3/index.html",
    "revision": "6815b576298250a0242c26f7c6e83782"
  },
  {
    "url": "tag/阅读/index.html",
    "revision": "54d9a07d10a565909c4fe748353ecb4a"
  },
  {
    "url": "tag/音频/index.html",
    "revision": "280e1d72ac41154e6cb2efbf43bd0d84"
  },
  {
    "url": "timeline/index.html",
    "revision": "bac2d2a48bbd3069d252bd07b8d8679f"
  },
  {
    "url": "tools/flowchart/index.html",
    "revision": "ce946bd37500c2f53f9d812ab16d1435"
  },
  {
    "url": "tools/git/git-branch-mapping.html",
    "revision": "a48cb25ab800237bebe588d7a64e3b0e"
  },
  {
    "url": "tools/git/git-reset.html",
    "revision": "a246af9038235b690e77fb0891881d3f"
  },
  {
    "url": "tools/git/index.html",
    "revision": "1ea7777549ea773a54963763368eddd3"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "63e8cf24c1b02114d9331017a1ed298d"
  },
  {
    "url": "tools/git/t2-git-submodule.html",
    "revision": "01e28d5f8b6e2cc2b280d4036cf33b96"
  },
  {
    "url": "tools/html/index.html",
    "revision": "83d31cf7380cef803af087b4a90d5838"
  },
  {
    "url": "tools/plantuml/index.html",
    "revision": "b03114e83b5f1aedd52ff2e5357da0f2"
  },
  {
    "url": "tools/plantuml/t1-sequence-diagram.html",
    "revision": "8980a211f3f2d2e07ce877a2d02db2a0"
  },
  {
    "url": "tools/plantuml/t2-class-diagram.html",
    "revision": "1953fa9fae0f51183a41cdb50c6607ec"
  },
  {
    "url": "tools/vuepress/deploy-github-action.html",
    "revision": "48d1e2019309bc29bbdf4063a9de099f"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "0084d3e239f55fdf992bc926cd255949"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "289ef297c64a285ff8badbd737f50451"
  },
  {
    "url": "tools/vuepress/memory-out.html",
    "revision": "2fe893749f46c41f5947d51f950a62c9"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "bf59ab19e682772fd4796d190b99a6c4"
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
