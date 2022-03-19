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
    "revision": "8a3ef3355d9e191f036accd4ef89c0f3"
  },
  {
    "url": "about/app/index.html",
    "revision": "2c80db2dfd413a00e151ccd738e800c8"
  },
  {
    "url": "about/app/t1-protocol.html",
    "revision": "8860d4495cb6216b641c7e485b1d63ab"
  },
  {
    "url": "about/app/t2-secrect.html",
    "revision": "3b335cdfe4ebac533556b7b798db6b1e"
  },
  {
    "url": "about/app/t3-miniapps-sec.html",
    "revision": "351b1301ff949e63120d76c64d44f5e6"
  },
  {
    "url": "about/index/index.html",
    "revision": "f08516a4ed902a3ecc1e8bdc0f19e7dc"
  },
  {
    "url": "ai/index.html",
    "revision": "1aa5726bc6b5ec01779f81de0f3fa257"
  },
  {
    "url": "ai/t1-gzj.html",
    "revision": "2a388e95741835fa83bba1051834274a"
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
    "url": "assets/js/12.450054bb.js",
    "revision": "3f54b5019356fde593224021209e38a6"
  },
  {
    "url": "assets/js/120.7a30713b.js",
    "revision": "3e9afdc6cff5f42aeceea954d6691bf4"
  },
  {
    "url": "assets/js/121.2b7882ff.js",
    "revision": "dd9bebd42ba57a65682ce0caa9288474"
  },
  {
    "url": "assets/js/122.6dfd087e.js",
    "revision": "613ea0659463509b7418d1c0f9bf1aa4"
  },
  {
    "url": "assets/js/123.6641e0ba.js",
    "revision": "3ee1c291af6b7267fdd5b492abacf5c6"
  },
  {
    "url": "assets/js/124.33ff4831.js",
    "revision": "63e4b5d2b36521ad41033612d7c28fb8"
  },
  {
    "url": "assets/js/125.e6b8e507.js",
    "revision": "0532e4aa6e7c3278727160351ff46baa"
  },
  {
    "url": "assets/js/126.81070c51.js",
    "revision": "698cc4da269811b40b03bab9ea26f977"
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
    "url": "assets/js/13.17ef0e73.js",
    "revision": "d64fce8b9f86fd39b680bdedb06cdebf"
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
    "url": "assets/js/132.e0d5a1e6.js",
    "revision": "20fcacb41d728d6816ee9f214ba38059"
  },
  {
    "url": "assets/js/133.ca0821b1.js",
    "revision": "d45aef1b755aaccab98896b455146bfa"
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
    "url": "assets/js/142.c8565d34.js",
    "revision": "fa5e4f3516d32c308e527241077f5a84"
  },
  {
    "url": "assets/js/143.05e1624a.js",
    "revision": "03ffa55c0e9fe1e1d9a13fc529ce23ee"
  },
  {
    "url": "assets/js/144.82678cbb.js",
    "revision": "836e77dfdd828171c39e2495ccb40d80"
  },
  {
    "url": "assets/js/145.beb706af.js",
    "revision": "0fd0f2a7a6dcb3973e6af6806ba7c566"
  },
  {
    "url": "assets/js/146.fe1a77b6.js",
    "revision": "b7ec54e2bb9f7efcd559de8261f87f40"
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
    "url": "assets/js/158.3324cd8c.js",
    "revision": "d3fe774ffb5a27b929f7b47bd61e2828"
  },
  {
    "url": "assets/js/159.50f7e266.js",
    "revision": "3b9c57a44eb968a66c5b0eed2b034be2"
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
    "url": "assets/js/162.760b869b.js",
    "revision": "679955de48d19e314a187070c777ce9f"
  },
  {
    "url": "assets/js/163.55f20d55.js",
    "revision": "715658e524d9eebef3ecc894acfadde5"
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
    "url": "assets/js/17.c5e8be36.js",
    "revision": "2f79f66232dfc6e4cf84ee95dc5655c0"
  },
  {
    "url": "assets/js/170.90aa8664.js",
    "revision": "124b5df7130acea5e8c1937609dcac08"
  },
  {
    "url": "assets/js/171.eeb206cb.js",
    "revision": "a0cdfa61fbc00694e8992b8cf7ce5719"
  },
  {
    "url": "assets/js/172.89869cbe.js",
    "revision": "31f1617bedb4a3a25d5a719f08f36aab"
  },
  {
    "url": "assets/js/173.2a10f655.js",
    "revision": "94c8053cd5202d15170c28d9f62dee1e"
  },
  {
    "url": "assets/js/174.d823473b.js",
    "revision": "d3cb352bed72733134e9101f8656e957"
  },
  {
    "url": "assets/js/175.1e3acbcf.js",
    "revision": "dc3410e3cea0254a98a96a16eb674a1a"
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
    "url": "assets/js/18.117fa827.js",
    "revision": "3636cf20ef70c18f8e58c0e3f544d6eb"
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
    "url": "assets/js/184.76004da5.js",
    "revision": "05ce5552968d291848a492d05bab9458"
  },
  {
    "url": "assets/js/185.5f9c3d80.js",
    "revision": "37480eb380b8a94f357f977e0c34ae20"
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
    "url": "assets/js/195.4d575c63.js",
    "revision": "fa468d2ab9dff2bfcc09c8778a3ae4f6"
  },
  {
    "url": "assets/js/196.2875650a.js",
    "revision": "0601b1c3b727a4fbb08d50f35375f81f"
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
    "url": "assets/js/209.02b8c0d0.js",
    "revision": "fb705bcf26a097852d0358fc4b243813"
  },
  {
    "url": "assets/js/21.2511433a.js",
    "revision": "def162b31ae514fe12552947e29d51ef"
  },
  {
    "url": "assets/js/210.8dc7bc24.js",
    "revision": "e6651b9cee042fe91c0ce5ac946cbd0b"
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
    "url": "assets/js/214.66946d6b.js",
    "revision": "dbb0f8c313a5dc52cf756d2abd16ddee"
  },
  {
    "url": "assets/js/215.43cbb7b1.js",
    "revision": "3dd240a8268e93887463d65dd629e070"
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
    "url": "assets/js/218.2b262182.js",
    "revision": "73b689f383c38d56311d4a7e7a5f576c"
  },
  {
    "url": "assets/js/219.2bc19255.js",
    "revision": "9c0c7d5fa3eecee3ee3db989f31f05fe"
  },
  {
    "url": "assets/js/22.1eec3af5.js",
    "revision": "55c1ff20160770c838a5edb42c78ef23"
  },
  {
    "url": "assets/js/220.fd42f2a9.js",
    "revision": "c64c85d3c6db2d4780240ec0ba4bf37f"
  },
  {
    "url": "assets/js/221.06c2d51e.js",
    "revision": "f31476ed6303622eb9dfd5b621eadef6"
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
    "url": "assets/js/229.ba519a9c.js",
    "revision": "07809a9c81b37608f7d2ce1c6150078d"
  },
  {
    "url": "assets/js/23.5ec29240.js",
    "revision": "0f2e6d1e9681b329f6fddf920a3d75b5"
  },
  {
    "url": "assets/js/230.cdda6bd7.js",
    "revision": "2085d968d0407a4de9c940228d56a6de"
  },
  {
    "url": "assets/js/231.d81dfd47.js",
    "revision": "ab763e1295c98ee4528ce7e00f39f32d"
  },
  {
    "url": "assets/js/232.246f250b.js",
    "revision": "4ef739c1dc22cd35e93d1015fa1b42b0"
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
    "url": "assets/js/237.f94dafbb.js",
    "revision": "011b85b22809265f928a3bbdbf63af1a"
  },
  {
    "url": "assets/js/238.f2b07d52.js",
    "revision": "89d76d0350bbe05a07ad3cb15ef26414"
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
    "url": "assets/js/240.1c53dcee.js",
    "revision": "c895689077f0554f865b38105098e09d"
  },
  {
    "url": "assets/js/241.e138a0ba.js",
    "revision": "4fa4c7d38d3824378c24a8a44d0c2978"
  },
  {
    "url": "assets/js/242.c90cf17f.js",
    "revision": "6aef827dcf2edf25196c8e5e0a2e9210"
  },
  {
    "url": "assets/js/243.1dc04075.js",
    "revision": "237f618407038d894a0f9bece1f3e5e4"
  },
  {
    "url": "assets/js/244.f96f5c75.js",
    "revision": "fa7b4fe15e7d510dcbca284089fdc619"
  },
  {
    "url": "assets/js/245.4542fbc4.js",
    "revision": "908e6edc05ebad7099f14abe8443747a"
  },
  {
    "url": "assets/js/246.0fad9c61.js",
    "revision": "d769aac40648de8a13c118fa7116525f"
  },
  {
    "url": "assets/js/247.3f28ec51.js",
    "revision": "2e63520ffb0616eb280be80249f1bb2d"
  },
  {
    "url": "assets/js/248.95cf5ddd.js",
    "revision": "fdd967b7c844c6feeec652dd33256a3f"
  },
  {
    "url": "assets/js/249.e39bfeb9.js",
    "revision": "faab826e950f938918d83d9b51eb2c5b"
  },
  {
    "url": "assets/js/25.c70c235b.js",
    "revision": "70ed7d8e863d3fa74f864148e8269e7e"
  },
  {
    "url": "assets/js/250.eaaae5e7.js",
    "revision": "a9d066406265fa2ca99d81dc24468122"
  },
  {
    "url": "assets/js/251.eebacdcc.js",
    "revision": "810385c5dccae7b7f545eab8c8125445"
  },
  {
    "url": "assets/js/252.3d3d2fed.js",
    "revision": "91ccb1ac42e6b35ff6e61732b5689edd"
  },
  {
    "url": "assets/js/253.1aba6994.js",
    "revision": "09c41b32204698e22a3aa16a51823967"
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
    "url": "assets/js/32.df9d9187.js",
    "revision": "3be19c04043e5641c3eb486fc1e7fd44"
  },
  {
    "url": "assets/js/33.aca4d88f.js",
    "revision": "2bc431d863b5e7202a7fa730eafccfb3"
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
    "url": "assets/js/37.2a51a692.js",
    "revision": "f7e55af839498cfc952dcb35c6f79884"
  },
  {
    "url": "assets/js/38.e37f0a51.js",
    "revision": "2fd13c9eeb3f3dff73c7b98b6fb93b2a"
  },
  {
    "url": "assets/js/39.f3b73e20.js",
    "revision": "60929e595ff422532b3cbe993e512742"
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
    "url": "assets/js/57.3de0d49e.js",
    "revision": "e2de4906baa7f6ab9d4d7266373639f8"
  },
  {
    "url": "assets/js/58.07a61b26.js",
    "revision": "5755efe798230aec0cbe93c6ed502081"
  },
  {
    "url": "assets/js/59.2c23b1d9.js",
    "revision": "ed78798ecb103c4e728c09e3ada44400"
  },
  {
    "url": "assets/js/6.9329e00d.js",
    "revision": "8ce97f156f3a1697e4bdb28395bda84a"
  },
  {
    "url": "assets/js/60.33767bf4.js",
    "revision": "9e1fdbfd2b9e4b0f1f24ea959c02b7d9"
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
    "url": "assets/js/67.d2f55ac3.js",
    "revision": "6b03ce4540a558937e2e32536942014a"
  },
  {
    "url": "assets/js/68.fbc08afd.js",
    "revision": "bf2c7386a99842a5e324ed877ba51128"
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
    "url": "assets/js/83.3b4f5656.js",
    "revision": "7baaa3e30aad47945a2c7c7f4550ea12"
  },
  {
    "url": "assets/js/84.b7eab024.js",
    "revision": "3d809cdf184166c942c9edc98ae474cd"
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
    "url": "assets/js/90.135ccd04.js",
    "revision": "16eba041eb18c6e1f0134b8be7178b3d"
  },
  {
    "url": "assets/js/91.da87d995.js",
    "revision": "d6edfb772cea7d4abf2a2a6a92e7cead"
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
    "url": "assets/js/97.f59960b4.js",
    "revision": "3a38f556388d7b22f82acbfb8660c66c"
  },
  {
    "url": "assets/js/98.5e6a1f84.js",
    "revision": "bc1c6f0d34c9090beb0ef72c20815d4a"
  },
  {
    "url": "assets/js/99.d92adbca.js",
    "revision": "1a7e29c435880faf799f5295a39ae519"
  },
  {
    "url": "assets/js/app.6e8650bb.js",
    "revision": "803f7b58a58e4b0a88ca2865d84f9491"
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
    "revision": "cb1fa1e6a0cfa8085090cbf67011f2fd"
  },
  {
    "url": "basis/algorithms/t1-buble-sort.html",
    "revision": "6106f5eb77dc17414c39c2c3e9aa54d5"
  },
  {
    "url": "basis/algorithms/t2-selection-sort.html",
    "revision": "4eda56c226ad6c24d7d574eefb725836"
  },
  {
    "url": "basis/algorithms/t3-insertion-sort.html",
    "revision": "ae5652a0df3a69db19d1e9be93ec5189"
  },
  {
    "url": "basis/algorithms/t4-shell-sort.html",
    "revision": "80f9f02cf83c2e00da7c4c959dc51d07"
  },
  {
    "url": "basis/algorithms/t5-quick-sort.html",
    "revision": "e552e35e454b8247d767c84522d7bc37"
  },
  {
    "url": "basis/algorithms/t6-heap-sort.html",
    "revision": "0a49db98fbd57a613abe1b3a3f5b2ec2"
  },
  {
    "url": "basis/algorithms/t7-merge-sort.html",
    "revision": "296aeb6fb3ca553c5e6eadebd4a83d65"
  },
  {
    "url": "basis/algorithms/t8-radix-sort.html",
    "revision": "fab5455ebeec0839429df6f25ca3e2d6"
  },
  {
    "url": "basis/algorithms/t9-count-sort.html",
    "revision": "08420d49a4c4bee5b8ac0d513630ad9d"
  },
  {
    "url": "basis/algorithms/u1-bucket-sort.html",
    "revision": "9df496cb2a89af3f528f6705cc5b62d1"
  },
  {
    "url": "basis/design-patterns/AdapterPattern.html",
    "revision": "d78c55d421de370e28f44761e9e7b863"
  },
  {
    "url": "basis/design-patterns/BridgePattern.html",
    "revision": "57ad79902dff2aa11782885c6a5e6e53"
  },
  {
    "url": "basis/design-patterns/BuilderPattern.html",
    "revision": "c03608affda203da90e9fe7227fbc6bb"
  },
  {
    "url": "basis/design-patterns/ChainOfResponsibilityPattern.html",
    "revision": "742d9f06044b1ef687b684818f56f610"
  },
  {
    "url": "basis/design-patterns/ClassReleation.html",
    "revision": "9d1a489bfa98939f606cbe119b8e59f3"
  },
  {
    "url": "basis/design-patterns/CommandPattern.html",
    "revision": "3c9da324d0b8c4e88e911f06c41630dc"
  },
  {
    "url": "basis/design-patterns/CompositePattern.html",
    "revision": "a95aa487fecb0eddbf5375116972f930"
  },
  {
    "url": "basis/design-patterns/DecoratorPattern.html",
    "revision": "6e3a6200cdbe8039d6245619adbe4924"
  },
  {
    "url": "basis/design-patterns/DesignPrinciples.html",
    "revision": "f47369c4f7ecd7e8cc07e0b77e32ad4b"
  },
  {
    "url": "basis/design-patterns/FacadePattern.html",
    "revision": "785eb925396ae0f38a630bfd59501c00"
  },
  {
    "url": "basis/design-patterns/FactoryPattern.html",
    "revision": "11f1e055c185457bbdff1b4b6405ff90"
  },
  {
    "url": "basis/design-patterns/FilterCriteriaPattern.html",
    "revision": "ed7056a268b3998de76507b4160b1c0f"
  },
  {
    "url": "basis/design-patterns/FlyweightPattern.html",
    "revision": "c2574a833d7d040775711371efb02698"
  },
  {
    "url": "basis/design-patterns/index.html",
    "revision": "283cc766ace11a62c530a3d1ed94849c"
  },
  {
    "url": "basis/design-patterns/InterpreterPattern.html",
    "revision": "36f2cfbb5b883f47767a4f6d2e9c6d5b"
  },
  {
    "url": "basis/design-patterns/IteratorPattern.html",
    "revision": "6b2f896eb3e7e82cdac0c7c4ce8fbfc6"
  },
  {
    "url": "basis/design-patterns/MediatorPattern.html",
    "revision": "1a93f7dd1d1985bd06c0488b00ee5a26"
  },
  {
    "url": "basis/design-patterns/MementoPattern.html",
    "revision": "d0286023751d88458e99cb237d61580b"
  },
  {
    "url": "basis/design-patterns/NullObjectPattern.html",
    "revision": "33a63cd13f603539d6aa85b019d7652c"
  },
  {
    "url": "basis/design-patterns/ObserverPattern.html",
    "revision": "bc8078c7898ec6ee401a61716dd771dc"
  },
  {
    "url": "basis/design-patterns/PrototypePattern.html",
    "revision": "b903a5ef3f6378a18498e454d1c3d99f"
  },
  {
    "url": "basis/design-patterns/ProxyPattern.html",
    "revision": "353f7f7b15ccc29bbad5dabf057102fc"
  },
  {
    "url": "basis/design-patterns/SingletonPattern.html",
    "revision": "384328ae28bbb2126e651b4c68f48139"
  },
  {
    "url": "basis/design-patterns/StatePattern.html",
    "revision": "305afb6c7d1f86c5786be794fcd03c53"
  },
  {
    "url": "basis/design-patterns/StrategyPattern.html",
    "revision": "6500e553fd2546427787f84884d7040d"
  },
  {
    "url": "basis/design-patterns/TemplatePattern.html",
    "revision": "b369467f8579f9b4d0da0e0a9ecfd46b"
  },
  {
    "url": "basis/design-patterns/VisitorPattern.html",
    "revision": "8548eba62ed2dd610231987fcc851c78"
  },
  {
    "url": "basis/index/index.html",
    "revision": "5ad33571a76351203dcbcdbea5432afb"
  },
  {
    "url": "basis/os/index.html",
    "revision": "11d9f8a21c62143630429b612726d6a5"
  },
  {
    "url": "book/index.html",
    "revision": "6483cf322606e05215a21716e4423191"
  },
  {
    "url": "book/t-find-books.html",
    "revision": "c8f6b8026df05c0aae3c13277fcbd6ec"
  },
  {
    "url": "c/audio/audio-basic.html",
    "revision": "94937088fdace9314f7c946181023259"
  },
  {
    "url": "c/audio/endian.html",
    "revision": "82ba251b4357e966106f0e01d050fa25"
  },
  {
    "url": "c/audio/index.html",
    "revision": "50ae6e1191752b649de5987fa3dc2d72"
  },
  {
    "url": "c/cmake/01-basic/A-hello-cmake.html",
    "revision": "0a4e504dfee1f165084da71ad60bc7b6"
  },
  {
    "url": "c/cmake/01-basic/B-hello-headers.html",
    "revision": "6dae0ac7d142d56c18df8c2a34677ff8"
  },
  {
    "url": "c/cmake/01-basic/C-static-library.html",
    "revision": "bdcbdd5f4dfa9ab3788d56c564a28e10"
  },
  {
    "url": "c/cmake/01-basic/D-shared-library.html",
    "revision": "75f57aae1d20a716e3959efcfc83b6d1"
  },
  {
    "url": "c/cmake/01-basic/E-installing.html",
    "revision": "4d982693b99a418b5887a26925658c81"
  },
  {
    "url": "c/cmake/01-basic/F-build-type.html",
    "revision": "76b71a1e4769e13162300cb631661261"
  },
  {
    "url": "c/cmake/01-basic/G-compile-flags.html",
    "revision": "0e2b93e422773f4ecb110a0fcacef5d7"
  },
  {
    "url": "c/cmake/01-basic/H-third-party-library.html",
    "revision": "fb0de9a9de7ea9d8d3a2aae7c506bc93"
  },
  {
    "url": "c/cmake/01-basic/I-compiling-with-clang.html",
    "revision": "6a19bde1977cca742c42afce4646bb24"
  },
  {
    "url": "c/cmake/01-basic/index.html",
    "revision": "72f42c8efa3de892f22facfea19a1b42"
  },
  {
    "url": "c/cmake/01-basic/J-building-with-ninja.html",
    "revision": "7a632e50d9c35e8cab30e9edc0307315"
  },
  {
    "url": "c/cmake/01-basic/K-imported-targets.html",
    "revision": "3fd9ec9c6954f547a270c416b92ea102"
  },
  {
    "url": "c/cmake/01-basic/L-cpp-standard.html",
    "revision": "4a8d12552628260cde702031f4f23e72"
  },
  {
    "url": "c/cmake/index.html",
    "revision": "bb16e408cbd007d03a1e980ca5bf3bea"
  },
  {
    "url": "c/program/index.html",
    "revision": "62729bed981c515565508c7efdafc167"
  },
  {
    "url": "c/program/pointers.html",
    "revision": "9f678ca169e461aca10e9706fe4f6ab1"
  },
  {
    "url": "categories/index.html",
    "revision": "51d5d9e7a5ae0bb19735d61f4d7ba64c"
  },
  {
    "url": "figma/figma-install-chinese-font.html",
    "revision": "88492f1a04f242c82be873a32c9d1dbe"
  },
  {
    "url": "figma/index.html",
    "revision": "a20edae47ecc61a62edf03f45572808a"
  },
  {
    "url": "flutter/flutter-color.html",
    "revision": "e0a9db207ad37839bf912d5f90de7d98"
  },
  {
    "url": "flutter/github-actions-build-flutter-android.html",
    "revision": "150b0167854a703bed91a8ee1ed071d7"
  },
  {
    "url": "flutter/github-actions-build-flutter-ios.html",
    "revision": "dc253f28c56038fc4c8ed03a26068022"
  },
  {
    "url": "flutter/index.html",
    "revision": "03815773a2b920bea2a0c7726fd1f598"
  },
  {
    "url": "flutter/point.html",
    "revision": "a2db3bfdd79e5233ad910ddad5e624c5"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "ce4350a886c8319535d4d3917cb0c604"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "5607c47e5495b7aa7a46a28840071b0e"
  },
  {
    "url": "flutter/t3-messages.html",
    "revision": "1bd9eadafe582293aa179a82d3f7377e"
  },
  {
    "url": "flutter/t3-mixin.html",
    "revision": "946cf89b6a6e0539675984f61b06af37"
  },
  {
    "url": "flutter/t4-lifecycle.html",
    "revision": "bad1b81427ba2499556ee481f9d0e02d"
  },
  {
    "url": "flutter/t5-flutter-web-deploy.html",
    "revision": "f92cbdaca2df3c2704660b4639e3045e"
  },
  {
    "url": "flutter/t6-docker-web-deploy.html",
    "revision": "4111d8368ba3fd5404c4d33308bd8d88"
  },
  {
    "url": "flutter/t7-fvm.html",
    "revision": "b4705ce7771bb6d388aa925aae69d605"
  },
  {
    "url": "flutter/t8-const.html",
    "revision": "102e6dbdd583a4f9ab2254f31c232eca"
  },
  {
    "url": "flutter/t9-logs.html",
    "revision": "3063ad9dce546b35e736bfc2341e0faa"
  },
  {
    "url": "flutter/u10-fvm-flutter2.html",
    "revision": "498a9ff895da95ac639697d8553a2c1c"
  },
  {
    "url": "flutter/u11-flutter-render.html",
    "revision": "762275610c29336309d5e3e969e230c4"
  },
  {
    "url": "flutter/u12-flutter-create-w.html",
    "revision": "7726f0ad1acd024a158c289bfa6cdd96"
  },
  {
    "url": "flutter/u12-flutter-web-01.html",
    "revision": "c4a8fe063fb29e7ff7d3f2eec35bdbfd"
  },
  {
    "url": "flutter/u12-flutter-web-02.html",
    "revision": "b0d040fdab770d19706fdf258619c176"
  },
  {
    "url": "flutter/u13-sliverappbar.html",
    "revision": "684d2f4118b9e8a3b42f6a68e3c9d92c"
  },
  {
    "url": "flutter/u14-navbar-color.html",
    "revision": "6fa140f4600136c5c7d90f8cd0fe2a0f"
  },
  {
    "url": "flutter/u15-custom-nabar.html",
    "revision": "68ae082dfef5d01e143007e6dc096e1a"
  },
  {
    "url": "flutter/u16-shape.html",
    "revision": "8d4b744c156349cb5facd05f4b215c7c"
  },
  {
    "url": "flutter/y1-statubar.html",
    "revision": "c30a199256d3bee27be3ef4d2bbb0479"
  },
  {
    "url": "haskell/1-install.html",
    "revision": "d6f874746a9f416c6ceb41a80cb8207e"
  },
  {
    "url": "haskell/2-vscode.html",
    "revision": "748773102a2266dde15fccad8b46e611"
  },
  {
    "url": "haskell/3-pktool.html",
    "revision": "070190b44c27b9f3812660051ad835ed"
  },
  {
    "url": "haskell/4-digui.html",
    "revision": "450028b6ef90115b9d50fd45102f460d"
  },
  {
    "url": "haskell/index.html",
    "revision": "d0d6780832bfe70f3d1958131725e41d"
  },
  {
    "url": "index.html",
    "revision": "842b71a879b1dafb8acb9a9d5f37d49f"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "python/1-file-map.html",
    "revision": "eee028fe05b7151e1005b762987258f9"
  },
  {
    "url": "python/2-mongo-random.html",
    "revision": "9663245201ce31edc0631f632584d196"
  },
  {
    "url": "python/3-page-upload.html",
    "revision": "b0aed6b8355c0cf123fe5e7907fc8f66"
  },
  {
    "url": "python/4-bt-flask.html",
    "revision": "b5f08292ff6a2d6a1cd7f91cdcc21ffc"
  },
  {
    "url": "python/index.html",
    "revision": "b1e62ff790cf1b50e1c7428d8988bec6"
  },
  {
    "url": "python/python-develop-env.html",
    "revision": "0f8b5a71edf5c3a6aa1625276b82d8fe"
  },
  {
    "url": "python/python-file.html",
    "revision": "e3ca60adce50ea07d3a14772705f94b5"
  },
  {
    "url": "python/python-function.html",
    "revision": "8c425df5e332b72e77b13a462c1286b4"
  },
  {
    "url": "python/python-module.html",
    "revision": "2ea5e4f62144891cb4e679434163020a"
  },
  {
    "url": "python/python-string.html",
    "revision": "157d931f2fcd39a26ad3128bc1b5b59e"
  },
  {
    "url": "read/head-first-oop.html",
    "revision": "aa7662af9bf8cc4c9e488d2da423c8ed"
  },
  {
    "url": "read/index.html",
    "revision": "56b8891d1b47d51c34582f88d80d7eb7"
  },
  {
    "url": "swift/better/autoclosure.html",
    "revision": "1447570c4d3343548e951e1ba3905253"
  },
  {
    "url": "swift/better/available.html",
    "revision": "ff265bb18086de3a9631973dc4263161"
  },
  {
    "url": "swift/better/chain.html",
    "revision": "925ab2acbbe993b9f5e0d2c7018e6a8d"
  },
  {
    "url": "swift/better/copy-in-copy-out.html",
    "revision": "ee13d6ad9cbd119da3d5b5deef73ce82"
  },
  {
    "url": "swift/better/Copy-On-Write.html",
    "revision": "4dc0a56ad5fcbb9823c077153cad91dd"
  },
  {
    "url": "swift/better/di.html",
    "revision": "b7240b64ee67ae96cd91e42f1282662e"
  },
  {
    "url": "swift/better/index.html",
    "revision": "12677fbafe2188f3f8c538efa7c1b609"
  },
  {
    "url": "swift/better/last.html",
    "revision": "e9fc3bf3d7b563b470737d4e03659b7c"
  },
  {
    "url": "swift/better/lazy.html",
    "revision": "74bb51422e6bfe818bb7abb68c142ede"
  },
  {
    "url": "swift/better/protocol.html",
    "revision": "85a5268c4afd784b14869ad3faf0adbe"
  },
  {
    "url": "swift/fp/index.html",
    "revision": "d66521bc9e419c6d1ee9dc79061efb33"
  },
  {
    "url": "swift/fp/t1-fp.html",
    "revision": "9e0cbfc2c87c0ca5564cd311bf786512"
  },
  {
    "url": "swift/fp/t2-lens.html",
    "revision": "fbb96778f99e25d1141b1a5f0ca3784e"
  },
  {
    "url": "swift/fp/t3-json1.html",
    "revision": "35d836c3a7a2169dbf5138c08e1a0656"
  },
  {
    "url": "swift/fp/t3-json2.html",
    "revision": "fccc2fd9ae456fea514afb338da5c11e"
  },
  {
    "url": "swift/fp/t3-json3.html",
    "revision": "a71d1e5c988fd15ab184624fdf2b657c"
  },
  {
    "url": "swift/fp/t4-length.html",
    "revision": "0b88fbcd7d53a650c32795c0f2c32f12"
  },
  {
    "url": "swift/ios/index.html",
    "revision": "baa110b0334268e6c2b8a76797225c75"
  },
  {
    "url": "swift/ios/ios-build-cers.html",
    "revision": "8861f4295c1a4f4f3b0e22792270451e"
  },
  {
    "url": "swift/ios/pod-wechat.html",
    "revision": "17a3940f8a8b601997cc5d242c0e8e3d"
  },
  {
    "url": "swift/ios/t1-pod-webp.html",
    "revision": "e3602e69cbdc07814ca002bb0c7995d6"
  },
  {
    "url": "swift/ios/t2-youhua.html",
    "revision": "d56d471e2c0adedab2738efb9ebd2bc9"
  },
  {
    "url": "swift/swiftui/ActionSheet.html",
    "revision": "4e5bce05f63ee1af801e55847031eb0a"
  },
  {
    "url": "swift/swiftui/Alert.html",
    "revision": "f540fb247ad6c97954560f188c204ca2"
  },
  {
    "url": "swift/swiftui/AnyGesture.html",
    "revision": "6e1663954451468cb14027ae7e577eb7"
  },
  {
    "url": "swift/swiftui/Bindings.html",
    "revision": "bc110df02b322f343bb8a8e026694ab1"
  },
  {
    "url": "swift/swiftui/Button.html",
    "revision": "08f50f974975ecd4d3fc2ad13feea8ac"
  },
  {
    "url": "swift/swiftui/DatePicker.html",
    "revision": "a29ecd8601fcc1d37ea675ace22008bc"
  },
  {
    "url": "swift/swiftui/DragGesture.html",
    "revision": "3ce0bc3d95023b329716c0bfd0a11e31"
  },
  {
    "url": "swift/swiftui/DynamicNavigationDestinationLink.html",
    "revision": "b628c867e8eadd276a0394c5b324e95d"
  },
  {
    "url": "swift/swiftui/EditButton.html",
    "revision": "ff4085be4a899e60ab05ae6fb8fd4d55"
  },
  {
    "url": "swift/swiftui/Environment.html",
    "revision": "7e8da4fa207fa0c0711f013b8159a9ed"
  },
  {
    "url": "swift/swiftui/EnvironmentObject.html",
    "revision": "b6895c5c53499532907b05191b934869"
  },
  {
    "url": "swift/swiftui/EnvironmentValues.html",
    "revision": "abdfd1e2b18e639efd15a26fc4bb7d7a"
  },
  {
    "url": "swift/swiftui/ExclusiveGesture.html",
    "revision": "169d05bd3c4c51ee757b08341ea2c29e"
  },
  {
    "url": "swift/swiftui/ForEach.html",
    "revision": "23ccf19b6cdedb55cbb3ff6828eb9dc2"
  },
  {
    "url": "swift/swiftui/Form.html",
    "revision": "27538a19c9b5bfa20a89684be9376d6b"
  },
  {
    "url": "swift/swiftui/GeometryReader.html",
    "revision": "7d87d7f6e0d1e0936a28ea909cf0c9f7"
  },
  {
    "url": "swift/swiftui/Group.html",
    "revision": "a43e442308e5535857a249d56210290a"
  },
  {
    "url": "swift/swiftui/GroupBox.html",
    "revision": "3261ba38f2c6ed4c3115b2b925e0c1e8"
  },
  {
    "url": "swift/swiftui/HSplitView.html",
    "revision": "f2884df57c903f3bccbe0a20b157c3e6"
  },
  {
    "url": "swift/swiftui/HStack.html",
    "revision": "581bbe9ab06f797a60faefdc01c7fdb6"
  },
  {
    "url": "swift/swiftui/Image.html",
    "revision": "45ef0353694d9eca382c504c422c02f6"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "f5daadf1105f3d3fefba6fe27910a09a"
  },
  {
    "url": "swift/swiftui/ItemBasedPopUpButton.html",
    "revision": "973e2cfe3e7daebd64dcb3bde7e0eded"
  },
  {
    "url": "swift/swiftui/List.html",
    "revision": "bb7081aa3866941037179c624307b208"
  },
  {
    "url": "swift/swiftui/LocalizedStringKey.html",
    "revision": "72180c90007dce89bbb6db523188afa7"
  },
  {
    "url": "swift/swiftui/LongPressGesture.html",
    "revision": "abbc31dc821ab70c4c5942d48b1c3acc"
  },
  {
    "url": "swift/swiftui/MagnificationGesture.html",
    "revision": "49de34af8fb67ee25808cec12911f8da"
  },
  {
    "url": "swift/swiftui/Modal.html",
    "revision": "b11a629a975d6c7335d432a20bafcd9b"
  },
  {
    "url": "swift/swiftui/NavigationButton.html",
    "revision": "b72a7fe4c10821dc9b942b9953dd2937"
  },
  {
    "url": "swift/swiftui/NavigationView.html",
    "revision": "4021a29ad31b1c13fe036f5e965a7737"
  },
  {
    "url": "swift/swiftui/ObjectBinding.html",
    "revision": "e110b70bd0917ef42115c3a5fb3d6ff6"
  },
  {
    "url": "swift/swiftui/PasteButton.html",
    "revision": "7a4893cdaff92ca24799e121a9b22186"
  },
  {
    "url": "swift/swiftui/Picker.html",
    "revision": "37bf2804c0d478f03f52cf9f09a1ea78"
  },
  {
    "url": "swift/swiftui/Popover.html",
    "revision": "f03937604e6fb3385aa35f305a7ad60c"
  },
  {
    "url": "swift/swiftui/PreferenceKey.html",
    "revision": "f8199c662eac1c326de64eb74158bfde"
  },
  {
    "url": "swift/swiftui/PresentationButton.html",
    "revision": "da187fe4f69ad6b38db7946a516423ab"
  },
  {
    "url": "swift/swiftui/Principle01.html",
    "revision": "4fdd5acfdbd901228cebb76ba1151877"
  },
  {
    "url": "swift/swiftui/Principle02.html",
    "revision": "36391760c1066befe31b7313088f63cc"
  },
  {
    "url": "swift/swiftui/Principle03.html",
    "revision": "8707cc59b2ad7ccd22916b5590e18797"
  },
  {
    "url": "swift/swiftui/Principle04.html",
    "revision": "8b097223c9d37ec95a036f05a95d2e64"
  },
  {
    "url": "swift/swiftui/Principle05.html",
    "revision": "f1785da7db8e48ed94d9dcfcb8101898"
  },
  {
    "url": "swift/swiftui/Principle06.html",
    "revision": "d71566ae1e0cb9d9bf7062710bbd44ba"
  },
  {
    "url": "swift/swiftui/PullDownButton.html",
    "revision": "8bed2c971e4ff6b025cf60bc120d0a8a"
  },
  {
    "url": "swift/swiftui/RotationGesture.html",
    "revision": "bb271904868f549c319cb89b520c6908"
  },
  {
    "url": "swift/swiftui/ScrollView.html",
    "revision": "2aa741e0a9d1743a8d941e2b5ae92517"
  },
  {
    "url": "swift/swiftui/Section.html",
    "revision": "a1315abc6a35e47950c3c65d4c32716b"
  },
  {
    "url": "swift/swiftui/SecureField.html",
    "revision": "d8f85dc86dfa625d3e40a4438024409f"
  },
  {
    "url": "swift/swiftui/SegmentedControl.html",
    "revision": "cbdf5d4f2be728d7c1eebadaa8f952f1"
  },
  {
    "url": "swift/swiftui/SequenceGesture.html",
    "revision": "55fe0b277618aedb77be83a168375b7d"
  },
  {
    "url": "swift/swiftui/Sheet.html",
    "revision": "55dd722fa677fa5bd21122002b7ad3b3"
  },
  {
    "url": "swift/swiftui/SimultaneousGesture.html",
    "revision": "1d0da2e3d90c0983d4f02089dfdd7084"
  },
  {
    "url": "swift/swiftui/Slider.html",
    "revision": "5f174e8dc92dda36c1ac9a57bd5c74a5"
  },
  {
    "url": "swift/swiftui/Stacks.html",
    "revision": "28fa32284829cf378d5df2a346102b60"
  },
  {
    "url": "swift/swiftui/State.html",
    "revision": "16a9103507bfbb123363107750fee48b"
  },
  {
    "url": "swift/swiftui/Stepper.html",
    "revision": "3e7e0131a146afbd95c5c6f8edde3cc0"
  },
  {
    "url": "swift/swiftui/Strideable.html",
    "revision": "12b485bf3fab18b3c13e4f927711cec5"
  },
  {
    "url": "swift/swiftui/TabView.html",
    "revision": "30d06195189a3942962a6b6c28a24acf"
  },
  {
    "url": "swift/swiftui/TapGesture.html",
    "revision": "3e88d94be59b17057fa5217e6a90571b"
  },
  {
    "url": "swift/swiftui/Text.html",
    "revision": "ff5ec7eafbbaaaaa5d7e7f69ca959125"
  },
  {
    "url": "swift/swiftui/TextField.html",
    "revision": "9be0e9a14fd8c09a952793961fbf1c6c"
  },
  {
    "url": "swift/swiftui/Toggle.html",
    "revision": "60d50996073ae40048161ea11b71e4cb"
  },
  {
    "url": "swift/swiftui/Transaction.html",
    "revision": "1770d2b27c4afa8a13d859007eef06e7"
  },
  {
    "url": "swift/swiftui/UIViewController.html",
    "revision": "38a3e9b20bdf01f180705993be048168"
  },
  {
    "url": "swift/swiftui/ViewModifier.html",
    "revision": "f0c5ed686782fead85decf02f73e7737"
  },
  {
    "url": "swift/swiftui/VSplitView.html",
    "revision": "1f95a68f9ffcd62922b210a777a18f50"
  },
  {
    "url": "swift/swiftui/VStack.html",
    "revision": "b026ce3eeb5690c58ccc94064d43044e"
  },
  {
    "url": "swift/swiftui/WebImage.html",
    "revision": "8aa744f7e0662cfc046834f54bfc0c82"
  },
  {
    "url": "swift/swiftui/WebView.html",
    "revision": "26d15f06b4ffacf5391889f401cf652c"
  },
  {
    "url": "swift/swiftui/ZStack.html",
    "revision": "da5a1c5addf08b06d00b66612855c4cc"
  },
  {
    "url": "swift/tips/index.html",
    "revision": "329143a155dee334f42a5c4b46c76ca0"
  },
  {
    "url": "swift/ubuntu/demo.html",
    "revision": "9ef42117aedec3dc518401efbdb9fdb2"
  },
  {
    "url": "swift/ubuntu/index.html",
    "revision": "cf8ebfeedd5955990ad7450a45c8a7fe"
  },
  {
    "url": "swift/ubuntu/spm.html",
    "revision": "6742722fe5b5883597632ccbe8a2fb2b"
  },
  {
    "url": "swift/ubuntu/swiftenv.html",
    "revision": "1d6f1620dde73ee2e718374d510781bb"
  },
  {
    "url": "swift/ubuntu/vscode.html",
    "revision": "be7b20ac74e2528e92f2579019d7c46a"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "aef94bfa31c6da0f50c98a4509883019"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "90a42a11b4063dd31d798581cc41fb45"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "eb93718bfe54f1494157a9dd9411659a"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "d2036c474e8a680b00d425da424611bd"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "42df476ef464d5f9ba4592d1986f9863"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "7de73c01adda6ff326dd45ad7cd533b9"
  },
  {
    "url": "swift/vapor/t6-say-oldbirds.html",
    "revision": "7ca011ad3bae458ab7f37bcb5a2b3575"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "2bb28c1f4cbd033cb2f94935439ee38c"
  },
  {
    "url": "swift/vapor/u-11-auth.html",
    "revision": "564afce6cab11a07ca1a72a99239f495"
  },
  {
    "url": "swift/vapor/u-12-permission.html",
    "revision": "78c8bdd053c8559e728ceffa60db6d2c"
  },
  {
    "url": "swift/vapor/v-20-read-code.html",
    "revision": "c656a2f8f9a9b7fe9c7b9a1b4dbb38a5"
  },
  {
    "url": "swift/vapor/v-21-io.html",
    "revision": "376fe207db6dbb4ddf381a1fd2c3061a"
  },
  {
    "url": "swift/vapor/v-22-bio2.html",
    "revision": "16489187273deda949915a8950160d51"
  },
  {
    "url": "swift/vapor/v-23-swiftnio-do-text.html",
    "revision": "39d387a04e9471281d6636a511a99bc9"
  },
  {
    "url": "swift/vapor/v-24-swift-zhan-package.html",
    "revision": "6ea31b37a46f3bbd4b083a8d7c271759"
  },
  {
    "url": "swift/vapor/v-25-swiftnio-do-serisize.html",
    "revision": "5f958043acf04888466d9fea149f0b24"
  },
  {
    "url": "swift/vapor/v-26-swfitnio-grpc-1.html",
    "revision": "63dfb03292a1d3faa928669ffe43f9e0"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/ai/index.html",
    "revision": "f62c1746e7d16bc0663815c40c00d07e"
  },
  {
    "url": "tag/c/c++/index.html",
    "revision": "7d1255d65ec67a08397c1b2282590eda"
  },
  {
    "url": "tag/cmake/index.html",
    "revision": "03706fd33711d6d22e3d296ab966489f"
  },
  {
    "url": "tag/flask/index.html",
    "revision": "7a0cbb307e10980c2f37e3092c511571"
  },
  {
    "url": "tag/flowchart/index.html",
    "revision": "1fb4e86ba492f669a697854ad4f45f7f"
  },
  {
    "url": "tag/flutter/index.html",
    "revision": "2c2ec795f09e54a80050548aed1c7719"
  },
  {
    "url": "tag/flutter/page/2/index.html",
    "revision": "f87e4e8ad1c4e07b1a5e30bbedb49d4f"
  },
  {
    "url": "tag/flutter/page/3/index.html",
    "revision": "d58feb7dc9d24dd757f2edb79731dceb"
  },
  {
    "url": "tag/git/index.html",
    "revision": "1933090db01acb340c1921b604c6110a"
  },
  {
    "url": "tag/github/index.html",
    "revision": "8d537d1a7d7b739bc3202f4e91d81761"
  },
  {
    "url": "tag/haskell/index.html",
    "revision": "0a6261b860786234bcb15dd8d2507b63"
  },
  {
    "url": "tag/html/index.html",
    "revision": "f900df88642b5debc795c38777abe2ef"
  },
  {
    "url": "tag/index.html",
    "revision": "6561674174500fc2bfa22f7f4d69f17b"
  },
  {
    "url": "tag/ios/index.html",
    "revision": "42a5cb17e8f072476f7dfac4fc67011c"
  },
  {
    "url": "tag/ios/page/2/index.html",
    "revision": "6807edc1b7b611fbfce8d06d4cf1aa68"
  },
  {
    "url": "tag/ios/page/3/index.html",
    "revision": "e6d04a232ef6825f72201ead6fd82429"
  },
  {
    "url": "tag/ios/page/4/index.html",
    "revision": "dd7b79bdc9928ae9cf88a087ae5733c4"
  },
  {
    "url": "tag/ios/page/5/index.html",
    "revision": "7d665f9ed6db17340f4ce4f54b88e74f"
  },
  {
    "url": "tag/ios/page/6/index.html",
    "revision": "359db9bd037001bdad75518a5590028b"
  },
  {
    "url": "tag/ios/page/7/index.html",
    "revision": "adbf141d1cec63e855edb3abb69fb9fc"
  },
  {
    "url": "tag/ios/page/8/index.html",
    "revision": "20adcf20f91e4685417b4209fba9868b"
  },
  {
    "url": "tag/ios/page/9/index.html",
    "revision": "f3a5f878c07b7d6a8500a50b9d0b5b81"
  },
  {
    "url": "tag/json/index.html",
    "revision": "1e3586a908eaad0de27cf884e10f2bb6"
  },
  {
    "url": "tag/plantuml/index.html",
    "revision": "3a5bc1e60c31365da46dcc140880c0dc"
  },
  {
    "url": "tag/pod/index.html",
    "revision": "a78373b14f3ea1c8aaf78c28e04c13b0"
  },
  {
    "url": "tag/python/index.html",
    "revision": "74702ac37ec54c749a96fdab7a667c57"
  },
  {
    "url": "tag/read/index.html",
    "revision": "fb25b48efc8e33a12244d3658a27f712"
  },
  {
    "url": "tag/swift/index.html",
    "revision": "e8dffb1333b79dbc8799d884c54448be"
  },
  {
    "url": "tag/swift/page/10/index.html",
    "revision": "016449e5d639fbd60ee3e14619da3a92"
  },
  {
    "url": "tag/swift/page/11/index.html",
    "revision": "ca42e70a32b4a5625afc7e1461dd491d"
  },
  {
    "url": "tag/swift/page/12/index.html",
    "revision": "ac36dd068dfcacd7ef55c9729507bb7a"
  },
  {
    "url": "tag/swift/page/13/index.html",
    "revision": "65da3121a5a9298176695ef7f055ff44"
  },
  {
    "url": "tag/swift/page/14/index.html",
    "revision": "96a206a78ba0314726860566ceb4ddb4"
  },
  {
    "url": "tag/swift/page/2/index.html",
    "revision": "793150982311166fb811624af3775a01"
  },
  {
    "url": "tag/swift/page/3/index.html",
    "revision": "be3cbe5db5dcf572eb3786d645a53305"
  },
  {
    "url": "tag/swift/page/4/index.html",
    "revision": "509cd5b712dc6d9907f64ca2d65995f2"
  },
  {
    "url": "tag/swift/page/5/index.html",
    "revision": "869dd7e82fa05280b33f5f93da2a1d77"
  },
  {
    "url": "tag/swift/page/6/index.html",
    "revision": "a6f064a7f8a11b0c1686b59dc224d9b5"
  },
  {
    "url": "tag/swift/page/7/index.html",
    "revision": "e44a5a52f4bc6104f649d00903bea7ff"
  },
  {
    "url": "tag/swift/page/8/index.html",
    "revision": "021333583e6bd946dc7be3c44ea1d623"
  },
  {
    "url": "tag/swift/page/9/index.html",
    "revision": "04dcd74c5b287842eef27436d96931b6"
  },
  {
    "url": "tag/swiftenv/index.html",
    "revision": "3186d507815a6c2ce4b47129b138beab"
  },
  {
    "url": "tag/swiftnio/index.html",
    "revision": "8352e2228f8ad57530572661641f44bc"
  },
  {
    "url": "tag/swiftui/index.html",
    "revision": "432f7f157efdf3a3fb500ad960d32c9b"
  },
  {
    "url": "tag/swiftui/page/2/index.html",
    "revision": "086c0deff615ee1b07445dcc7e6d1fda"
  },
  {
    "url": "tag/swiftui/page/3/index.html",
    "revision": "f50f16e9e97d1c85a499d3c8f9d03462"
  },
  {
    "url": "tag/swiftui/page/4/index.html",
    "revision": "1cab8f75da0a8eccf12d86c7d9afaf51"
  },
  {
    "url": "tag/swiftui/page/5/index.html",
    "revision": "0c630730426f429a97483b427310b3aa"
  },
  {
    "url": "tag/swiftui/page/6/index.html",
    "revision": "275f6ae043d1e0950b70499544a1f052"
  },
  {
    "url": "tag/swiftui/page/7/index.html",
    "revision": "035c8b285700156e465b439e3ba25bde"
  },
  {
    "url": "tag/tips/index.html",
    "revision": "07ab19d81717b70494c7e66444321d10"
  },
  {
    "url": "tag/tools/index.html",
    "revision": "14f6586d04f940f1f38d9823315585f8"
  },
  {
    "url": "tag/tools/page/2/index.html",
    "revision": "9b89ea87797e5147f76dbca1ea4d4a97"
  },
  {
    "url": "tag/ubuntu/index.html",
    "revision": "2d9125cf4b7a911fa63050a2919e67e7"
  },
  {
    "url": "tag/vapor/index.html",
    "revision": "60a7e96e8eb398f7d165edf7a4dc7398"
  },
  {
    "url": "tag/vapor/page/2/index.html",
    "revision": "69bd4d8386e6068470969125f1ef3762"
  },
  {
    "url": "tag/vapor/page/3/index.html",
    "revision": "dd4828c4e86575552b467139458fa8a7"
  },
  {
    "url": "tag/vscode/index.html",
    "revision": "b7e07e632a3043de1d1455100ed46387"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "6a77438da371a1fde136d71401be3264"
  },
  {
    "url": "tag/yaml/index.html",
    "revision": "b0e46e7fb46b955156c7af5d2d3f5fe6"
  },
  {
    "url": "tag/书单/index.html",
    "revision": "804ac5c1d2236170d983ad9e6bcc29f0"
  },
  {
    "url": "tag/函数式编程/index.html",
    "revision": "f2ae69bd12ed644750ad0d69fbd352b2"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "51ae5050aab23576d847c6bc4d9513d9"
  },
  {
    "url": "tag/基础/page/2/index.html",
    "revision": "4ab2654e1585560b47c7d3de6bdaff07"
  },
  {
    "url": "tag/打包/index.html",
    "revision": "3f70c5857246906c72b55fbd8b979683"
  },
  {
    "url": "tag/指针/index.html",
    "revision": "ae3985aa1af04eaa7571ec8eb3d8bac1"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "6d24abb20393099463866910ada262e2"
  },
  {
    "url": "tag/数据结构与算法/page/2/index.html",
    "revision": "62232ca2a1156743afb9adee29c8246b"
  },
  {
    "url": "tag/笔记/index.html",
    "revision": "f3f4965eff33ddf3e7cbcf73be3124d1"
  },
  {
    "url": "tag/设计模式/index.html",
    "revision": "884b21c498394fa13139b3e09cd3733a"
  },
  {
    "url": "tag/设计模式/page/2/index.html",
    "revision": "dd21fd88beced14c65459afdb2234ce8"
  },
  {
    "url": "tag/设计模式/page/3/index.html",
    "revision": "e88228e6ec086978d7ad4fa708d3d059"
  },
  {
    "url": "tag/阅读/index.html",
    "revision": "d7d5e42ccff580e95c16c0093c87fcdc"
  },
  {
    "url": "tag/音频/index.html",
    "revision": "813b31a3b862818c428694648b59285b"
  },
  {
    "url": "timeline/index.html",
    "revision": "23b194d2f26588b74b7e76c6ee29f908"
  },
  {
    "url": "tools/flowchart/index.html",
    "revision": "f049a286a883ec93b5431f168a1fa90a"
  },
  {
    "url": "tools/git/git-branch-mapping.html",
    "revision": "e75a0192f76c84a048ebf27b177ffd57"
  },
  {
    "url": "tools/git/git-reset.html",
    "revision": "fd364bdb4a6aec1fbf2c511d56536893"
  },
  {
    "url": "tools/git/index.html",
    "revision": "a55c27ba53a129b3de4a1a80e36ab7c1"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "1715e4d22deaeaa739b04f987c04eff0"
  },
  {
    "url": "tools/git/t2-git-submodule.html",
    "revision": "e8e474679cfd571cd55f07d956fbe21c"
  },
  {
    "url": "tools/html/index.html",
    "revision": "f8f0d2c75bcb34123ad00d3d1fcbd8a5"
  },
  {
    "url": "tools/plantuml/index.html",
    "revision": "3b86591c2454fe3282c02f2f82d9e555"
  },
  {
    "url": "tools/plantuml/t1-sequence-diagram.html",
    "revision": "5d023b3c79ca9811ba4b2da4a2cef230"
  },
  {
    "url": "tools/plantuml/t2-class-diagram.html",
    "revision": "0ab978ce26659bb10ec8f4e01884517a"
  },
  {
    "url": "tools/vuepress/deploy-github-action.html",
    "revision": "958df5c5eb057a77526cda114554373b"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "76c15fd68f88a55cdf0ff312b4c4b9bb"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "df73ed98ec6018ba7907d0fe1066d4a6"
  },
  {
    "url": "tools/vuepress/memory-out.html",
    "revision": "52c8d7a8323a585b952e859fbf5b9593"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "ce850ba89fb130fd2bdb446de63d275e"
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
