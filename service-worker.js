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
    "revision": "17ca5e05f6234f852d1b30f84854c691"
  },
  {
    "url": "about/app/index.html",
    "revision": "1dd04fe4a5fcc8285df547b8ee2c9526"
  },
  {
    "url": "about/app/t1-protocol.html",
    "revision": "50217f40760bbc2ff22c3869fa7f1c1a"
  },
  {
    "url": "about/app/t2-secrect.html",
    "revision": "68c469e136a7e1ac1708636fb063831b"
  },
  {
    "url": "about/app/t3-miniapps-sec.html",
    "revision": "6d595e2ceb2abf635b9ade8b02f46c85"
  },
  {
    "url": "about/index/index.html",
    "revision": "d2edec5c86f19374818e8b3a3b187cfc"
  },
  {
    "url": "ai/index.html",
    "revision": "7324d838ce3cdcd61cf03acc8a075b3e"
  },
  {
    "url": "ai/t1-gzj.html",
    "revision": "41347f32c5a1566b71726b674723575b"
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
    "url": "assets/js/10.d19314c5.js",
    "revision": "7773de8c3be18ca1da47a9a94b9cfb23"
  },
  {
    "url": "assets/js/100.f04554b6.js",
    "revision": "735508e58a3564611893e762be11e4e6"
  },
  {
    "url": "assets/js/101.40b5548c.js",
    "revision": "abfced70a6dfc072a368332a1a61ba62"
  },
  {
    "url": "assets/js/102.a0b61e9f.js",
    "revision": "24b4abe5b59c5c83d14a0c658f6167ff"
  },
  {
    "url": "assets/js/103.f99ca67d.js",
    "revision": "8f6056b75e8378bcb54be8a2d8ef646d"
  },
  {
    "url": "assets/js/104.33557e5a.js",
    "revision": "90eed1ad350d136c51e6462f655bb262"
  },
  {
    "url": "assets/js/105.4b9c0806.js",
    "revision": "76a991ae3b6c4b7a01fe0b35340e3ba4"
  },
  {
    "url": "assets/js/106.7840e51e.js",
    "revision": "055c6e1eeeded4b844e01fc15579a6c0"
  },
  {
    "url": "assets/js/107.e5ddffa5.js",
    "revision": "bda9708aee7487d2c1ec922fccfee4ae"
  },
  {
    "url": "assets/js/108.da5c6ce8.js",
    "revision": "dbb25cd24811167eb191c0ba2e14cdb4"
  },
  {
    "url": "assets/js/109.5cc9345b.js",
    "revision": "b0c58998fd96908323515e9277871564"
  },
  {
    "url": "assets/js/11.444f8ca1.js",
    "revision": "d7368c123c597b44542863f5c2210f3f"
  },
  {
    "url": "assets/js/110.4d6c0eda.js",
    "revision": "dd21b6e6ce6028e1a0729ed01fcbdbf2"
  },
  {
    "url": "assets/js/111.1e2c8019.js",
    "revision": "c51c734f4928fd884b5020da0a2b7b82"
  },
  {
    "url": "assets/js/112.1a495ce3.js",
    "revision": "b57bdbbde4ba5bd46f7d90645d29ff24"
  },
  {
    "url": "assets/js/113.597d06e5.js",
    "revision": "1fa62e36889a1dfe0177b0a567066e29"
  },
  {
    "url": "assets/js/114.02c24056.js",
    "revision": "f572f644ed8a0b67ae2287e1c11eb747"
  },
  {
    "url": "assets/js/115.1f64fa90.js",
    "revision": "c23dd1893a081bcef0932585c17b09e3"
  },
  {
    "url": "assets/js/116.f3d27bee.js",
    "revision": "107e0b54d198ae1006ba8e96bfe2e20c"
  },
  {
    "url": "assets/js/117.716051af.js",
    "revision": "a4e3849ec1443afcadb6d3c835e82a11"
  },
  {
    "url": "assets/js/118.c7b0c86d.js",
    "revision": "7908ca9de004dcf98c4154ac9534eba9"
  },
  {
    "url": "assets/js/119.ec09e39f.js",
    "revision": "dcb991536fdaa263234765bc1a8d6988"
  },
  {
    "url": "assets/js/12.450054bb.js",
    "revision": "3f54b5019356fde593224021209e38a6"
  },
  {
    "url": "assets/js/120.7cbde1f9.js",
    "revision": "97873dce84cf44f9780d31c54571e17b"
  },
  {
    "url": "assets/js/121.e8ca796f.js",
    "revision": "08e90aed4d663189ef2cac07170f9197"
  },
  {
    "url": "assets/js/122.cb2c4b5e.js",
    "revision": "a972c8bdad8a73bb7053abdbd464ff89"
  },
  {
    "url": "assets/js/123.6e18610f.js",
    "revision": "6a0fc1c45438ba59d531d931c86b4a54"
  },
  {
    "url": "assets/js/124.bba224d4.js",
    "revision": "28be7e973378cb775f0ef00e98102f2f"
  },
  {
    "url": "assets/js/125.709db222.js",
    "revision": "5b914e9916bb102678d85c22fdff11c1"
  },
  {
    "url": "assets/js/126.5aa4fe11.js",
    "revision": "38477078b23756df1ad50e539bb4d27b"
  },
  {
    "url": "assets/js/127.4b7e3ff8.js",
    "revision": "a5e25f5063576ae9ce6bb5b3d48f50d0"
  },
  {
    "url": "assets/js/128.99b0fc8d.js",
    "revision": "d114721653db451065a1232f780e1859"
  },
  {
    "url": "assets/js/129.6d153915.js",
    "revision": "9659eb1ca97ae7a938adca7d16b49115"
  },
  {
    "url": "assets/js/13.17ef0e73.js",
    "revision": "d64fce8b9f86fd39b680bdedb06cdebf"
  },
  {
    "url": "assets/js/130.0e983b27.js",
    "revision": "7b0b5a0a9a52f5c555d322caf347fc1e"
  },
  {
    "url": "assets/js/131.814640b9.js",
    "revision": "a27d07cb24947a247d43034797ea164d"
  },
  {
    "url": "assets/js/132.98916003.js",
    "revision": "80849db8303af83a25f6df56bc48e809"
  },
  {
    "url": "assets/js/133.3a009ed4.js",
    "revision": "308e845914943861022dd700a3c040ca"
  },
  {
    "url": "assets/js/134.e27a39f5.js",
    "revision": "c32345eaa070c892c228a9c54538b48b"
  },
  {
    "url": "assets/js/135.48c665b5.js",
    "revision": "5e06bec5b766605b09017b559d409602"
  },
  {
    "url": "assets/js/136.d2d53715.js",
    "revision": "efbf3b62db5b3e7bfd548c74ca7dceb6"
  },
  {
    "url": "assets/js/137.7e6aae96.js",
    "revision": "df362dad6b11690d902de1f246ca9afd"
  },
  {
    "url": "assets/js/138.3c42ca88.js",
    "revision": "47955533fb03cacb7efcbdc9b609a36e"
  },
  {
    "url": "assets/js/139.10c59cd7.js",
    "revision": "8046feb92223eb008f760bba328917ed"
  },
  {
    "url": "assets/js/14.878f25c8.js",
    "revision": "e1ba8e957942181d372d46dfd1d2be33"
  },
  {
    "url": "assets/js/140.a6f14cea.js",
    "revision": "870a5cbd6ce6934640a5509e3a9e6c07"
  },
  {
    "url": "assets/js/141.c0a6a7aa.js",
    "revision": "6e5ce3317f1815da0c542aecc39baa38"
  },
  {
    "url": "assets/js/142.81f10e95.js",
    "revision": "1b4ed0008b832f4df92938f01209cfc5"
  },
  {
    "url": "assets/js/143.60f242d1.js",
    "revision": "afbec7c308573286e357417c8c55fc7f"
  },
  {
    "url": "assets/js/144.8f2d8d8b.js",
    "revision": "cfb9f0283fa516329c05805451eed8a4"
  },
  {
    "url": "assets/js/145.63d6ab54.js",
    "revision": "01a0b30bda168dca1cebe26cb618524c"
  },
  {
    "url": "assets/js/146.dafd1651.js",
    "revision": "b495ef4949e9f56641999c03f84c15c5"
  },
  {
    "url": "assets/js/147.95335b25.js",
    "revision": "640215136133f8f4b01c8f48de1cb2fc"
  },
  {
    "url": "assets/js/148.77399397.js",
    "revision": "a58912ff50b65202041602bb1aee25b1"
  },
  {
    "url": "assets/js/149.2ddfce0b.js",
    "revision": "5411eb6c94dff77fed6fcda19cdc8ef6"
  },
  {
    "url": "assets/js/15.dd92496d.js",
    "revision": "f00eb863eabe663441fa39fab46ee5de"
  },
  {
    "url": "assets/js/150.0031860d.js",
    "revision": "aa8ebc839e50040e1485fe97f4eb5dfa"
  },
  {
    "url": "assets/js/151.23854ae0.js",
    "revision": "6989e7bd9dd38e36076ec1043d0e704d"
  },
  {
    "url": "assets/js/152.80147d94.js",
    "revision": "a9d9c86574a46ff503e69684aa1f7908"
  },
  {
    "url": "assets/js/153.513355e7.js",
    "revision": "ed0695e09e5d8931fd58ca82eea792a8"
  },
  {
    "url": "assets/js/154.20f4a141.js",
    "revision": "db094b6ad93832c089228c90efe001c6"
  },
  {
    "url": "assets/js/155.b5b3ca39.js",
    "revision": "ad6e52b12ffae95a2ea7ea8a081c56e2"
  },
  {
    "url": "assets/js/156.7c29266e.js",
    "revision": "02b315b5a6f8a74186fdcdc42046c380"
  },
  {
    "url": "assets/js/157.f811829f.js",
    "revision": "d92fea9f954a12876f6b84a037d31706"
  },
  {
    "url": "assets/js/158.3ddac978.js",
    "revision": "09f330b452846a33b1e6252da1ac2cdf"
  },
  {
    "url": "assets/js/159.0364846d.js",
    "revision": "34ff6b6cb839b4d0b46fd03f579962bd"
  },
  {
    "url": "assets/js/16.256ffb31.js",
    "revision": "d787b8519fc3535cbdb308a5a338e839"
  },
  {
    "url": "assets/js/160.1d8c826f.js",
    "revision": "f19e5de20bab1f426b372eb8536cb094"
  },
  {
    "url": "assets/js/161.023dce6e.js",
    "revision": "783023684a9434b351bf7afaad5cc840"
  },
  {
    "url": "assets/js/162.fc112a3b.js",
    "revision": "860dfa3fa0ae2f1db5c0e77fdc857935"
  },
  {
    "url": "assets/js/163.aa7c1238.js",
    "revision": "9e911c4a5e5f8141d3c8eb35f6bcc8c0"
  },
  {
    "url": "assets/js/164.bd6cde61.js",
    "revision": "9a8f74609bc1dd8d14ec6dff1c2b28bd"
  },
  {
    "url": "assets/js/165.99d86d40.js",
    "revision": "b75ddf628e45a0e17c8f1da69af94c9d"
  },
  {
    "url": "assets/js/166.9f84ae46.js",
    "revision": "ce20f60913bb2539ad71f8e6ae3a59b2"
  },
  {
    "url": "assets/js/167.bfaa64d6.js",
    "revision": "1a40c7758a5bc9dccac8b260fc209968"
  },
  {
    "url": "assets/js/168.6db7160c.js",
    "revision": "0f3e4d702080874dd4941b8d136676ac"
  },
  {
    "url": "assets/js/169.6a04421f.js",
    "revision": "32a1ab69868c79c8e11de3b7058249e9"
  },
  {
    "url": "assets/js/17.9d94ba62.js",
    "revision": "ed50f2507795e2e956abe7c1c8741e73"
  },
  {
    "url": "assets/js/170.e5c8a17b.js",
    "revision": "bc53f417f3b35626e7cee95d08391e00"
  },
  {
    "url": "assets/js/171.c840d7d6.js",
    "revision": "b465e02ad36ae52189efc03472ea4ae3"
  },
  {
    "url": "assets/js/172.c8262011.js",
    "revision": "f0b26e612e81f20dbd64485e2ea1279b"
  },
  {
    "url": "assets/js/173.9f679bfd.js",
    "revision": "1602d18d948bcf5dfc36402023cf8be8"
  },
  {
    "url": "assets/js/174.7b3f5946.js",
    "revision": "1d453a386988cbfa5fa862d5c80d757c"
  },
  {
    "url": "assets/js/175.84edfafe.js",
    "revision": "b5006729ed39c1a22b90644d1c45acbc"
  },
  {
    "url": "assets/js/176.8b326035.js",
    "revision": "2bae716d08377a83b2cd0e157b405799"
  },
  {
    "url": "assets/js/177.e6c200d4.js",
    "revision": "0e014586713f00622160dd34b9bd1d65"
  },
  {
    "url": "assets/js/178.4b3ee13c.js",
    "revision": "5fb61f4dab63794ef521a4090fa0f190"
  },
  {
    "url": "assets/js/179.7508ecfc.js",
    "revision": "a1271a2b40e650632b0d2783286b8958"
  },
  {
    "url": "assets/js/18.06797c0d.js",
    "revision": "ac89ef8caeec7579ee2be0dc3c949615"
  },
  {
    "url": "assets/js/180.4552d19d.js",
    "revision": "b00db6459ea8ce0ec660bdc1bacce88d"
  },
  {
    "url": "assets/js/181.3e00e13e.js",
    "revision": "09a143503a2e62069354bd1b9ac94b8d"
  },
  {
    "url": "assets/js/182.30279f6c.js",
    "revision": "c29e3c2796f0ce7198a330dc883d895c"
  },
  {
    "url": "assets/js/183.8c7e266c.js",
    "revision": "b72c99c782c22c38efc7444facb60c0c"
  },
  {
    "url": "assets/js/184.fdbdf7ab.js",
    "revision": "33765f81d03eb90ee3e9365733c41b55"
  },
  {
    "url": "assets/js/185.c585c1cd.js",
    "revision": "e3fab7cea237d54f855b2323e05b71fa"
  },
  {
    "url": "assets/js/186.b4f4e51a.js",
    "revision": "524b619a6ef10a31d28d909c8336419c"
  },
  {
    "url": "assets/js/187.bc78508f.js",
    "revision": "835639000f6f0bbae14c00ee2c8c83d0"
  },
  {
    "url": "assets/js/188.6196efb5.js",
    "revision": "0b97a14680b29988b8891c290eef19b1"
  },
  {
    "url": "assets/js/189.cafb68aa.js",
    "revision": "4e9362a737e6f97e836b240272812fe7"
  },
  {
    "url": "assets/js/19.7a13361c.js",
    "revision": "76fb08c8f25f12ca529404ff657ccc78"
  },
  {
    "url": "assets/js/190.d01bfe7d.js",
    "revision": "6f62ed7a99b664a43e208b9f24910fde"
  },
  {
    "url": "assets/js/191.215afc15.js",
    "revision": "adf28bb0b4413de652727fc14c41b525"
  },
  {
    "url": "assets/js/192.d2252388.js",
    "revision": "d9b8ace82de4c25fb999716ea231b5db"
  },
  {
    "url": "assets/js/193.363280de.js",
    "revision": "cc26ceb1e52a9ac4ea52b4df958ff4ba"
  },
  {
    "url": "assets/js/194.a4791743.js",
    "revision": "471f0bb8768de787e2b9819ca53c4d46"
  },
  {
    "url": "assets/js/195.2120e5c0.js",
    "revision": "23b323f2ce46730f3df3e8e1adcc7320"
  },
  {
    "url": "assets/js/196.a3feb3df.js",
    "revision": "0b8b431be9548fbdc6bc435e988f03f8"
  },
  {
    "url": "assets/js/197.636a3ecc.js",
    "revision": "81672810b194bc8051606bede2abee05"
  },
  {
    "url": "assets/js/198.20497435.js",
    "revision": "cd07144cf0764d83266307c1bcd2d928"
  },
  {
    "url": "assets/js/199.50ed556f.js",
    "revision": "aad3ff87fff5f25087d0db66039e2c67"
  },
  {
    "url": "assets/js/20.bc0a0118.js",
    "revision": "0fb2f755b292e74478df6bcf40f07f61"
  },
  {
    "url": "assets/js/200.0cd3b980.js",
    "revision": "e5e6faf8fbad41e75b9f1d1069f63a64"
  },
  {
    "url": "assets/js/201.e16ffb0f.js",
    "revision": "07c30bb3fe683078da53ecfcdabf235d"
  },
  {
    "url": "assets/js/202.dc4a79c3.js",
    "revision": "b54eac277bc22ecaada8384507d6b777"
  },
  {
    "url": "assets/js/203.ffd4712e.js",
    "revision": "96fa920b55ed608630357c182bc0852f"
  },
  {
    "url": "assets/js/204.58db359d.js",
    "revision": "0746843a62281ac1332e19e91a469b41"
  },
  {
    "url": "assets/js/205.d76f4de4.js",
    "revision": "fdb8088b5eb41e821c912c85956b9dd1"
  },
  {
    "url": "assets/js/206.a5e31eed.js",
    "revision": "76cd98a67a0345183566b477e783c1bd"
  },
  {
    "url": "assets/js/207.fafc3921.js",
    "revision": "718fe08e56de25e6bc8df187ac1f1da5"
  },
  {
    "url": "assets/js/208.2a931cc8.js",
    "revision": "1f2ff59bf2829520c4c6e410fec39e02"
  },
  {
    "url": "assets/js/209.91d232ea.js",
    "revision": "f6519a9b991cdec30059332172f18dc2"
  },
  {
    "url": "assets/js/21.2511433a.js",
    "revision": "def162b31ae514fe12552947e29d51ef"
  },
  {
    "url": "assets/js/210.e785cf84.js",
    "revision": "604c8bc7e9f902e8a98c7fdf9ab37b6a"
  },
  {
    "url": "assets/js/211.29ced447.js",
    "revision": "d06feec44718412c95953d5d55f2e154"
  },
  {
    "url": "assets/js/212.60fc7402.js",
    "revision": "246b9565d24a8228ddd1e73c2f7aba47"
  },
  {
    "url": "assets/js/213.c0c715cb.js",
    "revision": "30c90af838298a618e68de71a7769b1f"
  },
  {
    "url": "assets/js/214.82cb7fa6.js",
    "revision": "33b146c3176fc49736172494bcc63956"
  },
  {
    "url": "assets/js/215.9501e2f0.js",
    "revision": "8a521818484609c51f4d30408aded159"
  },
  {
    "url": "assets/js/216.02dbf750.js",
    "revision": "f393a5c1152e7b2ca3a250801933967c"
  },
  {
    "url": "assets/js/217.41b70bcf.js",
    "revision": "fd2dab4c918c18e254b88620ad817386"
  },
  {
    "url": "assets/js/218.0868b00a.js",
    "revision": "fb62eb4cca39d1e12b49b75adc4bc8ef"
  },
  {
    "url": "assets/js/219.f8af85ee.js",
    "revision": "e386a9294b3b66ee8e3501c2e672b6b1"
  },
  {
    "url": "assets/js/22.1eec3af5.js",
    "revision": "55c1ff20160770c838a5edb42c78ef23"
  },
  {
    "url": "assets/js/220.122ca019.js",
    "revision": "3e11330ab6cd91e4b6906e29024d1556"
  },
  {
    "url": "assets/js/221.e1d60e1f.js",
    "revision": "d169b76d865c3141b1c287402cf76a3a"
  },
  {
    "url": "assets/js/222.5d0ca451.js",
    "revision": "481f4aae719d35d8693bfdad5adb47c6"
  },
  {
    "url": "assets/js/223.ef1cd7e8.js",
    "revision": "7b056fb8ffe910db488796a06126e70f"
  },
  {
    "url": "assets/js/224.a8b1e82b.js",
    "revision": "07bb0c28d5650cdadbdc8bb62b283e29"
  },
  {
    "url": "assets/js/225.0b5abdab.js",
    "revision": "78de08f50204f80d22b70c1ca893ae83"
  },
  {
    "url": "assets/js/226.fabf05be.js",
    "revision": "e4f135feb9c0f406b25eae00b5abd073"
  },
  {
    "url": "assets/js/227.6bcc88ee.js",
    "revision": "c2c7d7d97f25375d643b212ecd322b8d"
  },
  {
    "url": "assets/js/228.6b8af750.js",
    "revision": "984d8809ae06961d41e37bee92fd8c25"
  },
  {
    "url": "assets/js/229.00e6cf6e.js",
    "revision": "3231b3d022f89c90897c16ba6c4f5286"
  },
  {
    "url": "assets/js/23.5ec29240.js",
    "revision": "0f2e6d1e9681b329f6fddf920a3d75b5"
  },
  {
    "url": "assets/js/230.ba0b972e.js",
    "revision": "bbdc55acfb0a61fc2c1ef1a0e77ab131"
  },
  {
    "url": "assets/js/231.3684adb3.js",
    "revision": "06d72d0159f83428d3b812c550fb117f"
  },
  {
    "url": "assets/js/232.188b4d93.js",
    "revision": "bc3d18cbd91c5ac63fcd20f2d2a4ffba"
  },
  {
    "url": "assets/js/233.b894ec11.js",
    "revision": "a712845e52522daeca6e46cbe1f6cead"
  },
  {
    "url": "assets/js/234.38f6c8c0.js",
    "revision": "d51521688a133eea59a3edba50162f05"
  },
  {
    "url": "assets/js/235.2aa3539a.js",
    "revision": "59f01c29d05bcddade53939cba6be769"
  },
  {
    "url": "assets/js/236.9280f787.js",
    "revision": "55ef5986721b9241304cf2095bfd9755"
  },
  {
    "url": "assets/js/237.7d3da7d4.js",
    "revision": "95ca6917ea9260919bd887191f0eed2c"
  },
  {
    "url": "assets/js/238.bc589e63.js",
    "revision": "1d2d96861d4365ada6bcbae37c2ceab8"
  },
  {
    "url": "assets/js/239.b9661885.js",
    "revision": "4ef683d2d748dac17ae6d6cad132338a"
  },
  {
    "url": "assets/js/24.124148d1.js",
    "revision": "ad4351b30c6d2aadb9642337bb13e170"
  },
  {
    "url": "assets/js/240.953c424e.js",
    "revision": "d6ce8b60a69df67b0dfc21d0d1ef5a20"
  },
  {
    "url": "assets/js/241.780ca620.js",
    "revision": "32be679d04c79cb7ca8e9af7e53f5ea7"
  },
  {
    "url": "assets/js/242.4816cb18.js",
    "revision": "c9d3d38f510ee7ce1b2c78c80f2a8566"
  },
  {
    "url": "assets/js/243.82b5a6f4.js",
    "revision": "9ece0e70496a018a543171425efb8d2b"
  },
  {
    "url": "assets/js/244.e5fddcdd.js",
    "revision": "6201820cdd1de77d4405f3f73a467b5c"
  },
  {
    "url": "assets/js/245.88855ac5.js",
    "revision": "aa6dbf6014239e4df4aee28067968f4b"
  },
  {
    "url": "assets/js/246.2e8d6a38.js",
    "revision": "ca6469fce9342d106b6e4d62a3a0830d"
  },
  {
    "url": "assets/js/247.0e83aa27.js",
    "revision": "7752b3956ebdb4f2b7903f40d00412d0"
  },
  {
    "url": "assets/js/248.b761eeca.js",
    "revision": "6dfc8ab5fe12798f9cc0e6d380fb35eb"
  },
  {
    "url": "assets/js/25.c70c235b.js",
    "revision": "70ed7d8e863d3fa74f864148e8269e7e"
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
    "url": "assets/js/37.4629320f.js",
    "revision": "38da31c1301cd535db52162512711b58"
  },
  {
    "url": "assets/js/38.e37f0a51.js",
    "revision": "2fd13c9eeb3f3dff73c7b98b6fb93b2a"
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
    "url": "assets/js/66.8363892e.js",
    "revision": "4b837a9f024d6d4507e5e02cf7e4a227"
  },
  {
    "url": "assets/js/67.0c3808de.js",
    "revision": "8b02f14ee3a4075f0949d39657cdd1a4"
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
    "url": "assets/js/72.5197b6a7.js",
    "revision": "f31aa23a0a30e935acea7ec8460755ae"
  },
  {
    "url": "assets/js/73.2c6139f2.js",
    "revision": "969ba5840f379fc0a9bd3989190ae87d"
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
    "url": "assets/js/82.e50dc3ba.js",
    "revision": "8a99ba60497ac000c83c477f0689e514"
  },
  {
    "url": "assets/js/83.084f9def.js",
    "revision": "7100f947fe4325fdbbb736d8437816ed"
  },
  {
    "url": "assets/js/84.122b90a2.js",
    "revision": "959136f3e48b86e7e29b0f036c54b758"
  },
  {
    "url": "assets/js/85.38344784.js",
    "revision": "94a5d156c2e75cb41a747db26f0fa7e2"
  },
  {
    "url": "assets/js/86.662451d7.js",
    "revision": "c4cce58a7251010e4e4baa824e56afd4"
  },
  {
    "url": "assets/js/87.e7e9feac.js",
    "revision": "417ff3488c32339082560e0bc513175a"
  },
  {
    "url": "assets/js/88.9078d684.js",
    "revision": "ba62506ca16376d345f370a957ee7438"
  },
  {
    "url": "assets/js/89.24e7014a.js",
    "revision": "6382d9b461d2395d58e003f911180f77"
  },
  {
    "url": "assets/js/9.cd02aa0b.js",
    "revision": "ece3df91fcb2ef15af7d88a00f975150"
  },
  {
    "url": "assets/js/90.671011f0.js",
    "revision": "de1d7759093df250d6ee32ef6768d431"
  },
  {
    "url": "assets/js/91.68cf438a.js",
    "revision": "8a176b04c7af36b7b9a8b22c1d83fd31"
  },
  {
    "url": "assets/js/92.1facc2c6.js",
    "revision": "b905dfd79df9f97065b98a098283917a"
  },
  {
    "url": "assets/js/93.19f9d810.js",
    "revision": "528e39eb2c866d6050edae3bd1811da2"
  },
  {
    "url": "assets/js/94.86fcae10.js",
    "revision": "faa758fe956e3450b0d7947f8792f879"
  },
  {
    "url": "assets/js/95.7d3b6ac4.js",
    "revision": "b683a4653c97e0fcab1b9d17e1c94947"
  },
  {
    "url": "assets/js/96.4e97daf3.js",
    "revision": "7d5358d416b16d93daa5bc1d2effb629"
  },
  {
    "url": "assets/js/97.eb8ad35d.js",
    "revision": "41e37be1850c256d0ccd289eb72926d2"
  },
  {
    "url": "assets/js/98.979638e5.js",
    "revision": "d2187ca8201f580f53c18eebdc2146e9"
  },
  {
    "url": "assets/js/99.859703b3.js",
    "revision": "1a66d93805d3a9962749b6f86d197c00"
  },
  {
    "url": "assets/js/app.5cf536af.js",
    "revision": "694dca3e2f5df32a6847fd80ec276a0a"
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
    "revision": "32a8a1b1ba6208f2844a3284b15f8339"
  },
  {
    "url": "basis/algorithms/t1-buble-sort.html",
    "revision": "19f7a6a387f526e8dbefdf2898d2e0b0"
  },
  {
    "url": "basis/algorithms/t2-selection-sort.html",
    "revision": "f619ef84cca2294cbe346ab6f6a33ec9"
  },
  {
    "url": "basis/algorithms/t3-insertion-sort.html",
    "revision": "e89480ecebe684a6ec4820c060572dcf"
  },
  {
    "url": "basis/algorithms/t4-shell-sort.html",
    "revision": "b039cb93c675fbbb8eeaa633ccbe8a11"
  },
  {
    "url": "basis/algorithms/t5-quick-sort.html",
    "revision": "bd35e7b100b0b21dc718486f91feee92"
  },
  {
    "url": "basis/algorithms/t6-heap-sort.html",
    "revision": "2feb751ada92976bb91b4f948bb7941b"
  },
  {
    "url": "basis/algorithms/t7-merge-sort.html",
    "revision": "dd46454bf96ed2c7dd453133c00e9359"
  },
  {
    "url": "basis/algorithms/t8-radix-sort.html",
    "revision": "6cfb00180dc2be8c2d5056c43c93a844"
  },
  {
    "url": "basis/algorithms/t9-count-sort.html",
    "revision": "1928a95db4b2f0a8dd4e6606ff808001"
  },
  {
    "url": "basis/algorithms/u1-bucket-sort.html",
    "revision": "fd170827b35f8254c9e85ba53d73646f"
  },
  {
    "url": "basis/design-patterns/AdapterPattern.html",
    "revision": "03dcb18caa9cf6d06fc1464103ee2f28"
  },
  {
    "url": "basis/design-patterns/BridgePattern.html",
    "revision": "3840440df099b0fb70c02bee41ccbfd0"
  },
  {
    "url": "basis/design-patterns/BuilderPattern.html",
    "revision": "e107a54e02c8b8c271e614fb0808a2a9"
  },
  {
    "url": "basis/design-patterns/ChainOfResponsibilityPattern.html",
    "revision": "39536d445340b8d4c876641d998e10fd"
  },
  {
    "url": "basis/design-patterns/ClassReleation.html",
    "revision": "b4f11a80816200fb1dc11cffff3b36e0"
  },
  {
    "url": "basis/design-patterns/CommandPattern.html",
    "revision": "99c55b75bac8494d1a12e738f04ba201"
  },
  {
    "url": "basis/design-patterns/CompositePattern.html",
    "revision": "d0900b36855b4af69c27590825e65ea2"
  },
  {
    "url": "basis/design-patterns/DecoratorPattern.html",
    "revision": "3916e352214606177e96100bd48f9ad5"
  },
  {
    "url": "basis/design-patterns/DesignPrinciples.html",
    "revision": "ac7eb294a645e56ab7eb691e60a462bd"
  },
  {
    "url": "basis/design-patterns/FacadePattern.html",
    "revision": "799720be2de5b63ea58352b086b1282b"
  },
  {
    "url": "basis/design-patterns/FactoryPattern.html",
    "revision": "3419f2f6363e34bd0648ebef053b6c43"
  },
  {
    "url": "basis/design-patterns/FilterCriteriaPattern.html",
    "revision": "82be00f596c05bb12c552ad41fbc312c"
  },
  {
    "url": "basis/design-patterns/FlyweightPattern.html",
    "revision": "52262f19e289a0594fea09cb95d839ae"
  },
  {
    "url": "basis/design-patterns/index.html",
    "revision": "a1d712056c5a44919dc3b58c3c0a6f79"
  },
  {
    "url": "basis/design-patterns/InterpreterPattern.html",
    "revision": "b1fbf7bd6a9a74cd1c716611ece061e9"
  },
  {
    "url": "basis/design-patterns/IteratorPattern.html",
    "revision": "472bf4a6004fa404a22db22f4453a563"
  },
  {
    "url": "basis/design-patterns/MediatorPattern.html",
    "revision": "008b8f5359a7ee13be8d98fd6c0c23de"
  },
  {
    "url": "basis/design-patterns/MementoPattern.html",
    "revision": "b7ef98e322f311632d43fcb37069775a"
  },
  {
    "url": "basis/design-patterns/NullObjectPattern.html",
    "revision": "078121ae04a6d92ecea483a2a34ec9da"
  },
  {
    "url": "basis/design-patterns/ObserverPattern.html",
    "revision": "798823a24f7f6b6c5fe045d6cf5da86f"
  },
  {
    "url": "basis/design-patterns/PrototypePattern.html",
    "revision": "c58f6ba6b33061522219f6c48a8f8297"
  },
  {
    "url": "basis/design-patterns/ProxyPattern.html",
    "revision": "58098fa0c306fcd9644551c5d2158aec"
  },
  {
    "url": "basis/design-patterns/SingletonPattern.html",
    "revision": "3a723266010378d62060098885d2dc3b"
  },
  {
    "url": "basis/design-patterns/StatePattern.html",
    "revision": "eb12adf5907529396c9588eb5ad2762b"
  },
  {
    "url": "basis/design-patterns/StrategyPattern.html",
    "revision": "bee85710c07fc274644a70ebcb8de86e"
  },
  {
    "url": "basis/design-patterns/TemplatePattern.html",
    "revision": "4da199ac30128dc198662951a8c17294"
  },
  {
    "url": "basis/design-patterns/VisitorPattern.html",
    "revision": "98b2ea1f19c64d0bc60c3d54e5505d78"
  },
  {
    "url": "basis/index/index.html",
    "revision": "c1366b9c17f0bef3138c17580681480b"
  },
  {
    "url": "basis/os/index.html",
    "revision": "588e34270770b559da311361d12bf646"
  },
  {
    "url": "book/index.html",
    "revision": "4b5ec1a94d6321485c1171bf931eeb4f"
  },
  {
    "url": "book/t-find-books.html",
    "revision": "e98ab180602298eae4afd67016071656"
  },
  {
    "url": "c/audio/audio-basic.html",
    "revision": "f29a16a564f275a1cd45de549d8c49cb"
  },
  {
    "url": "c/audio/endian.html",
    "revision": "47d6451ee6fab03d60356c04085d5933"
  },
  {
    "url": "c/audio/index.html",
    "revision": "22ec6d100351ec2dafb6effb30ff0408"
  },
  {
    "url": "c/cmake/01-basic/A-hello-cmake.html",
    "revision": "da4bd7e94638d2afb1567e2d292fc958"
  },
  {
    "url": "c/cmake/01-basic/B-hello-headers.html",
    "revision": "c1aece4f793eb0618cad49935b57dc29"
  },
  {
    "url": "c/cmake/01-basic/C-static-library.html",
    "revision": "a13125c110314a274ec0de27c83f6029"
  },
  {
    "url": "c/cmake/01-basic/D-shared-library.html",
    "revision": "6c0d4fa53e88df633dac3971fc1701f9"
  },
  {
    "url": "c/cmake/01-basic/E-installing.html",
    "revision": "f14a36b1da4d9143f57ebebfc973c53f"
  },
  {
    "url": "c/cmake/01-basic/F-build-type.html",
    "revision": "7674474b2f17cfe5460f9f9059239b40"
  },
  {
    "url": "c/cmake/01-basic/G-compile-flags.html",
    "revision": "ee04588606485ca26b42daae3a34932e"
  },
  {
    "url": "c/cmake/01-basic/H-third-party-library.html",
    "revision": "6fc12005aa797e8f9b1d931013a88f4c"
  },
  {
    "url": "c/cmake/01-basic/I-compiling-with-clang.html",
    "revision": "e1e216d789b62f764e2660c69c69bc19"
  },
  {
    "url": "c/cmake/01-basic/index.html",
    "revision": "f8147b6f1f776b2f116e5fa2ae84a14f"
  },
  {
    "url": "c/cmake/01-basic/J-building-with-ninja.html",
    "revision": "a65e2011338aef0c0639e1ffe6b7a0a2"
  },
  {
    "url": "c/cmake/01-basic/K-imported-targets.html",
    "revision": "1cf54cf28ca253323ce11f54b11513b2"
  },
  {
    "url": "c/cmake/01-basic/L-cpp-standard.html",
    "revision": "0f8fc69f7832701e66ac2cec22c15c40"
  },
  {
    "url": "c/cmake/index.html",
    "revision": "cecb7ecb3b8134caa7a9b9b401cbb1d3"
  },
  {
    "url": "c/program/index.html",
    "revision": "c984d12f8d504b313fac6297736ec556"
  },
  {
    "url": "c/program/pointers.html",
    "revision": "a88884103c02beac8987c3b9a5b6c07d"
  },
  {
    "url": "categories/index.html",
    "revision": "04531f77e0c5289a4ca78e7c7496445c"
  },
  {
    "url": "figma/index.html",
    "revision": "de4bbf98d6da98a1e605e311be8fc43a"
  },
  {
    "url": "flutter/flutter-color.html",
    "revision": "6b0b39af595dd3c1a6e37edfda2d1d17"
  },
  {
    "url": "flutter/github-actions-build-flutter-android.html",
    "revision": "d710d7bf578823115e903b575b8a3242"
  },
  {
    "url": "flutter/github-actions-build-flutter-ios.html",
    "revision": "7d8baabea9397444effef14029cb0982"
  },
  {
    "url": "flutter/index.html",
    "revision": "cfeeaf5d0d7cf3572445a874b4f86645"
  },
  {
    "url": "flutter/point.html",
    "revision": "d24a67843e2a7e137f5f60a3ecce71d8"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "41d2db1168be3fade09e266772973fa9"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "80f69a52f55005d9c60ab1f1dac23019"
  },
  {
    "url": "flutter/t3-messages.html",
    "revision": "c275c6b42160dfd920545e781d5d4242"
  },
  {
    "url": "flutter/t3-mixin.html",
    "revision": "7180525de261801a501d99625e92728c"
  },
  {
    "url": "flutter/t4-lifecycle.html",
    "revision": "2dbc2e264e5702daf26d6564d40e8ea2"
  },
  {
    "url": "flutter/t5-flutter-web-deploy.html",
    "revision": "0c86eefb801283910f0a7247f1f9a7e5"
  },
  {
    "url": "flutter/t6-docker-web-deploy.html",
    "revision": "2fa21c0fa63d8751a81b8edfda04808c"
  },
  {
    "url": "flutter/t7-fvm.html",
    "revision": "3f5ba9079cddd0efc29ee104660f4183"
  },
  {
    "url": "flutter/t8-const.html",
    "revision": "484f68a3f596f7cd8476e387b7848cbb"
  },
  {
    "url": "flutter/t9-logs.html",
    "revision": "8ead6d8fe022a8c10ab45c1814fdfbe3"
  },
  {
    "url": "flutter/u10-fvm-flutter2.html",
    "revision": "48d3a5dfaf95cd20833fa2879632a03f"
  },
  {
    "url": "flutter/u11-flutter-render.html",
    "revision": "78470f64219c2152fb810f4af2d8b315"
  },
  {
    "url": "flutter/u12-flutter-create-w.html",
    "revision": "104e15054c0771715b22d333d16175d7"
  },
  {
    "url": "flutter/u12-flutter-web-01.html",
    "revision": "e30ce82bcd9bfee6dfddd8f03c5423c0"
  },
  {
    "url": "flutter/u12-flutter-web-02.html",
    "revision": "6ec4c3726d154d524ecefc945ee62f9d"
  },
  {
    "url": "flutter/u13-sliverappbar.html",
    "revision": "a2aa04b443b9b2fe6db64cd61402a0a3"
  },
  {
    "url": "flutter/u14-navbar-color.html",
    "revision": "142e021eb1b0d32ded50e0cabd730d93"
  },
  {
    "url": "flutter/u15-custom-nabar.html",
    "revision": "34c0481b2f1cfef1d3dab6ff8ea046a1"
  },
  {
    "url": "flutter/u16-shape.html",
    "revision": "2f539ef509879a3f9d75969c57ba1322"
  },
  {
    "url": "flutter/y1-statubar.html",
    "revision": "4cb858055f3e1a4d8aa54dce2b8cfa91"
  },
  {
    "url": "haskell/1-install.html",
    "revision": "cf536c3169c196b5a56e959be9de6634"
  },
  {
    "url": "haskell/2-vscode.html",
    "revision": "59973e62c05a74c09479376644b218b4"
  },
  {
    "url": "haskell/3-pktool.html",
    "revision": "a061a667f1b9598204d1a168da6a50f4"
  },
  {
    "url": "haskell/4-digui.html",
    "revision": "324be4602c20517ee3b1a7b23069901d"
  },
  {
    "url": "haskell/index.html",
    "revision": "ac0831cf981d50f0b86cd9d49b6da633"
  },
  {
    "url": "index.html",
    "revision": "94f2dce3538db7b4c9b13c4a54857649"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "python/1-file-map.html",
    "revision": "55ae67047c5d2aa5dd940767cfeb4a6c"
  },
  {
    "url": "python/2-mongo-random.html",
    "revision": "ae690b01d00b245c3e039e9673459cc7"
  },
  {
    "url": "python/3-page-upload.html",
    "revision": "f453f4703a1b584092fdda92231e7e71"
  },
  {
    "url": "python/4-bt-flask.html",
    "revision": "d386cb9563b5bf3f5117e8281c0dca45"
  },
  {
    "url": "python/index.html",
    "revision": "e3bae5e000b2f8ce456166d236253990"
  },
  {
    "url": "read/head-first-oop.html",
    "revision": "3eeef0c0a7bbc66b48d8fa46bfd9dcd8"
  },
  {
    "url": "read/index.html",
    "revision": "b1000cb9aaa44e58ecaa79b2d3d3b8c6"
  },
  {
    "url": "swift/better/autoclosure.html",
    "revision": "ccf264e529f7d2ac2e20d67f162efe14"
  },
  {
    "url": "swift/better/available.html",
    "revision": "e8ca13729de978c312bbeab86addbce5"
  },
  {
    "url": "swift/better/chain.html",
    "revision": "644ed988a66bc37588eb6f9a25a665ae"
  },
  {
    "url": "swift/better/copy-in-copy-out.html",
    "revision": "b67984c205afdb004ce91792537256d5"
  },
  {
    "url": "swift/better/Copy-On-Write.html",
    "revision": "7302d85393aeead9b8eac67b18e2da94"
  },
  {
    "url": "swift/better/di.html",
    "revision": "52fa69dfd58df6a408a176d22b56f7af"
  },
  {
    "url": "swift/better/index.html",
    "revision": "c3e538afdb61bcefbe02598169803bdb"
  },
  {
    "url": "swift/better/last.html",
    "revision": "fe539fda4f28328a23846c7742b3363f"
  },
  {
    "url": "swift/better/lazy.html",
    "revision": "eb39ce0461af3b469ee615647d8dfbc9"
  },
  {
    "url": "swift/better/protocol.html",
    "revision": "078f5f9f396ccbd8d88b6503b9d21e65"
  },
  {
    "url": "swift/fp/index.html",
    "revision": "b7f9fa34127d6df6b527f9715fd783fc"
  },
  {
    "url": "swift/fp/t1-fp.html",
    "revision": "ff5faa658e30626b278e944a66c159bd"
  },
  {
    "url": "swift/fp/t2-lens.html",
    "revision": "c6e58c286c6ac3050aa029433067a388"
  },
  {
    "url": "swift/fp/t3-json1.html",
    "revision": "ad105e5e56a07f73c7d17a1369f1c21c"
  },
  {
    "url": "swift/fp/t3-json2.html",
    "revision": "ad7ce36fd93a766d792871caf2aa4a23"
  },
  {
    "url": "swift/fp/t3-json3.html",
    "revision": "d1a72fe6ed784fac665c42bf875fe672"
  },
  {
    "url": "swift/fp/t4-length.html",
    "revision": "d46c4f082d6f9e50743f930a0569fd88"
  },
  {
    "url": "swift/ios/index.html",
    "revision": "a9f9e6ad284d14db7c67a03c6ef7aae5"
  },
  {
    "url": "swift/ios/ios-build-cers.html",
    "revision": "eab4968f129bac0ef322c3948d8f72a9"
  },
  {
    "url": "swift/ios/pod-wechat.html",
    "revision": "03b5fef4ae09d0b75da1f354c21043de"
  },
  {
    "url": "swift/ios/t1-pod-webp.html",
    "revision": "d854097e9935a0922c188fe91a71124a"
  },
  {
    "url": "swift/ios/t2-youhua.html",
    "revision": "ed21bc072f378eccf416b8c64b75c93f"
  },
  {
    "url": "swift/swiftui/ActionSheet.html",
    "revision": "5ce0910e2f73b9b6afc9bdec777b525e"
  },
  {
    "url": "swift/swiftui/Alert.html",
    "revision": "13428c73aa2becb4dbd3d26a3b31153b"
  },
  {
    "url": "swift/swiftui/AnyGesture.html",
    "revision": "ace565c99c4da23e72273b70bf6f9dae"
  },
  {
    "url": "swift/swiftui/Bindings.html",
    "revision": "291f07eb0db02710fb825d8994fd3ee2"
  },
  {
    "url": "swift/swiftui/Button.html",
    "revision": "89ffd7729f47f445330315188779a6be"
  },
  {
    "url": "swift/swiftui/DatePicker.html",
    "revision": "9544432ba3f47df06593acefeeabfe49"
  },
  {
    "url": "swift/swiftui/DragGesture.html",
    "revision": "4174cdfbcd7bbb17e1d5c1b61772429c"
  },
  {
    "url": "swift/swiftui/DynamicNavigationDestinationLink.html",
    "revision": "886b4ead9f1422fbe114240ba3df32df"
  },
  {
    "url": "swift/swiftui/EditButton.html",
    "revision": "08194c490063b7ba5b5e54a35a2c2c64"
  },
  {
    "url": "swift/swiftui/Environment.html",
    "revision": "2fd9dd65fc82b8c7e9aae2faf387bd44"
  },
  {
    "url": "swift/swiftui/EnvironmentObject.html",
    "revision": "a37d21404aca02889c18c15da41d43cb"
  },
  {
    "url": "swift/swiftui/EnvironmentValues.html",
    "revision": "1ebb2129f96020c01cb2a1d22d488f64"
  },
  {
    "url": "swift/swiftui/ExclusiveGesture.html",
    "revision": "3a4acf8c9ee2f47e2e13c090009c322f"
  },
  {
    "url": "swift/swiftui/ForEach.html",
    "revision": "79a7c4532aa1d6ab66d9466e0a57d693"
  },
  {
    "url": "swift/swiftui/Form.html",
    "revision": "c01711c4b8e1ff636ef7eee37c41e2b2"
  },
  {
    "url": "swift/swiftui/GeometryReader.html",
    "revision": "2d18de9981bbb11cc97a151ae1134ecd"
  },
  {
    "url": "swift/swiftui/Group.html",
    "revision": "033d463be7a14b7e373ea54873dacbe9"
  },
  {
    "url": "swift/swiftui/GroupBox.html",
    "revision": "410830a6f92515b84e2aed80d081ec7b"
  },
  {
    "url": "swift/swiftui/HSplitView.html",
    "revision": "6bc1f7b5329e552c9b36544e58d11d9f"
  },
  {
    "url": "swift/swiftui/HStack.html",
    "revision": "a6db48f61c187e1a1fff614e46ffb4b1"
  },
  {
    "url": "swift/swiftui/Image.html",
    "revision": "482338891321d844626896c6d4bf83c7"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "f7038a7b0fa7466e6f23f5a957c3b289"
  },
  {
    "url": "swift/swiftui/ItemBasedPopUpButton.html",
    "revision": "29d6e45f507771da9b7199c750ec2572"
  },
  {
    "url": "swift/swiftui/List.html",
    "revision": "4326e3f7b7c9966af789b89d032df410"
  },
  {
    "url": "swift/swiftui/LocalizedStringKey.html",
    "revision": "5f0f8eace081d4f780df3b25bd72044d"
  },
  {
    "url": "swift/swiftui/LongPressGesture.html",
    "revision": "82b7e427abbf7d35adc61b5887078ac4"
  },
  {
    "url": "swift/swiftui/MagnificationGesture.html",
    "revision": "6fc24edef24d056cbaaa321c15b01518"
  },
  {
    "url": "swift/swiftui/Modal.html",
    "revision": "260e225531d50e8d39f1edf8a164cd8f"
  },
  {
    "url": "swift/swiftui/NavigationButton.html",
    "revision": "b88f476716284bd60670dd9ab319d5b9"
  },
  {
    "url": "swift/swiftui/NavigationView.html",
    "revision": "00d9bb9b7cff3a69a241662607d278a2"
  },
  {
    "url": "swift/swiftui/ObjectBinding.html",
    "revision": "c7c17a08faac92d14ce6a525ed7a4e6c"
  },
  {
    "url": "swift/swiftui/PasteButton.html",
    "revision": "8fa08515a3f5e57e91f253d6fbdd2fa8"
  },
  {
    "url": "swift/swiftui/Picker.html",
    "revision": "9c9c948382a46df28733d5320e6e4b75"
  },
  {
    "url": "swift/swiftui/Popover.html",
    "revision": "224a91cc673e29caf6b9ededd977a745"
  },
  {
    "url": "swift/swiftui/PreferenceKey.html",
    "revision": "2a99beeec6aae3826e7e8a667e59a099"
  },
  {
    "url": "swift/swiftui/PresentationButton.html",
    "revision": "b4e0f5ecacf2d757ce577901d2b4478b"
  },
  {
    "url": "swift/swiftui/Principle01.html",
    "revision": "db28764fe69ea2a7523c358c963513c0"
  },
  {
    "url": "swift/swiftui/Principle02.html",
    "revision": "88a6a82594ffbbeda5c5433fbc295135"
  },
  {
    "url": "swift/swiftui/Principle03.html",
    "revision": "da6f225bc444fd5f4e276b881406747e"
  },
  {
    "url": "swift/swiftui/Principle04.html",
    "revision": "6a6acf7c07498bdde0b4893321a4f1dc"
  },
  {
    "url": "swift/swiftui/Principle05.html",
    "revision": "8b8e8a2b96b90009a65808af64d831c3"
  },
  {
    "url": "swift/swiftui/Principle06.html",
    "revision": "6edcfc5253ac84f01eb2c810967e56e5"
  },
  {
    "url": "swift/swiftui/PullDownButton.html",
    "revision": "135859e26ff1b1bb449de5c7454e0b38"
  },
  {
    "url": "swift/swiftui/RotationGesture.html",
    "revision": "799767f09da2f1676ab69bde58a91bea"
  },
  {
    "url": "swift/swiftui/ScrollView.html",
    "revision": "6cfa42ea7f74f3829f52b54428c72a73"
  },
  {
    "url": "swift/swiftui/Section.html",
    "revision": "911fffa3128f367393606d166535d996"
  },
  {
    "url": "swift/swiftui/SecureField.html",
    "revision": "b03cfabc270221691010f3392a700ef4"
  },
  {
    "url": "swift/swiftui/SegmentedControl.html",
    "revision": "ad8bb73f2239bc03a7d49032701f97a1"
  },
  {
    "url": "swift/swiftui/SequenceGesture.html",
    "revision": "b581f2d7a3446652c540ca7d05ac2a04"
  },
  {
    "url": "swift/swiftui/Sheet.html",
    "revision": "32e97ea8ea3f3964faaf82165f51538b"
  },
  {
    "url": "swift/swiftui/SimultaneousGesture.html",
    "revision": "c72107e91c5d173158434fa406a9dcc7"
  },
  {
    "url": "swift/swiftui/Slider.html",
    "revision": "b2b5c63a535a96ac3ab0867e1d5740c4"
  },
  {
    "url": "swift/swiftui/Stacks.html",
    "revision": "1941ab8e37becdaa66a5706aa717f833"
  },
  {
    "url": "swift/swiftui/State.html",
    "revision": "c1e03a59fa3b6f5e79e8356cf8832591"
  },
  {
    "url": "swift/swiftui/Stepper.html",
    "revision": "1c41ff0d9b3f373d2adf769570ce777e"
  },
  {
    "url": "swift/swiftui/Strideable.html",
    "revision": "fe21e8279601b55b6ce878350b28f361"
  },
  {
    "url": "swift/swiftui/TabView.html",
    "revision": "e6d61f128e7bcbd29efa735bb55c6c31"
  },
  {
    "url": "swift/swiftui/TapGesture.html",
    "revision": "ad19e33786a3199fb9f02fba3d45c6fc"
  },
  {
    "url": "swift/swiftui/Text.html",
    "revision": "c708d4e81d0098915d045914f1e812d0"
  },
  {
    "url": "swift/swiftui/TextField.html",
    "revision": "454f5918cdbd81648f91d3b0e1118067"
  },
  {
    "url": "swift/swiftui/Toggle.html",
    "revision": "b4c280559fbb5fbc1b356a2c2aac4060"
  },
  {
    "url": "swift/swiftui/Transaction.html",
    "revision": "63189049041de0b3c2b57d46bc4c46b2"
  },
  {
    "url": "swift/swiftui/UIViewController.html",
    "revision": "f8039e8a06ce31b5c00e7885180566aa"
  },
  {
    "url": "swift/swiftui/ViewModifier.html",
    "revision": "6ae253d4c620b861a16855f173cd4ea1"
  },
  {
    "url": "swift/swiftui/VSplitView.html",
    "revision": "9eaf427739fc540f8951bf12b765061c"
  },
  {
    "url": "swift/swiftui/VStack.html",
    "revision": "b16f9c9a17f3929f4c8d70586b26aed1"
  },
  {
    "url": "swift/swiftui/WebImage.html",
    "revision": "e1aff2d24b3b99e6739292cdae4fdc59"
  },
  {
    "url": "swift/swiftui/WebView.html",
    "revision": "dd951113063f9b7a39af0ca654cc8a00"
  },
  {
    "url": "swift/swiftui/ZStack.html",
    "revision": "b74b5829c6a7580185b693e7fcb15614"
  },
  {
    "url": "swift/tips/index.html",
    "revision": "8201e58ea3d81bb2b94c963ec0980104"
  },
  {
    "url": "swift/ubuntu/demo.html",
    "revision": "a5fb421e0e63cf1874b9c5eb83d22e4b"
  },
  {
    "url": "swift/ubuntu/index.html",
    "revision": "0b93cf2a5298226eb76e9f0e5c3c9b9c"
  },
  {
    "url": "swift/ubuntu/spm.html",
    "revision": "0bfad524a6488cc4b042b57e30de827b"
  },
  {
    "url": "swift/ubuntu/swiftenv.html",
    "revision": "d0ac053005dfc722a36c8834fd80a7e1"
  },
  {
    "url": "swift/ubuntu/vscode.html",
    "revision": "d735d54179624c9514fe37c72a66a1da"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "9e924aaaff59b7a3d5e27671a4df4776"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "253b92bede05510e138676fe5d942d56"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "367c47dcb2b1a82178f2ba91191cddee"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "0408011d29d01dcbf0cc31709a49f0d6"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "691595ae532d27dbb0c642210496faf3"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "c3e7d684720bd57c1e25a88ebea5188d"
  },
  {
    "url": "swift/vapor/t6-say-oldbirds.html",
    "revision": "e7e62c59bb2fcf7a6e1b46febe4a0fa9"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "6b5c114aad08abbde52f6613a1965e50"
  },
  {
    "url": "swift/vapor/u-11-auth.html",
    "revision": "f6ff20a05fc0f4524b5739632c66e40f"
  },
  {
    "url": "swift/vapor/u-12-permission.html",
    "revision": "7b310c1c3264b64cfe83e3e2df114f93"
  },
  {
    "url": "swift/vapor/v-20-read-code.html",
    "revision": "63f944c5808bddf776e647cde2a0ba21"
  },
  {
    "url": "swift/vapor/v-21-io.html",
    "revision": "bee39a1370851cfc17600fc0e02d92af"
  },
  {
    "url": "swift/vapor/v-22-bio2.html",
    "revision": "adbe016a7bee239cda6fca23273340f5"
  },
  {
    "url": "swift/vapor/v-23-swiftnio-do-text.html",
    "revision": "4cc70e77c54e821c6395a4b5b5bd0359"
  },
  {
    "url": "swift/vapor/v-24-swift-zhan-package.html",
    "revision": "f93face0b5474c4ee70f1f46eba4c94e"
  },
  {
    "url": "swift/vapor/v-25-swiftnio-do-serisize.html",
    "revision": "0d7eb0ac3e9445645a2718dc06a626af"
  },
  {
    "url": "swift/vapor/v-26-swfitnio-grpc-1.html",
    "revision": "818065fe65f976623874fec9db21a71c"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/ai/index.html",
    "revision": "7dd7c9a09e2ace1b6b1b84f5215ef923"
  },
  {
    "url": "tag/c/c++/index.html",
    "revision": "bcc4187aa34ac652758cfb608212feeb"
  },
  {
    "url": "tag/cmake/index.html",
    "revision": "4cd5d1045547cc51dddd6962ed7f9976"
  },
  {
    "url": "tag/flask/index.html",
    "revision": "d009480eeb3f402c16bcd0e0e6ab2fbf"
  },
  {
    "url": "tag/flowchart/index.html",
    "revision": "e8356a023595d7aa7423eeb58539405a"
  },
  {
    "url": "tag/flutter/index.html",
    "revision": "b8edde76d11f33b2eae7d29d83633316"
  },
  {
    "url": "tag/flutter/page/2/index.html",
    "revision": "ac4dc3fd60ad86c83bdd54bd86516536"
  },
  {
    "url": "tag/flutter/page/3/index.html",
    "revision": "b41b037842e582406e13516a118ecd91"
  },
  {
    "url": "tag/git/index.html",
    "revision": "696969c24a7797c3846b001b04433b0f"
  },
  {
    "url": "tag/github/index.html",
    "revision": "b51c17780f897c718ed8e0035c178120"
  },
  {
    "url": "tag/haskell/index.html",
    "revision": "a51cb0fddedd24e55b3d3cb5be0894f7"
  },
  {
    "url": "tag/html/index.html",
    "revision": "b8923e29e5b510d41d6b0ce7b6c09b81"
  },
  {
    "url": "tag/index.html",
    "revision": "74718fe993f867b3a78a87d35f7ec3bf"
  },
  {
    "url": "tag/ios/index.html",
    "revision": "9a235a57e2aa51733dec3b4d581593c7"
  },
  {
    "url": "tag/ios/page/2/index.html",
    "revision": "7d905a9291759bad5855d74272d26897"
  },
  {
    "url": "tag/ios/page/3/index.html",
    "revision": "aff4c60ac214ccb4b870c3529c22d177"
  },
  {
    "url": "tag/ios/page/4/index.html",
    "revision": "75b9d71dd94d2b7770e393c1a6c669b1"
  },
  {
    "url": "tag/ios/page/5/index.html",
    "revision": "515ff452381b73fda2fdf113226cd615"
  },
  {
    "url": "tag/ios/page/6/index.html",
    "revision": "865e4ec40da7b8de3fd54e41ad96192a"
  },
  {
    "url": "tag/ios/page/7/index.html",
    "revision": "0d94e0512f26d06cfa45cec3cbbaf0e8"
  },
  {
    "url": "tag/ios/page/8/index.html",
    "revision": "4bf33741fe5da33f5087a1eada3061f6"
  },
  {
    "url": "tag/ios/page/9/index.html",
    "revision": "761fc0f8cc4f27876c1d88cb4dd90f10"
  },
  {
    "url": "tag/json/index.html",
    "revision": "b779b1fc72add7a8d882e906c5a2223d"
  },
  {
    "url": "tag/plantuml/index.html",
    "revision": "ee235de20dcb6faac0a5c541d30abebc"
  },
  {
    "url": "tag/pod/index.html",
    "revision": "8109268b7c54ce46556e518c582e4277"
  },
  {
    "url": "tag/python/index.html",
    "revision": "2d28169587520e5bb148c01dcc7aa15f"
  },
  {
    "url": "tag/read/index.html",
    "revision": "ca7b004deef80f80f30ce538fb0c8ca9"
  },
  {
    "url": "tag/swift/index.html",
    "revision": "603e14b32d687ad70299e43bbd37b106"
  },
  {
    "url": "tag/swift/page/10/index.html",
    "revision": "f583ced6c1e18c4c0d633b72c35eed81"
  },
  {
    "url": "tag/swift/page/11/index.html",
    "revision": "2ca9b0f92c88251a089b887e9d9f7534"
  },
  {
    "url": "tag/swift/page/12/index.html",
    "revision": "f18004f910c8ef13d9197fc539a5e353"
  },
  {
    "url": "tag/swift/page/13/index.html",
    "revision": "01af183c34fa6564c07c1c7c24a12466"
  },
  {
    "url": "tag/swift/page/14/index.html",
    "revision": "0899c073101907a5c0853841c12e4b4b"
  },
  {
    "url": "tag/swift/page/2/index.html",
    "revision": "5460534ac7cc6ecee31e8b0b241235eb"
  },
  {
    "url": "tag/swift/page/3/index.html",
    "revision": "173619b39ba2ef3edeadff4f87829b65"
  },
  {
    "url": "tag/swift/page/4/index.html",
    "revision": "c204f3650dd72629f2d777ba43a028a5"
  },
  {
    "url": "tag/swift/page/5/index.html",
    "revision": "9a78b2cc5f227e0fb674e6fecbf992a5"
  },
  {
    "url": "tag/swift/page/6/index.html",
    "revision": "1065e400e3a1b0846d030c26ee82b515"
  },
  {
    "url": "tag/swift/page/7/index.html",
    "revision": "4752ef0f24e1b25fc5c1fda8ffc9e58b"
  },
  {
    "url": "tag/swift/page/8/index.html",
    "revision": "f47e328e9ffad1bdb2ff47ae3fb05dd4"
  },
  {
    "url": "tag/swift/page/9/index.html",
    "revision": "9a72bf1c9a315760bfc06a0f5fce39bd"
  },
  {
    "url": "tag/swiftenv/index.html",
    "revision": "8b8a2b5329f4e38c5ae61bbbc7120322"
  },
  {
    "url": "tag/swiftnio/index.html",
    "revision": "fbf3ad2cc7756c17b89ffcf75fd321fd"
  },
  {
    "url": "tag/swiftui/index.html",
    "revision": "507cc3adc5481a60c27e90bc98205ff3"
  },
  {
    "url": "tag/swiftui/page/2/index.html",
    "revision": "7dac755aac471603332c777f835b6d8d"
  },
  {
    "url": "tag/swiftui/page/3/index.html",
    "revision": "5a31b601ffdbbe48844ed7fdadbb49dd"
  },
  {
    "url": "tag/swiftui/page/4/index.html",
    "revision": "e31ce2836246f0d52003e35423d8bc60"
  },
  {
    "url": "tag/swiftui/page/5/index.html",
    "revision": "9eddd6ec7d447757473ce0a4fbc93c1d"
  },
  {
    "url": "tag/swiftui/page/6/index.html",
    "revision": "32ad59dfa603844a621eb68f09cd55f9"
  },
  {
    "url": "tag/swiftui/page/7/index.html",
    "revision": "11d22ea5310e962121e1ddef26cbf6ff"
  },
  {
    "url": "tag/tips/index.html",
    "revision": "393b7eb7e19b34aa41010a418033bb6c"
  },
  {
    "url": "tag/tools/index.html",
    "revision": "76a368492201309b9b13868775c9fcc6"
  },
  {
    "url": "tag/tools/page/2/index.html",
    "revision": "0fa4bdd89a45a0ca45fc7aa005cf0cb3"
  },
  {
    "url": "tag/ubuntu/index.html",
    "revision": "2f6bc1bfeec45a5aada3ac56a236b74f"
  },
  {
    "url": "tag/vapor/index.html",
    "revision": "3d912121591c9ef9530b7300663c7462"
  },
  {
    "url": "tag/vapor/page/2/index.html",
    "revision": "5562716bf36a8c6e994ec17011494d1f"
  },
  {
    "url": "tag/vapor/page/3/index.html",
    "revision": "98bf0911eb4443b9d620532353701ee8"
  },
  {
    "url": "tag/vscode/index.html",
    "revision": "b0b5d9b20a0c2dbb0c669e89ea6e607a"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "d2f5bdef7c062b6b275cdd0c0550d820"
  },
  {
    "url": "tag/yaml/index.html",
    "revision": "4ad5c6f4fcc38dbb1b8947f052410b97"
  },
  {
    "url": "tag/书单/index.html",
    "revision": "6e92fdc59586f9ee457a0d305ab2e166"
  },
  {
    "url": "tag/函数式编程/index.html",
    "revision": "d21864eeafbf443071057155176df7d0"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "ac5388fcf3416fc32368e08785bbccc8"
  },
  {
    "url": "tag/基础/page/2/index.html",
    "revision": "e75e414fbd9e705dae1cb4951097fa4f"
  },
  {
    "url": "tag/打包/index.html",
    "revision": "6df11553adf609955192b9b354121555"
  },
  {
    "url": "tag/指针/index.html",
    "revision": "bc13457a73ab8114b32665d4471780c2"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "5f5f63631adffd948b4610bd9eed2239"
  },
  {
    "url": "tag/数据结构与算法/page/2/index.html",
    "revision": "57fdb289326863f7e6ddf14319d317c6"
  },
  {
    "url": "tag/笔记/index.html",
    "revision": "5c0d87bebbb0d1b47973dd9b0e9dbc0a"
  },
  {
    "url": "tag/设计模式/index.html",
    "revision": "eba661710998e6e88d880a3dc885a5fe"
  },
  {
    "url": "tag/设计模式/page/2/index.html",
    "revision": "8443b8f33bf7977be6cc7faec46eee65"
  },
  {
    "url": "tag/设计模式/page/3/index.html",
    "revision": "9544c8e7aa3a9264ca26bfe3feafe6f4"
  },
  {
    "url": "tag/阅读/index.html",
    "revision": "45ddb99ae747f1e82d94f5d846d02e1e"
  },
  {
    "url": "tag/音频/index.html",
    "revision": "6192a18e279bf5303af9e93e830dcf4a"
  },
  {
    "url": "timeline/index.html",
    "revision": "a66d44de1b0d0430741019bb89f689d3"
  },
  {
    "url": "tools/flowchart/index.html",
    "revision": "1ba734b30648c0220d89e9951ac0cc22"
  },
  {
    "url": "tools/git/git-branch-mapping.html",
    "revision": "83744e846c9a22ab5842418b0615a348"
  },
  {
    "url": "tools/git/git-reset.html",
    "revision": "cb8a50e0f5cfaa12cb4b5bc43411de7a"
  },
  {
    "url": "tools/git/index.html",
    "revision": "3d43eb9fbdd509cfc730580a135f8d91"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "394475922b1f767395d348bf24aff8bf"
  },
  {
    "url": "tools/git/t2-git-submodule.html",
    "revision": "53e5d342772fee1249c5cf3f813df911"
  },
  {
    "url": "tools/html/index.html",
    "revision": "a1013b6c7866fbfd426ee528ae272a6c"
  },
  {
    "url": "tools/plantuml/index.html",
    "revision": "73b1e8bb9739dae3a378a90a032cba95"
  },
  {
    "url": "tools/plantuml/t1-sequence-diagram.html",
    "revision": "51c38a4017af3b0770bb589790fcfec3"
  },
  {
    "url": "tools/plantuml/t2-class-diagram.html",
    "revision": "a0a957af8566e1edc9b49a6bcec4ea6f"
  },
  {
    "url": "tools/vuepress/deploy-github-action.html",
    "revision": "b4c92a93c86cd57e2f3882e9175b9905"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "18389cf6ea5e2b2b594f62f0877ce188"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "5f7f64026bc4d4ee0a5a8fbc26764d0a"
  },
  {
    "url": "tools/vuepress/memory-out.html",
    "revision": "09dc109efffcc8ca166c188e42f319dc"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "5abca5534fdb7d08053274b98b3ebf94"
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
