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
    "revision": "8b7459cae995a49e455894387aba3482"
  },
  {
    "url": "about/app/index.html",
    "revision": "04f3bd73d2348907043f2551e28ba676"
  },
  {
    "url": "about/app/t1-protocol.html",
    "revision": "dfcbf79905bd6d878d3c8f54c26bfe5d"
  },
  {
    "url": "about/app/t2-secrect.html",
    "revision": "e61fc531a2c5fd1f0abebf5ad8dd7fa3"
  },
  {
    "url": "about/app/t3-miniapps-sec.html",
    "revision": "27483a5b65505125fd0cbe60614dc309"
  },
  {
    "url": "about/index/index.html",
    "revision": "9cf3be2bc1f5d996377b76247712ad9c"
  },
  {
    "url": "ai/index.html",
    "revision": "ce7e645550e2103b75be03976392b8fb"
  },
  {
    "url": "ai/t1-gzj.html",
    "revision": "89573ef5bdf5e7cf62f388ac632eadbb"
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
    "url": "assets/js/10.b08c7883.js",
    "revision": "42c66962b3108e84a73eb069c94d798b"
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
    "url": "assets/js/104.b52c7cc8.js",
    "revision": "1740407089071b9adbf47d7df1658c79"
  },
  {
    "url": "assets/js/105.d11b590a.js",
    "revision": "cb0a08c85d5dc0cb540b5c90721a4f16"
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
    "url": "assets/js/12.18df4f1f.js",
    "revision": "a1bc68ca9d7a384d0ebed7ba81374da9"
  },
  {
    "url": "assets/js/120.7a30713b.js",
    "revision": "3e9afdc6cff5f42aeceea954d6691bf4"
  },
  {
    "url": "assets/js/121.f6bab6cb.js",
    "revision": "d13853bca3cf1c3805a7f6113a207d37"
  },
  {
    "url": "assets/js/122.02e4240f.js",
    "revision": "c97e0802ffb2fefb30f25a62651aacfa"
  },
  {
    "url": "assets/js/123.3929354e.js",
    "revision": "413b66a1b598451c2357e1925375efc7"
  },
  {
    "url": "assets/js/124.4f3f5b9b.js",
    "revision": "35bce75b4aff4d155b3221d48c388fcb"
  },
  {
    "url": "assets/js/125.ddb75d0a.js",
    "revision": "d25403778ca4e946e29554a0390863e1"
  },
  {
    "url": "assets/js/126.82c24d7d.js",
    "revision": "b7845add5e8b9c767999a30d29bd9a40"
  },
  {
    "url": "assets/js/127.f8061731.js",
    "revision": "c2c114cb28770ce348b32157166ffcaa"
  },
  {
    "url": "assets/js/128.8d15904e.js",
    "revision": "b98e29fe04cff62b76dcb5a776f8e5aa"
  },
  {
    "url": "assets/js/129.8d4aa13c.js",
    "revision": "c74a0626e037d892c349d503cf1b2296"
  },
  {
    "url": "assets/js/13.89fd4d29.js",
    "revision": "d1a1a8f89543c4fc4a137198e4a073b1"
  },
  {
    "url": "assets/js/130.0706f4ef.js",
    "revision": "3ffc1913a0e3c86669e87ffc77752969"
  },
  {
    "url": "assets/js/131.951851f8.js",
    "revision": "65df65f7bee452a4bc80c0d0f201159d"
  },
  {
    "url": "assets/js/132.fd3d29ac.js",
    "revision": "36415a9e59e83a13d7cfa19928e7a86c"
  },
  {
    "url": "assets/js/133.98f43c49.js",
    "revision": "e2b3bad0744f26e7495bc1350ec289ea"
  },
  {
    "url": "assets/js/134.8d170870.js",
    "revision": "696a9a65824e3c8be574cf2800b4aaa5"
  },
  {
    "url": "assets/js/135.c5f8f52d.js",
    "revision": "48105b2be73371ab8e8bcb52fbe8cc01"
  },
  {
    "url": "assets/js/136.e5f2d60f.js",
    "revision": "46a8e6f6abaaf9319a453c9c323a83cb"
  },
  {
    "url": "assets/js/137.cad73a6a.js",
    "revision": "e4f22530546769facbd9d909a18f56a3"
  },
  {
    "url": "assets/js/138.6e9a8709.js",
    "revision": "2072c8af6e469e878357264a3b911c95"
  },
  {
    "url": "assets/js/139.17c4034c.js",
    "revision": "2f5d33404e76cbc0f025883515fd3e9d"
  },
  {
    "url": "assets/js/14.878f25c8.js",
    "revision": "e1ba8e957942181d372d46dfd1d2be33"
  },
  {
    "url": "assets/js/140.2b76a94f.js",
    "revision": "075913dd73d10f55326c30af06f2c8fe"
  },
  {
    "url": "assets/js/141.5bef57f9.js",
    "revision": "5caa294d33d5530015fda2d638d3ee89"
  },
  {
    "url": "assets/js/142.db2df294.js",
    "revision": "5281f675aa0c970abea5fefc4ad22873"
  },
  {
    "url": "assets/js/143.b0b98ce8.js",
    "revision": "a1b7de5cf9b59de479a36e688e4d18db"
  },
  {
    "url": "assets/js/144.82678cbb.js",
    "revision": "836e77dfdd828171c39e2495ccb40d80"
  },
  {
    "url": "assets/js/145.1a46ae7c.js",
    "revision": "1864f161a3b2ec17bb181564f5f6f9b7"
  },
  {
    "url": "assets/js/146.58432d82.js",
    "revision": "e734c85e8f9de4561775fc85ffe6b365"
  },
  {
    "url": "assets/js/147.51f4342a.js",
    "revision": "174ccb35f2695f8ec300dffe1316b9c6"
  },
  {
    "url": "assets/js/148.da40c8cd.js",
    "revision": "f632273b875be97c466e59f7beecf189"
  },
  {
    "url": "assets/js/149.37389048.js",
    "revision": "ddba50d81c88c7e6b999d1d6acccdbb8"
  },
  {
    "url": "assets/js/15.dd92496d.js",
    "revision": "f00eb863eabe663441fa39fab46ee5de"
  },
  {
    "url": "assets/js/150.d804b02c.js",
    "revision": "409ce9a7a3f3db75e9595cfed40cabce"
  },
  {
    "url": "assets/js/151.39a87aad.js",
    "revision": "3f0186435cc4c83abed9e21053333aad"
  },
  {
    "url": "assets/js/152.91472bd9.js",
    "revision": "ca84bd92a84a59f95e0ef9b07c1ffb59"
  },
  {
    "url": "assets/js/153.a9d318c8.js",
    "revision": "903b8e2e47ee5bf26dcbeb5d1893bb11"
  },
  {
    "url": "assets/js/154.0a7e23fe.js",
    "revision": "ef0335f2e9af1d04df10147e8e6b3dda"
  },
  {
    "url": "assets/js/155.84428d39.js",
    "revision": "e78d01b7a9366de9a045967435959a54"
  },
  {
    "url": "assets/js/156.de53d97e.js",
    "revision": "a29923076c06426865e7a26e877eacc8"
  },
  {
    "url": "assets/js/157.21f1ecb7.js",
    "revision": "562d23a35fd07a080a8eac4e3970eb5d"
  },
  {
    "url": "assets/js/158.e938fe73.js",
    "revision": "b53c428dab9d70c7220f6df44835fdcd"
  },
  {
    "url": "assets/js/159.b91d23b1.js",
    "revision": "72f352bc0c4e0f3eb6c952e32e395cd8"
  },
  {
    "url": "assets/js/16.256ffb31.js",
    "revision": "d787b8519fc3535cbdb308a5a338e839"
  },
  {
    "url": "assets/js/160.e236b0ee.js",
    "revision": "688cb66d253888ccf3608f0cee9a2317"
  },
  {
    "url": "assets/js/161.2458c712.js",
    "revision": "0e6c1696d25fc8f03cfcb326938ca111"
  },
  {
    "url": "assets/js/162.154d5d88.js",
    "revision": "2fdf61497026d61388610273b6a2dd6e"
  },
  {
    "url": "assets/js/163.ff73059f.js",
    "revision": "5f486893615744086bf187909ef42fc9"
  },
  {
    "url": "assets/js/164.a3f99f6a.js",
    "revision": "64c375d86a38e8457f7581e487bcb264"
  },
  {
    "url": "assets/js/165.37406de8.js",
    "revision": "45f377ceb098fd331792abc468040b23"
  },
  {
    "url": "assets/js/166.a85114d4.js",
    "revision": "c48b67f9989bac5d741a28567663cdc7"
  },
  {
    "url": "assets/js/167.39e5507d.js",
    "revision": "0a3e98a344450af10330ea19e49639c2"
  },
  {
    "url": "assets/js/168.c6d96bc4.js",
    "revision": "4b876dd3fe8a1114db6c582b1c120776"
  },
  {
    "url": "assets/js/169.7fc875c2.js",
    "revision": "a44793f5565374914756e7d6fb211a65"
  },
  {
    "url": "assets/js/17.9d94ba62.js",
    "revision": "ed50f2507795e2e956abe7c1c8741e73"
  },
  {
    "url": "assets/js/170.90aa8664.js",
    "revision": "124b5df7130acea5e8c1937609dcac08"
  },
  {
    "url": "assets/js/171.c6db0b4b.js",
    "revision": "17426243f0987708c549fb55b6267518"
  },
  {
    "url": "assets/js/172.3bc688e4.js",
    "revision": "7be46bdea0eb0964ca61b7d0cff0aeda"
  },
  {
    "url": "assets/js/173.2a10f655.js",
    "revision": "94c8053cd5202d15170c28d9f62dee1e"
  },
  {
    "url": "assets/js/174.0c7432d0.js",
    "revision": "d5f94f70c4f25ddcd67dcff5eb81b6a4"
  },
  {
    "url": "assets/js/175.97016492.js",
    "revision": "62e58f1b602b08b40e09d90f4eae18f4"
  },
  {
    "url": "assets/js/176.d47963ed.js",
    "revision": "cd6b83fe117f903bbfaa1d2002d651c0"
  },
  {
    "url": "assets/js/177.bfb40a11.js",
    "revision": "b367502cfe77c2326afb6c256a6a9acf"
  },
  {
    "url": "assets/js/178.75b20530.js",
    "revision": "f676d5f4ee8fd666f5ee36f5e5a5543e"
  },
  {
    "url": "assets/js/179.dfc8ca22.js",
    "revision": "ed3d734e6ba9057e605e85c99cce8972"
  },
  {
    "url": "assets/js/18.06797c0d.js",
    "revision": "ac89ef8caeec7579ee2be0dc3c949615"
  },
  {
    "url": "assets/js/180.84072111.js",
    "revision": "e90c31295a4dce2eeb8d20548e5655d2"
  },
  {
    "url": "assets/js/181.75471e6c.js",
    "revision": "8d3b3b2de73fddebf084075703b330e2"
  },
  {
    "url": "assets/js/182.153886dd.js",
    "revision": "a2e9fd40a715365b7d2d5e5f79a619e4"
  },
  {
    "url": "assets/js/183.5fcce434.js",
    "revision": "bb14fccf97cc9c629b71811a0fb0c6cc"
  },
  {
    "url": "assets/js/184.330ee4d2.js",
    "revision": "a4ea10a30032ed6520b773ea86793de5"
  },
  {
    "url": "assets/js/185.2c10c393.js",
    "revision": "83fa713742b031fc74db12a61cabe040"
  },
  {
    "url": "assets/js/186.6f46dc86.js",
    "revision": "d84a28bab91d5f4068a1c6fcd65248a1"
  },
  {
    "url": "assets/js/187.102d0201.js",
    "revision": "1725e10ba230f45202e1813814d09489"
  },
  {
    "url": "assets/js/188.ecb908f2.js",
    "revision": "cbeddae570c83f63982fe86db67ef614"
  },
  {
    "url": "assets/js/189.1239c903.js",
    "revision": "095e11b139a52f6ca53e6c4aff596257"
  },
  {
    "url": "assets/js/19.7a13361c.js",
    "revision": "76fb08c8f25f12ca529404ff657ccc78"
  },
  {
    "url": "assets/js/190.11e516cf.js",
    "revision": "e2991519b9133a133faf2e0fa6d37612"
  },
  {
    "url": "assets/js/191.3c133467.js",
    "revision": "dd23d037eafd49d50047ce3768d94b91"
  },
  {
    "url": "assets/js/192.72f296be.js",
    "revision": "bb7b61ddf6ae0b049687fd978f88fa76"
  },
  {
    "url": "assets/js/193.0fc1ddee.js",
    "revision": "54fd1ef977820cda906889873181a65f"
  },
  {
    "url": "assets/js/194.9aed654b.js",
    "revision": "c87239e46292928a44cdd22e5a9e1d0e"
  },
  {
    "url": "assets/js/195.bcee603a.js",
    "revision": "e855eecd342f9e2f17dbc5e520bb8589"
  },
  {
    "url": "assets/js/196.a8042923.js",
    "revision": "99d862607881835e93ddc1911a9d8c39"
  },
  {
    "url": "assets/js/197.594a52f3.js",
    "revision": "3e703b083c46e1c402dd6af401f3517b"
  },
  {
    "url": "assets/js/198.a9152064.js",
    "revision": "c095ca70ff9cb23b59f706dd61098d9b"
  },
  {
    "url": "assets/js/199.1a437d3b.js",
    "revision": "942b574060ce17ef77f5b31ca0a06a5f"
  },
  {
    "url": "assets/js/20.bc0a0118.js",
    "revision": "0fb2f755b292e74478df6bcf40f07f61"
  },
  {
    "url": "assets/js/200.b42ce062.js",
    "revision": "b1df453d637a6790b2fbc8998b1fc348"
  },
  {
    "url": "assets/js/201.efafda88.js",
    "revision": "08a2fe36d6e3ce46c183de3d624c502e"
  },
  {
    "url": "assets/js/202.602c563b.js",
    "revision": "c684d2839fd92c74f3001743483343f2"
  },
  {
    "url": "assets/js/203.8ba217e0.js",
    "revision": "417bca19872e9698a9cf86cf41bdeda1"
  },
  {
    "url": "assets/js/204.3c5e2466.js",
    "revision": "13c2100a704e5cdbcca60e1ff4b7778e"
  },
  {
    "url": "assets/js/205.a5f99457.js",
    "revision": "1200506041c519a6a290912f2233b9a7"
  },
  {
    "url": "assets/js/206.0d8b2286.js",
    "revision": "de9d5e9094f00c18126d364e4f16ef60"
  },
  {
    "url": "assets/js/207.28125488.js",
    "revision": "1f382ca7b57e39e811b45b9c84b2c7cc"
  },
  {
    "url": "assets/js/208.6b705066.js",
    "revision": "55f69e62518c4195215a2a3ae1802dd6"
  },
  {
    "url": "assets/js/209.26aac722.js",
    "revision": "d8893383ade3bc7d0d3a084c983bc626"
  },
  {
    "url": "assets/js/21.2511433a.js",
    "revision": "def162b31ae514fe12552947e29d51ef"
  },
  {
    "url": "assets/js/210.01c8b349.js",
    "revision": "e5f40dd8363c09a03d6d6dbd96933530"
  },
  {
    "url": "assets/js/211.ca1dabf7.js",
    "revision": "fce07254193b7d75493446d268d87c87"
  },
  {
    "url": "assets/js/212.5523386a.js",
    "revision": "22fb02ab8358c360475ff78241075775"
  },
  {
    "url": "assets/js/213.cc48f527.js",
    "revision": "2c5d9dd938d49b3d9f94c651f00f2917"
  },
  {
    "url": "assets/js/214.de11731a.js",
    "revision": "441a1077dd4dc4bea5f282598b27c236"
  },
  {
    "url": "assets/js/215.0d8ad89a.js",
    "revision": "4104f858c1521de6834abe3df2d8c90e"
  },
  {
    "url": "assets/js/216.3aeb66e5.js",
    "revision": "80ff08f1ca5d4ddc6ba020e57c310f19"
  },
  {
    "url": "assets/js/217.1c17ad90.js",
    "revision": "340c10f4dcdd2a8c619ac2d2b73eab21"
  },
  {
    "url": "assets/js/218.35ba5bb5.js",
    "revision": "6bff997931a5d646a85e5c9921ae3a17"
  },
  {
    "url": "assets/js/219.136a2816.js",
    "revision": "16ffc3a4cb9a5b091a9f1bf2f71d8b23"
  },
  {
    "url": "assets/js/22.1eec3af5.js",
    "revision": "55c1ff20160770c838a5edb42c78ef23"
  },
  {
    "url": "assets/js/220.a079a99a.js",
    "revision": "e5e9d960ff5bf8dde9c71dd77643d4c2"
  },
  {
    "url": "assets/js/221.55a48e07.js",
    "revision": "5b2c538932d9addcf4cc2d7798e12065"
  },
  {
    "url": "assets/js/222.86aeb555.js",
    "revision": "f771357dbc831b7830155f4218e9d8b1"
  },
  {
    "url": "assets/js/223.84683dc5.js",
    "revision": "f92712afcefa76e0883f5e521ebd90a2"
  },
  {
    "url": "assets/js/224.bbe85718.js",
    "revision": "b4a58690accb69f6314501faa767fa47"
  },
  {
    "url": "assets/js/225.9d6e870a.js",
    "revision": "0cad1558fcf42d6f56b877b8d210f5f0"
  },
  {
    "url": "assets/js/226.01499cbd.js",
    "revision": "502c67a824ecffec1e590b21b54787c7"
  },
  {
    "url": "assets/js/227.5d3a7b13.js",
    "revision": "f05ca6adf5c09728472a5cca8ac9f2b1"
  },
  {
    "url": "assets/js/228.09465e99.js",
    "revision": "6e639ad28585037bec519ddad91561ce"
  },
  {
    "url": "assets/js/229.55748a4b.js",
    "revision": "d65b4188f0548ef2c689bf1230f14bdd"
  },
  {
    "url": "assets/js/23.5ec29240.js",
    "revision": "0f2e6d1e9681b329f6fddf920a3d75b5"
  },
  {
    "url": "assets/js/230.009451b3.js",
    "revision": "af859a9e2c81cd232dcb97226109a3ae"
  },
  {
    "url": "assets/js/231.6ae34619.js",
    "revision": "c233ad5c5fe08edd698c323433e5ef91"
  },
  {
    "url": "assets/js/232.2013a985.js",
    "revision": "ad8bf101a6fa621ccffd55aa79ad0028"
  },
  {
    "url": "assets/js/233.f3f9719f.js",
    "revision": "b0f400f4a44e8f1db48828642604bf42"
  },
  {
    "url": "assets/js/234.c6c99b38.js",
    "revision": "149965f5bcc7c23f11bf202f2d6f4d5b"
  },
  {
    "url": "assets/js/235.428084b6.js",
    "revision": "e8570b7c4819fe96dd88041321aec062"
  },
  {
    "url": "assets/js/236.e42bbc86.js",
    "revision": "3fd2de4fbae1f5f5949af9783c5fa027"
  },
  {
    "url": "assets/js/237.55897a29.js",
    "revision": "2b1496eaf25b3f7089352c6d6cd52d5c"
  },
  {
    "url": "assets/js/238.dd302075.js",
    "revision": "29fa86a737a9c634f3a179e513aa4f74"
  },
  {
    "url": "assets/js/239.4af4c900.js",
    "revision": "6da137c1463e8bd1f81eb2030c091264"
  },
  {
    "url": "assets/js/24.124148d1.js",
    "revision": "ad4351b30c6d2aadb9642337bb13e170"
  },
  {
    "url": "assets/js/240.d6dcd604.js",
    "revision": "fe5191756e62203423676421899107ac"
  },
  {
    "url": "assets/js/241.7fc84e58.js",
    "revision": "3701011d9bd3ca9b16b98d1f4227ffe3"
  },
  {
    "url": "assets/js/242.3e3c99a8.js",
    "revision": "3e307e699fdd37f06d42826793b880b9"
  },
  {
    "url": "assets/js/243.881a767b.js",
    "revision": "a551ebc634b03f11aceaed037fa89f96"
  },
  {
    "url": "assets/js/244.f96f5c75.js",
    "revision": "fa7b4fe15e7d510dcbca284089fdc619"
  },
  {
    "url": "assets/js/245.39003335.js",
    "revision": "1f7874bc95d1d682a39c475798eb5617"
  },
  {
    "url": "assets/js/246.0ae62cb8.js",
    "revision": "c209a4cae7ff2f95e6ba5ac1bca91094"
  },
  {
    "url": "assets/js/247.0fd11b83.js",
    "revision": "c18e8409e6ecbf618d7e6159149c6310"
  },
  {
    "url": "assets/js/248.db34fa10.js",
    "revision": "6379c38abb022043a4ece8c6177948a1"
  },
  {
    "url": "assets/js/249.6f1402b4.js",
    "revision": "d2d20a0ce7fde6892b5146c3e1af3f1f"
  },
  {
    "url": "assets/js/25.c70c235b.js",
    "revision": "70ed7d8e863d3fa74f864148e8269e7e"
  },
  {
    "url": "assets/js/250.bfe8cdb2.js",
    "revision": "e1da898cee0b82170e24de03c803f896"
  },
  {
    "url": "assets/js/251.f6aab267.js",
    "revision": "35f599427ef44ab737d9b558adf4daef"
  },
  {
    "url": "assets/js/252.3d3d2fed.js",
    "revision": "91ccb1ac42e6b35ff6e61732b5689edd"
  },
  {
    "url": "assets/js/253.157e628c.js",
    "revision": "314feb3461b6439277be7a304ca12a7e"
  },
  {
    "url": "assets/js/254.eeef6ebe.js",
    "revision": "598a71ccab0153b82968e8a3bf6ab425"
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
    "url": "assets/js/35.b91dd8c8.js",
    "revision": "b8831193d7f4e92e53335fcf7eb7df8e"
  },
  {
    "url": "assets/js/36.4189a875.js",
    "revision": "e95cc6141734bb5b9dac7ea7bd61d069"
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
    "url": "assets/js/42.1a3bbd9b.js",
    "revision": "dbf2bf4d9d1e34951672119de548db01"
  },
  {
    "url": "assets/js/43.511dfcf3.js",
    "revision": "5f840d31113121450acdec132a0c8ee6"
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
    "url": "assets/js/57.c459dae8.js",
    "revision": "440ae3cb7c5de71f6c57fc15457c08c3"
  },
  {
    "url": "assets/js/58.4c7c9ef8.js",
    "revision": "671866894ddb89a648eefd55ca0417be"
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
    "url": "assets/js/60.fb1bd77c.js",
    "revision": "cddaf1caae9d4aae2da41a5434edb3a3"
  },
  {
    "url": "assets/js/61.ed15bc93.js",
    "revision": "0ade2c8dd7ae0d0da7e18befda748f42"
  },
  {
    "url": "assets/js/62.424b703c.js",
    "revision": "84e4e304f18100d35fa13b98ff27cc8f"
  },
  {
    "url": "assets/js/63.a217f3f9.js",
    "revision": "fb82dbc6a584709398936eed3938300f"
  },
  {
    "url": "assets/js/64.3afcf70d.js",
    "revision": "74b635f8e633843de508d9bcd28eb741"
  },
  {
    "url": "assets/js/65.68494020.js",
    "revision": "d552432d757be63e8a7d099c38ac639b"
  },
  {
    "url": "assets/js/66.3bddb7ba.js",
    "revision": "a2281e97982fa3adfc2747372a2a0289"
  },
  {
    "url": "assets/js/67.c9399879.js",
    "revision": "2d76d02b32cae1c0f6acb2c51507a9a3"
  },
  {
    "url": "assets/js/68.5a7e2a4a.js",
    "revision": "a5d4b35e0b84d9170a531d9216115e10"
  },
  {
    "url": "assets/js/69.8cd0c9f5.js",
    "revision": "4cc2d753328ca5e6d5c4669b252a40c6"
  },
  {
    "url": "assets/js/7.3defe02f.js",
    "revision": "d5cb8446c258e8c108a9be4a8183e381"
  },
  {
    "url": "assets/js/70.427b1673.js",
    "revision": "66920d2940bf3aaa999c628be9e8509c"
  },
  {
    "url": "assets/js/71.b1319af8.js",
    "revision": "4d413f1ae540cf0e9299f662762d2ee8"
  },
  {
    "url": "assets/js/72.0301f575.js",
    "revision": "2f5425847f48f1b220316730cd1f7fb5"
  },
  {
    "url": "assets/js/73.1eb76f36.js",
    "revision": "5e66aebeac73ff3e7c4c0bbf5e0399fa"
  },
  {
    "url": "assets/js/74.1e094928.js",
    "revision": "8b62ac1bc2879a8146d25664cea09778"
  },
  {
    "url": "assets/js/75.5c5af2d6.js",
    "revision": "6e2af295bee878edb35586c20a849863"
  },
  {
    "url": "assets/js/76.fc938944.js",
    "revision": "655559ddee485f3a47ada4e6662aab0a"
  },
  {
    "url": "assets/js/77.91fc898c.js",
    "revision": "8056fa9522af8f4984a26df87682a35f"
  },
  {
    "url": "assets/js/78.72466aed.js",
    "revision": "f107a56e9ed807853e60d0687ca244fa"
  },
  {
    "url": "assets/js/79.7825faed.js",
    "revision": "ec26437c234123ea894f58de77604aea"
  },
  {
    "url": "assets/js/8.321f929e.js",
    "revision": "8089ae2cb60c42b9376220351e563b77"
  },
  {
    "url": "assets/js/80.f1d1fad9.js",
    "revision": "47b2c98a140a98279c6a20e3883a9951"
  },
  {
    "url": "assets/js/81.92698e6d.js",
    "revision": "cb7b925c7f6be87016fa3917af43e6ce"
  },
  {
    "url": "assets/js/82.8e9b8c83.js",
    "revision": "483f792d6d23924ce72c5a206a0cce1f"
  },
  {
    "url": "assets/js/83.fdc2a85c.js",
    "revision": "3e9da65bc4576b3b596052b54766da52"
  },
  {
    "url": "assets/js/84.834aab2b.js",
    "revision": "6762b9f3ecf8ebeb6de3720d3907c41c"
  },
  {
    "url": "assets/js/85.58530b19.js",
    "revision": "8b3de143368fbd990bd636ffce9943f6"
  },
  {
    "url": "assets/js/86.d8ba3ab5.js",
    "revision": "7f1d940ab316c8c835c1328ba0d3fc7b"
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
    "url": "assets/js/app.439a7d8d.js",
    "revision": "36a27e59d7e02e1e84b914feac1abeae"
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
    "revision": "6f262d0068ba59a0995a6c04452d8ad0"
  },
  {
    "url": "basis/algorithms/t1-buble-sort.html",
    "revision": "4f0979283aaef1c3d2617ea2c4018c6b"
  },
  {
    "url": "basis/algorithms/t2-selection-sort.html",
    "revision": "77031407771cc9a1c062d6565babd9f6"
  },
  {
    "url": "basis/algorithms/t3-insertion-sort.html",
    "revision": "b728474bb320a19d85b32281cf8083b4"
  },
  {
    "url": "basis/algorithms/t4-shell-sort.html",
    "revision": "09f53d354ccb239e3063034a2c8f0ce4"
  },
  {
    "url": "basis/algorithms/t5-quick-sort.html",
    "revision": "e059280397daad6179db500305836160"
  },
  {
    "url": "basis/algorithms/t6-heap-sort.html",
    "revision": "b329991ef31ab0883028f21e7d14997b"
  },
  {
    "url": "basis/algorithms/t7-merge-sort.html",
    "revision": "47619f224a8d9629e4528fbbd8369b8b"
  },
  {
    "url": "basis/algorithms/t8-radix-sort.html",
    "revision": "b79be2927116210ec1b5f1aba7d83c24"
  },
  {
    "url": "basis/algorithms/t9-count-sort.html",
    "revision": "36262caa175400d76e9246f94e11c078"
  },
  {
    "url": "basis/algorithms/u1-bucket-sort.html",
    "revision": "943b213d22cce657b475912b8102c063"
  },
  {
    "url": "basis/design-patterns/AdapterPattern.html",
    "revision": "c7ceddf54167d5dcde7788bfadfdc736"
  },
  {
    "url": "basis/design-patterns/BridgePattern.html",
    "revision": "89c14cb0846704e9bcc7b1c3f0b9ec54"
  },
  {
    "url": "basis/design-patterns/BuilderPattern.html",
    "revision": "f2839ffd6f820cf8c9803cab845340b0"
  },
  {
    "url": "basis/design-patterns/ChainOfResponsibilityPattern.html",
    "revision": "90c113ed28d61489203f2ec00cdca540"
  },
  {
    "url": "basis/design-patterns/ClassReleation.html",
    "revision": "28c7ca8823cb968eb1f544c2103146fc"
  },
  {
    "url": "basis/design-patterns/CommandPattern.html",
    "revision": "c34f90af19c1113667d5d14cc648b32d"
  },
  {
    "url": "basis/design-patterns/CompositePattern.html",
    "revision": "15482087b07222514e801539201a834b"
  },
  {
    "url": "basis/design-patterns/DecoratorPattern.html",
    "revision": "0debf1797a35f70563daa809d3db8eba"
  },
  {
    "url": "basis/design-patterns/DesignPrinciples.html",
    "revision": "7474e91e252d5e9f65a69ec5f020a84b"
  },
  {
    "url": "basis/design-patterns/FacadePattern.html",
    "revision": "3fed24189f1f960b510d24a2e8334cbb"
  },
  {
    "url": "basis/design-patterns/FactoryPattern.html",
    "revision": "524016f0f4041e50f4619602b44981a4"
  },
  {
    "url": "basis/design-patterns/FilterCriteriaPattern.html",
    "revision": "97c8038076a6d0138d95d826a081df3d"
  },
  {
    "url": "basis/design-patterns/FlyweightPattern.html",
    "revision": "a31306b6c37f5e93136b636dc7e10509"
  },
  {
    "url": "basis/design-patterns/index.html",
    "revision": "abe6348355211733376c9ae8af6182f2"
  },
  {
    "url": "basis/design-patterns/InterpreterPattern.html",
    "revision": "45a2b64d4ed3c1496713d8e486cd5306"
  },
  {
    "url": "basis/design-patterns/IteratorPattern.html",
    "revision": "50cd0101faae098b013b187f241ebc5d"
  },
  {
    "url": "basis/design-patterns/MediatorPattern.html",
    "revision": "6d330876d7f1480dbd2f7ae2253d2344"
  },
  {
    "url": "basis/design-patterns/MementoPattern.html",
    "revision": "cfb6b839bcce7f873b4210117a6ff93b"
  },
  {
    "url": "basis/design-patterns/NullObjectPattern.html",
    "revision": "050bd4c2e8f913b167cbf73d4c13e908"
  },
  {
    "url": "basis/design-patterns/ObserverPattern.html",
    "revision": "b800616aafe2662513de52357a259dab"
  },
  {
    "url": "basis/design-patterns/PrototypePattern.html",
    "revision": "39038cbf9e8bd1f3a49849e3dd34b1c2"
  },
  {
    "url": "basis/design-patterns/ProxyPattern.html",
    "revision": "f38bd0725640c68fd9a5331d4f5ead01"
  },
  {
    "url": "basis/design-patterns/SingletonPattern.html",
    "revision": "3049d41f715d78bc587f8812bf6aa26f"
  },
  {
    "url": "basis/design-patterns/StatePattern.html",
    "revision": "9796103412c0014450f5830bed4e91ca"
  },
  {
    "url": "basis/design-patterns/StrategyPattern.html",
    "revision": "e0bee766d7f23f9348c9418d2db43540"
  },
  {
    "url": "basis/design-patterns/TemplatePattern.html",
    "revision": "9f31c2cbddd15895baacdd3e0ae993d6"
  },
  {
    "url": "basis/design-patterns/VisitorPattern.html",
    "revision": "b85f1e89e8e678a0e2d830fb669d4e0d"
  },
  {
    "url": "basis/index/index.html",
    "revision": "2c75d29f1f6be410c7bea47674c851f6"
  },
  {
    "url": "basis/os/index.html",
    "revision": "2edadbf4b8ebdd3e17b04dc32c226445"
  },
  {
    "url": "book/index.html",
    "revision": "ea617909a650f81c3acd9a6a8263d760"
  },
  {
    "url": "book/t-find-books.html",
    "revision": "15c507f2ea05812dc1625aa5e7ed3f7d"
  },
  {
    "url": "c/audio/audio-basic.html",
    "revision": "59434d21873bdc56637348a965301998"
  },
  {
    "url": "c/audio/endian.html",
    "revision": "64910c95618dacc169533221f594bb64"
  },
  {
    "url": "c/audio/index.html",
    "revision": "6c46c037ebc928275d55c2a2fea60efd"
  },
  {
    "url": "c/cmake/01-basic/A-hello-cmake.html",
    "revision": "1b22ffe6b3ab836a7389520d5b19b461"
  },
  {
    "url": "c/cmake/01-basic/B-hello-headers.html",
    "revision": "a92450feefbe29f4e1c3f0d52d978ba5"
  },
  {
    "url": "c/cmake/01-basic/C-static-library.html",
    "revision": "01654e2d7e6cf2c3b3b1f0c18aac1afc"
  },
  {
    "url": "c/cmake/01-basic/D-shared-library.html",
    "revision": "ad00dee64be8c4a4170bf9aa4d507477"
  },
  {
    "url": "c/cmake/01-basic/E-installing.html",
    "revision": "48a969f4de8a91c5f070df414060cab2"
  },
  {
    "url": "c/cmake/01-basic/F-build-type.html",
    "revision": "443a346f231eb889ff3856e838cb7718"
  },
  {
    "url": "c/cmake/01-basic/G-compile-flags.html",
    "revision": "7f01a31d31455a205b360e3f6d618cc4"
  },
  {
    "url": "c/cmake/01-basic/H-third-party-library.html",
    "revision": "4a5c6f6e6b074ae76cdacd6b743a2985"
  },
  {
    "url": "c/cmake/01-basic/I-compiling-with-clang.html",
    "revision": "c0fdae60d545708bed30d0dc6b7ff012"
  },
  {
    "url": "c/cmake/01-basic/index.html",
    "revision": "13f2858fb11d4df167185570f69e33f3"
  },
  {
    "url": "c/cmake/01-basic/J-building-with-ninja.html",
    "revision": "57aefdd618641458f16bb93ec8710a91"
  },
  {
    "url": "c/cmake/01-basic/K-imported-targets.html",
    "revision": "49d023dbd793fad51457af649a738d45"
  },
  {
    "url": "c/cmake/01-basic/L-cpp-standard.html",
    "revision": "a5eee38b5fd8361a06e9970dcaece3b6"
  },
  {
    "url": "c/cmake/index.html",
    "revision": "4cd7cb61292a310907d91184938e32cd"
  },
  {
    "url": "c/program/index.html",
    "revision": "18a2a8551d2b93ae7b5a1f3094526031"
  },
  {
    "url": "c/program/pointers.html",
    "revision": "7026f6b1c3be4fe3f04e6b5595f0a632"
  },
  {
    "url": "categories/index.html",
    "revision": "b600114ffadc3cb3ffb171cf874fac90"
  },
  {
    "url": "figma/figma-install-chinese-font.html",
    "revision": "a07d69c8d381470d0a39188e6fe92c13"
  },
  {
    "url": "figma/index.html",
    "revision": "7e4528110124c7e2d6d16caa383f0c6e"
  },
  {
    "url": "flutter/flutter-color.html",
    "revision": "bce734ff12d7895d8e9713094cefd2f3"
  },
  {
    "url": "flutter/github-actions-build-flutter-android.html",
    "revision": "65562a2c153c12ae6172e801e34fe3ef"
  },
  {
    "url": "flutter/github-actions-build-flutter-ios.html",
    "revision": "4debaee8cb185fc57817fefb4399dcde"
  },
  {
    "url": "flutter/index.html",
    "revision": "cc3bb81bc3503315c4fca5a26bfca176"
  },
  {
    "url": "flutter/point.html",
    "revision": "a33a5151688db2e395351b96a5364446"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "3e49924c9d2808a320c34a388c925f2b"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "cd8a488855a8b8b15d67b17df9e1fdb8"
  },
  {
    "url": "flutter/t3-messages.html",
    "revision": "16e2bc31dddc7eddb3548a43be748dea"
  },
  {
    "url": "flutter/t3-mixin.html",
    "revision": "ab22ad6352e9155d5fc69bb41e05f5c7"
  },
  {
    "url": "flutter/t4-lifecycle.html",
    "revision": "edaefe012014f649d81094d2ca068405"
  },
  {
    "url": "flutter/t5-flutter-web-deploy.html",
    "revision": "3bf0c01d790db6e6533b6467cd16a092"
  },
  {
    "url": "flutter/t6-docker-web-deploy.html",
    "revision": "b48b59b7c2de58f50eb50a64c5036335"
  },
  {
    "url": "flutter/t7-fvm.html",
    "revision": "8d3a6abf794a282d6b2a0d6e1ae5fb14"
  },
  {
    "url": "flutter/t8-const.html",
    "revision": "06452cb9968cfd24899c28f81a681b10"
  },
  {
    "url": "flutter/t9-logs.html",
    "revision": "36bf06ee4631e246d3759929f6e23244"
  },
  {
    "url": "flutter/u10-fvm-flutter2.html",
    "revision": "33c0465643c88952280df65036ea2848"
  },
  {
    "url": "flutter/u11-flutter-render.html",
    "revision": "7138ca3f1898b48ae90e533464381620"
  },
  {
    "url": "flutter/u12-flutter-create-w.html",
    "revision": "4818c9a606c20ae18b0064ad404ca377"
  },
  {
    "url": "flutter/u12-flutter-web-01.html",
    "revision": "f5bcad92aa80980bf1a57a14b0c46e90"
  },
  {
    "url": "flutter/u12-flutter-web-02.html",
    "revision": "6b9ec84d78122571bcee09fb455df281"
  },
  {
    "url": "flutter/u13-sliverappbar.html",
    "revision": "b4e61e0ba1dd74f64a96404dac1fb5e9"
  },
  {
    "url": "flutter/u14-navbar-color.html",
    "revision": "a7b285ca7263b1a997dec16de7c5f8ca"
  },
  {
    "url": "flutter/u15-custom-nabar.html",
    "revision": "a56d7743e6d8529329be0d4b5d621f8b"
  },
  {
    "url": "flutter/u16-shape.html",
    "revision": "0a909fee191ec211345db2a590faa802"
  },
  {
    "url": "flutter/y1-statubar.html",
    "revision": "48718412edc8b9fc372f6384c1deec87"
  },
  {
    "url": "haskell/1-install.html",
    "revision": "4d19d26d50715aa69b7ab644f99941d0"
  },
  {
    "url": "haskell/2-vscode.html",
    "revision": "c2e7503071c27c16daa116875f216fcc"
  },
  {
    "url": "haskell/3-pktool.html",
    "revision": "ceca8b91f354eae2f0436f92e86d2704"
  },
  {
    "url": "haskell/4-digui.html",
    "revision": "d4e0543f5cd95ab1d866125363154a3c"
  },
  {
    "url": "haskell/index.html",
    "revision": "ddbda0298a97c2d8451e90c544e1933c"
  },
  {
    "url": "index.html",
    "revision": "d75cfc6d0b3319a2b3f966f2e24f3c4a"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "python/1-file-map.html",
    "revision": "e96d8617830ca09e525164165c137eca"
  },
  {
    "url": "python/2-mongo-random.html",
    "revision": "5d045412225ba3f736e06e42396c3479"
  },
  {
    "url": "python/3-page-upload.html",
    "revision": "4e34b1ea678029b58c6e8990644a6cd1"
  },
  {
    "url": "python/4-bt-flask.html",
    "revision": "7058f8be4b9e347d4de010a5c92e20b9"
  },
  {
    "url": "python/index.html",
    "revision": "77ae60635f78de462c257c8680040c16"
  },
  {
    "url": "python/python-develop-env.html",
    "revision": "0f6239767ac78a9765f6f283c05e2c36"
  },
  {
    "url": "python/python-file.html",
    "revision": "d6ebb01f709beafee586df045805434c"
  },
  {
    "url": "python/python-function.html",
    "revision": "58c58234cd202c2b404beea4d2cc07ed"
  },
  {
    "url": "python/python-module.html",
    "revision": "a6657548028d668b6ed9b05b40088b14"
  },
  {
    "url": "python/python-string.html",
    "revision": "91a93df39e6a078b446a76ec9f32830a"
  },
  {
    "url": "read/head-first-oop.html",
    "revision": "fe2924927c40c1044b5aa1683f4e77cc"
  },
  {
    "url": "read/index.html",
    "revision": "aa3a5c9db58e0c1d8badae59bba41ade"
  },
  {
    "url": "swift/better/autoclosure.html",
    "revision": "359d16e62ac280fd8c19827162c27bf4"
  },
  {
    "url": "swift/better/available.html",
    "revision": "c6b7fbfe8dced22ed5acdbaea59cac7d"
  },
  {
    "url": "swift/better/chain.html",
    "revision": "a0c929966bc787aee64a2ec0ac48d0bd"
  },
  {
    "url": "swift/better/copy-in-copy-out.html",
    "revision": "18243f2ef3fcb31229f62ee1f5b650f2"
  },
  {
    "url": "swift/better/Copy-On-Write.html",
    "revision": "8143b7652380d0d1ca68c04abca740d7"
  },
  {
    "url": "swift/better/di.html",
    "revision": "275dc1af1a24a1cbae99af36e3e30fdb"
  },
  {
    "url": "swift/better/index.html",
    "revision": "f314469f7279efcb8c017feaf5e003e0"
  },
  {
    "url": "swift/better/last.html",
    "revision": "778464faafdb2c139b7a30c397d2a063"
  },
  {
    "url": "swift/better/lazy.html",
    "revision": "96f2dbf09085e268cfd28ab6459f6298"
  },
  {
    "url": "swift/better/protocol.html",
    "revision": "e462d4c2a294287292c11dbeb86e6e20"
  },
  {
    "url": "swift/fp/index.html",
    "revision": "d37b2974ec1181f7c2dd9d38258bc1bd"
  },
  {
    "url": "swift/fp/t1-fp.html",
    "revision": "a6f3717610a850eece3b96a614c0d5c3"
  },
  {
    "url": "swift/fp/t2-lens.html",
    "revision": "69c8d347438b9bd6116a024e17bb117a"
  },
  {
    "url": "swift/fp/t3-json1.html",
    "revision": "818f97e109f216e1d0e7f7e2ec840f9d"
  },
  {
    "url": "swift/fp/t3-json2.html",
    "revision": "21822899048515372bfcfd9498312c4c"
  },
  {
    "url": "swift/fp/t3-json3.html",
    "revision": "7d3a1525bef0bcf096cb785e944aee3c"
  },
  {
    "url": "swift/fp/t4-length.html",
    "revision": "3c475d0513a9320b79d2036d95a46bd0"
  },
  {
    "url": "swift/ios/index.html",
    "revision": "0c1e486bcfac153c78a88f6a80d31a02"
  },
  {
    "url": "swift/ios/ios-build-cers.html",
    "revision": "1550b0eabd96a119020a26ae513b85d7"
  },
  {
    "url": "swift/ios/pod-wechat.html",
    "revision": "beb2d00c97f9f0ab73133667b7ada7b2"
  },
  {
    "url": "swift/ios/t1-pod-webp.html",
    "revision": "ef38b6de7560034199187972471f9ba9"
  },
  {
    "url": "swift/ios/t2-youhua.html",
    "revision": "b4c88b25f5bfe50c8e72d49cd1604e5a"
  },
  {
    "url": "swift/swiftui/ActionSheet.html",
    "revision": "629b860ed31ca768a0f00aaacbb10cfa"
  },
  {
    "url": "swift/swiftui/Alert.html",
    "revision": "929cfeb73be4ff43777e9f9e322e7d6a"
  },
  {
    "url": "swift/swiftui/AnyGesture.html",
    "revision": "834d615fc6b4e3f753a56dd9653089a5"
  },
  {
    "url": "swift/swiftui/Bindings.html",
    "revision": "a925752c14ec78735c5e8a75373ae765"
  },
  {
    "url": "swift/swiftui/Button.html",
    "revision": "144252bce6c14726a33f24fda10d65ca"
  },
  {
    "url": "swift/swiftui/DatePicker.html",
    "revision": "a36cd501c74d412b6d6eeabe42317538"
  },
  {
    "url": "swift/swiftui/DragGesture.html",
    "revision": "7a9891ed9fb2b78365e781ac46232158"
  },
  {
    "url": "swift/swiftui/DynamicNavigationDestinationLink.html",
    "revision": "0c1fc9ba0fa345aec602e5409eadce1d"
  },
  {
    "url": "swift/swiftui/EditButton.html",
    "revision": "3f55094071c8a8f25e2166bbbfc1a455"
  },
  {
    "url": "swift/swiftui/Environment.html",
    "revision": "0f5e195de15fd9f34badf4be561e1867"
  },
  {
    "url": "swift/swiftui/EnvironmentObject.html",
    "revision": "970910532fefcc7088abd849dcea462c"
  },
  {
    "url": "swift/swiftui/EnvironmentValues.html",
    "revision": "568ba2c2c07507c4e42048ff8ac618d8"
  },
  {
    "url": "swift/swiftui/ExclusiveGesture.html",
    "revision": "31182fb702420d21f15b86a94888d9c7"
  },
  {
    "url": "swift/swiftui/ForEach.html",
    "revision": "42a941cb98cc514eb46e58ca1eb8119a"
  },
  {
    "url": "swift/swiftui/Form.html",
    "revision": "14005425566ca3c629188398c014f7ec"
  },
  {
    "url": "swift/swiftui/GeometryReader.html",
    "revision": "f2538aeaa4a592513b66eaaac7bcf02a"
  },
  {
    "url": "swift/swiftui/Group.html",
    "revision": "945d96b316b97cba80a20bf02c2460c8"
  },
  {
    "url": "swift/swiftui/GroupBox.html",
    "revision": "e77c290adb0f78f5ecf91d284845d87a"
  },
  {
    "url": "swift/swiftui/HSplitView.html",
    "revision": "fa528f7adcd0679b2079fa974cbb0660"
  },
  {
    "url": "swift/swiftui/HStack.html",
    "revision": "d1b40773fe7612cab7e150a4019ef94c"
  },
  {
    "url": "swift/swiftui/Image.html",
    "revision": "4164dae83209a6eb608ebcda9fb9358c"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "80dce25a4aea3d103ee62fdbc72967a8"
  },
  {
    "url": "swift/swiftui/ItemBasedPopUpButton.html",
    "revision": "080044fbf531c645245c7553f69b0d6d"
  },
  {
    "url": "swift/swiftui/List.html",
    "revision": "23fa416ef2d62eba9c2a75892127ea8e"
  },
  {
    "url": "swift/swiftui/LocalizedStringKey.html",
    "revision": "86cb465b19b12b0e657b3304a98035f1"
  },
  {
    "url": "swift/swiftui/LongPressGesture.html",
    "revision": "87e9e7c03b5df879c8edfe749f227f2b"
  },
  {
    "url": "swift/swiftui/MagnificationGesture.html",
    "revision": "3d5b42e3f7513fad253af8e2003a4413"
  },
  {
    "url": "swift/swiftui/Modal.html",
    "revision": "ae084f718a9d26407e5b2d4f04a9881f"
  },
  {
    "url": "swift/swiftui/NavigationButton.html",
    "revision": "7a4dc1081adab79b6c03467621d13d80"
  },
  {
    "url": "swift/swiftui/NavigationView.html",
    "revision": "e038f49d81f4837366682322d2a24416"
  },
  {
    "url": "swift/swiftui/ObjectBinding.html",
    "revision": "67a51fae6ed68c41dfac7a19adcc924e"
  },
  {
    "url": "swift/swiftui/PasteButton.html",
    "revision": "b11271915d04132032eb5564b23ba39f"
  },
  {
    "url": "swift/swiftui/Picker.html",
    "revision": "1e2df7c6ab75ea0988d42efb6610287d"
  },
  {
    "url": "swift/swiftui/Popover.html",
    "revision": "8a486d571d38259154d0ae2f84a0d197"
  },
  {
    "url": "swift/swiftui/PreferenceKey.html",
    "revision": "733365149fd09bcc951b886662cc4a4a"
  },
  {
    "url": "swift/swiftui/PresentationButton.html",
    "revision": "5c9cbe5c0fda1944ca261a34cb1d55d5"
  },
  {
    "url": "swift/swiftui/Principle01.html",
    "revision": "bec1aa9ac4a5d561551d013b47765d67"
  },
  {
    "url": "swift/swiftui/Principle02.html",
    "revision": "f6b9ff45a0e36736d18627b09f361c38"
  },
  {
    "url": "swift/swiftui/Principle03.html",
    "revision": "da41065410df6c8b4be39749b192514b"
  },
  {
    "url": "swift/swiftui/Principle04.html",
    "revision": "61d0f95761e6b7d6ad16e197190a336c"
  },
  {
    "url": "swift/swiftui/Principle05.html",
    "revision": "66358b9bfaec8de8223f90057d650442"
  },
  {
    "url": "swift/swiftui/Principle06.html",
    "revision": "531609c17b7ff4244241e0567d7bb92c"
  },
  {
    "url": "swift/swiftui/PullDownButton.html",
    "revision": "2dc200bbe6aeb63368a1efbf71e78709"
  },
  {
    "url": "swift/swiftui/RotationGesture.html",
    "revision": "9bca64a4a4b475b6b072304edf79acee"
  },
  {
    "url": "swift/swiftui/ScrollView.html",
    "revision": "fe2d8d341d5834cd50bd915dab402911"
  },
  {
    "url": "swift/swiftui/Section.html",
    "revision": "ef3b2125f12c133af6c9cd889f770db7"
  },
  {
    "url": "swift/swiftui/SecureField.html",
    "revision": "c7f632bc174dab3c61273271b4bffcc8"
  },
  {
    "url": "swift/swiftui/SegmentedControl.html",
    "revision": "d83def9d154e1534c6db074f2a3e6756"
  },
  {
    "url": "swift/swiftui/SequenceGesture.html",
    "revision": "8c3907300a2dab52b33d8d3d2ee33db0"
  },
  {
    "url": "swift/swiftui/Sheet.html",
    "revision": "833fb6cf5a7420402408c6e3c80d0486"
  },
  {
    "url": "swift/swiftui/SimultaneousGesture.html",
    "revision": "8ba9f00500c539d230a9e8a1d4a65d7f"
  },
  {
    "url": "swift/swiftui/Slider.html",
    "revision": "b150f0ece59da069d1f72d2b5b887a30"
  },
  {
    "url": "swift/swiftui/Stacks.html",
    "revision": "a5a52e6b9322869f115e6478e99001f4"
  },
  {
    "url": "swift/swiftui/State.html",
    "revision": "493e5e553f3f6170e04df86ccdf09aa0"
  },
  {
    "url": "swift/swiftui/Stepper.html",
    "revision": "eee37e15647f462b9cf00d226f5220df"
  },
  {
    "url": "swift/swiftui/Strideable.html",
    "revision": "84ac998170210efe0d748ea639e6db35"
  },
  {
    "url": "swift/swiftui/TabView.html",
    "revision": "6c674bbdbf268546be9d722594902ca9"
  },
  {
    "url": "swift/swiftui/TapGesture.html",
    "revision": "babd229186c936cacd52c74701e1d226"
  },
  {
    "url": "swift/swiftui/Text.html",
    "revision": "91d7be446cbf5796c63a6cb85cffc0f2"
  },
  {
    "url": "swift/swiftui/TextField.html",
    "revision": "2dc71d9f3b222243d4b531bc6107de40"
  },
  {
    "url": "swift/swiftui/Toggle.html",
    "revision": "cae8c6eed6eb58310665cba188a03a4a"
  },
  {
    "url": "swift/swiftui/Transaction.html",
    "revision": "276319b142eb3f2a6af918d945d84484"
  },
  {
    "url": "swift/swiftui/UIViewController.html",
    "revision": "3ec5371289b7942452b0ca310cf7028a"
  },
  {
    "url": "swift/swiftui/ViewModifier.html",
    "revision": "310b95804ca25ea1e3ec968af718715c"
  },
  {
    "url": "swift/swiftui/VSplitView.html",
    "revision": "02339433e304026d7111be43044be802"
  },
  {
    "url": "swift/swiftui/VStack.html",
    "revision": "285b305b3aacdc55729a8a6b105ad382"
  },
  {
    "url": "swift/swiftui/WebImage.html",
    "revision": "d76a39f2f67bb479dfcb8b3961ff4c90"
  },
  {
    "url": "swift/swiftui/WebView.html",
    "revision": "1e560c3c0a5713e6b61f672a5a169678"
  },
  {
    "url": "swift/swiftui/ZStack.html",
    "revision": "77ac076dbfed372e2c9a6ae3af96dfb0"
  },
  {
    "url": "swift/tips/index.html",
    "revision": "6ea19f631358d4192d35955f8c3b3bc3"
  },
  {
    "url": "swift/ubuntu/demo.html",
    "revision": "c1ac319ebfcc5752f7d81c43c82508b6"
  },
  {
    "url": "swift/ubuntu/index.html",
    "revision": "91d47b826ae7318c1233c5e788728b87"
  },
  {
    "url": "swift/ubuntu/spm.html",
    "revision": "c5b7938255408ddaa38c5316dfabcf51"
  },
  {
    "url": "swift/ubuntu/swiftenv.html",
    "revision": "05f9d8249e000f01f1226f271a6b204b"
  },
  {
    "url": "swift/ubuntu/vscode.html",
    "revision": "5dbd8c9d5280771d3986843c5893e007"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "9c413a6116316099e1f809aa6c793606"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "b4ca1d5a4db6dc0a9ea61e5c1a15a252"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "b3777268b273059c8dc58090173cfee7"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "f847e17e19ff23e4d574308bf0d38424"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "9076710431ef40d63dd9bb71e52d54fa"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "2c67f193481d19b2f84425fcd69a8823"
  },
  {
    "url": "swift/vapor/t6-say-oldbirds.html",
    "revision": "019deab7b9e0b4d70b29f47eb5b6f7e0"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "ded7bce4b10f6e79c78d094fc97545f7"
  },
  {
    "url": "swift/vapor/u-11-auth.html",
    "revision": "08e27dbdcce48216df6a09773a327eff"
  },
  {
    "url": "swift/vapor/u-12-permission.html",
    "revision": "62a7b60d689c32c80f3ec4d906dc7237"
  },
  {
    "url": "swift/vapor/v-20-read-code.html",
    "revision": "1cd61b06949853f0dc9628058a8c1883"
  },
  {
    "url": "swift/vapor/v-21-io.html",
    "revision": "137891e6671c15f62adf274afa414e31"
  },
  {
    "url": "swift/vapor/v-22-bio2.html",
    "revision": "b2bf8d0a98e93855fb11637826170395"
  },
  {
    "url": "swift/vapor/v-23-swiftnio-do-text.html",
    "revision": "e34d56a26bc2e0b766e8b98a82bd3c28"
  },
  {
    "url": "swift/vapor/v-24-swift-zhan-package.html",
    "revision": "9f8242bd85b617baa71e106122ac282c"
  },
  {
    "url": "swift/vapor/v-25-swiftnio-do-serisize.html",
    "revision": "868faaaf7945b66864e72c6dc27ffc4d"
  },
  {
    "url": "swift/vapor/v-26-swfitnio-grpc-1.html",
    "revision": "17b9fd9270ff848bde18d6bf5fcb2839"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/ai/index.html",
    "revision": "5e9b26713c69078255c20cc6891bdda2"
  },
  {
    "url": "tag/c/c++/index.html",
    "revision": "0d61e83c3840e977b266c79d786be350"
  },
  {
    "url": "tag/cmake/index.html",
    "revision": "4980ec0346d3635e3c9107257f5ade05"
  },
  {
    "url": "tag/flask/index.html",
    "revision": "8829adaf6ad1aecfa6dd345fdec6c57f"
  },
  {
    "url": "tag/flowchart/index.html",
    "revision": "5a587766f8409002291e73db14b1a671"
  },
  {
    "url": "tag/flutter/index.html",
    "revision": "b9f8937e9937fcc893d3209a4557af7a"
  },
  {
    "url": "tag/flutter/page/2/index.html",
    "revision": "1767eb6cad668740a2b14a44bde65de2"
  },
  {
    "url": "tag/flutter/page/3/index.html",
    "revision": "9fcdda322b0ff9268bd8a545a7ebf651"
  },
  {
    "url": "tag/git/index.html",
    "revision": "e9a3d18ad9ac6e67306da9e72740c3d1"
  },
  {
    "url": "tag/github/index.html",
    "revision": "c222b038ce0e5422dbd02c7cce590ebc"
  },
  {
    "url": "tag/haskell/index.html",
    "revision": "ccf40cbfd992cc5b074e663c43b4de9d"
  },
  {
    "url": "tag/html/index.html",
    "revision": "6ea3505063dc53efa78e1e50c99b40f9"
  },
  {
    "url": "tag/index.html",
    "revision": "bca1eac9e1d663ec3438375973a6db23"
  },
  {
    "url": "tag/ios/index.html",
    "revision": "5bc06ac8b395b070e9e84231b8acbc21"
  },
  {
    "url": "tag/ios/page/2/index.html",
    "revision": "ea6ad15a301f39319db0887fed67056e"
  },
  {
    "url": "tag/ios/page/3/index.html",
    "revision": "b692248056c31f531141c675d9c2a639"
  },
  {
    "url": "tag/ios/page/4/index.html",
    "revision": "1bf0132f4f676d747b97635a128a045f"
  },
  {
    "url": "tag/ios/page/5/index.html",
    "revision": "8ed51ca4f4c8d4185d19649d738198b5"
  },
  {
    "url": "tag/ios/page/6/index.html",
    "revision": "f5b7f4fc1aaa5e8e9ead7fde44fdb126"
  },
  {
    "url": "tag/ios/page/7/index.html",
    "revision": "2c2ecab99640332b1211cd9cd02d3080"
  },
  {
    "url": "tag/ios/page/8/index.html",
    "revision": "12ef779d52b4f8d572697d2c41a327b1"
  },
  {
    "url": "tag/ios/page/9/index.html",
    "revision": "38607f02634fc3355c5da7af4ac52364"
  },
  {
    "url": "tag/json/index.html",
    "revision": "99d6dd9349460ceeb83a9c0e38ec4d09"
  },
  {
    "url": "tag/plantuml/index.html",
    "revision": "7b4db0ffd624654ef5e48dfb035294e4"
  },
  {
    "url": "tag/pod/index.html",
    "revision": "496a499b59feb024f8efe505b95fecb3"
  },
  {
    "url": "tag/python/index.html",
    "revision": "ee4f1e15a2c5319fd2668715e91b48ee"
  },
  {
    "url": "tag/read/index.html",
    "revision": "d94ce3dc7d569fb03141413750010a4d"
  },
  {
    "url": "tag/swift/index.html",
    "revision": "e664a392662030249e92ec8cf6033b9e"
  },
  {
    "url": "tag/swift/page/10/index.html",
    "revision": "d071aa8c9f5ec8083145cf1e5ebcb6e6"
  },
  {
    "url": "tag/swift/page/11/index.html",
    "revision": "8e8c554f3ea04695be83fe79d553aa1c"
  },
  {
    "url": "tag/swift/page/12/index.html",
    "revision": "09645a0661fc85c8961d0651cbedc0d8"
  },
  {
    "url": "tag/swift/page/13/index.html",
    "revision": "fec1ccc09330a243bd9a5fa31e4cbca0"
  },
  {
    "url": "tag/swift/page/14/index.html",
    "revision": "fae2c53801be07d3105eada4eacbe693"
  },
  {
    "url": "tag/swift/page/2/index.html",
    "revision": "8b34ec7144ad6e10bdda3caec5f7c2ef"
  },
  {
    "url": "tag/swift/page/3/index.html",
    "revision": "b3fd426e20ac5708e3a77b861910609a"
  },
  {
    "url": "tag/swift/page/4/index.html",
    "revision": "e574ef31798d3730d382961f581f605a"
  },
  {
    "url": "tag/swift/page/5/index.html",
    "revision": "18c03d387873393ad33f3c2e1750066a"
  },
  {
    "url": "tag/swift/page/6/index.html",
    "revision": "63c91af370dfb8d5b7fa19e6f14998ef"
  },
  {
    "url": "tag/swift/page/7/index.html",
    "revision": "f91a6c11d4aec3125b47245628daa6ad"
  },
  {
    "url": "tag/swift/page/8/index.html",
    "revision": "cf2ab18fb41f11c93053659adff17385"
  },
  {
    "url": "tag/swift/page/9/index.html",
    "revision": "f8da551a8c7777713fd2833eed52e0e8"
  },
  {
    "url": "tag/swiftenv/index.html",
    "revision": "ed6832f65eebfc1258b2faf33f73db4c"
  },
  {
    "url": "tag/swiftnio/index.html",
    "revision": "96d6b5f22090a78659bd01da3b818271"
  },
  {
    "url": "tag/swiftui/index.html",
    "revision": "aa7fa612b9ae4fcc689c92c5edcac850"
  },
  {
    "url": "tag/swiftui/page/2/index.html",
    "revision": "bd61d98f54cf77ee65d8b90b91b74ffe"
  },
  {
    "url": "tag/swiftui/page/3/index.html",
    "revision": "2897aae064bc326dcf140e9c52f3a7b7"
  },
  {
    "url": "tag/swiftui/page/4/index.html",
    "revision": "a881178e16069aa97532a50b0058a554"
  },
  {
    "url": "tag/swiftui/page/5/index.html",
    "revision": "6a3a0bc0c0c8132fbbe90687cc58ddd8"
  },
  {
    "url": "tag/swiftui/page/6/index.html",
    "revision": "091943324971f2217951e412f8259f2d"
  },
  {
    "url": "tag/swiftui/page/7/index.html",
    "revision": "e1b8f27ca20163609872bd45ef385301"
  },
  {
    "url": "tag/tips/index.html",
    "revision": "de8456f323cf6a6173b433e810194fde"
  },
  {
    "url": "tag/tools/index.html",
    "revision": "73ae04b2c7c3bc8ceb6f1b6a517b08ae"
  },
  {
    "url": "tag/tools/page/2/index.html",
    "revision": "df0677d424a8ceddf210972486ad65c1"
  },
  {
    "url": "tag/ubuntu/index.html",
    "revision": "9a9f730acfca00e63fa208b1d1e1cb63"
  },
  {
    "url": "tag/vapor/index.html",
    "revision": "1d6cf6a299bbe54fa6d303cd820c6fed"
  },
  {
    "url": "tag/vapor/page/2/index.html",
    "revision": "e19a1aa9e0b6689638c1d32a98f50a31"
  },
  {
    "url": "tag/vapor/page/3/index.html",
    "revision": "f2c4ba62f6d1bcae09ddd95258a33bd7"
  },
  {
    "url": "tag/vscode/index.html",
    "revision": "dde355f56f022e444f38c342ba8d83b8"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "92b44f7f91539ba9f0f2e264ce440779"
  },
  {
    "url": "tag/yaml/index.html",
    "revision": "749bfa02698a702d2903f9b77ab7368a"
  },
  {
    "url": "tag/书单/index.html",
    "revision": "a76f941ae871dd6d2acd6e147fc20cc7"
  },
  {
    "url": "tag/函数式编程/index.html",
    "revision": "dbd3da5a99a1cded192df213a050ce14"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "eb0b4c0cb844a9507bc1be2d4ca8fdcf"
  },
  {
    "url": "tag/基础/page/2/index.html",
    "revision": "36b7e7138767dbc6342d63020320cfb7"
  },
  {
    "url": "tag/打包/index.html",
    "revision": "53da689cc3d3e32695390928501a095c"
  },
  {
    "url": "tag/指针/index.html",
    "revision": "34d4c7c63d84db1125249f681063ee8f"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "79c33bdbe08c09307f14dc64aa87a1a7"
  },
  {
    "url": "tag/数据结构与算法/page/2/index.html",
    "revision": "557fd5bebd85deb8f82c496e634075fc"
  },
  {
    "url": "tag/笔记/index.html",
    "revision": "e79e3054284f7fa17fa8b82939a272da"
  },
  {
    "url": "tag/设计模式/index.html",
    "revision": "cd130fbc672b0af3eadd7ca215ec1dfd"
  },
  {
    "url": "tag/设计模式/page/2/index.html",
    "revision": "fd73b66e2907d776797211b6c05976da"
  },
  {
    "url": "tag/设计模式/page/3/index.html",
    "revision": "3443a41fed7b9d0206c8c40271b9e1c9"
  },
  {
    "url": "tag/阅读/index.html",
    "revision": "20ef5d4a7263c0a0e83531b2dd607f5a"
  },
  {
    "url": "tag/音频/index.html",
    "revision": "d4b21ddbc29b1928e0d61e4fbdf7c6d2"
  },
  {
    "url": "timeline/index.html",
    "revision": "2522a0762f0860c3d971b106e11cc6c8"
  },
  {
    "url": "tools/flowchart/index.html",
    "revision": "a25076d66cb104afa21d01c84de85fae"
  },
  {
    "url": "tools/git/git-branch-mapping.html",
    "revision": "f9498b3a92172478c0de7db258df521e"
  },
  {
    "url": "tools/git/git-reset.html",
    "revision": "867faf7ae677df7427f450e2c28714b2"
  },
  {
    "url": "tools/git/index.html",
    "revision": "b2215feba1e75a00f9c8108ee44c71c2"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "c84048fc122b056985d2f44325300e3e"
  },
  {
    "url": "tools/git/t2-git-submodule.html",
    "revision": "3d3a66312976707257e7193426ebf18d"
  },
  {
    "url": "tools/html/index.html",
    "revision": "6caa0ded7340fcbeb13d3ffba1e13e18"
  },
  {
    "url": "tools/plantuml/index.html",
    "revision": "d81565f71b8f62980e85c17f8f1b17e5"
  },
  {
    "url": "tools/plantuml/t1-sequence-diagram.html",
    "revision": "47736dc837183f2db112d3140f3c45e4"
  },
  {
    "url": "tools/plantuml/t2-class-diagram.html",
    "revision": "50fa64d9a0402cbf5325f4e07ad0e10c"
  },
  {
    "url": "tools/vuepress/deploy-github-action.html",
    "revision": "9bce76d843100a124a4b537027047194"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "498973b6dbaf4bd5bae1e520318bfd67"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "da42f751c73f08149468b1a2f0d5b89b"
  },
  {
    "url": "tools/vuepress/memory-out.html",
    "revision": "b3015d1abe22f4055f7d31db236975e5"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "5419bfce28f03cdc6312ed76c8192764"
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
