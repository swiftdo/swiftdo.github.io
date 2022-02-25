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
    "revision": "96f8c751e9de35ace30354981b2419f6"
  },
  {
    "url": "about/app/index.html",
    "revision": "3272ddbab85b78e395d3e0ed0546cd22"
  },
  {
    "url": "about/app/t1-protocol.html",
    "revision": "0de60aa1008ab940efca1c1d3e18a14e"
  },
  {
    "url": "about/app/t2-secrect.html",
    "revision": "d9dd9014fd201a0390b2383240663172"
  },
  {
    "url": "about/app/t3-miniapps-sec.html",
    "revision": "7e28c594720ce0c8ac3c315114c847ac"
  },
  {
    "url": "about/index/index.html",
    "revision": "11be6d87a337cba2233b2651ee88a3e0"
  },
  {
    "url": "ai/index.html",
    "revision": "c6e4ebc48640c5b467f8d811526d7486"
  },
  {
    "url": "ai/t1-gzj.html",
    "revision": "0c2b58a0f4bf25e2ca9e8d76018bfee3"
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
    "url": "assets/js/103.d63bbdad.js",
    "revision": "8b44bcf9e2a6b49eaa67f03d2fc5ba12"
  },
  {
    "url": "assets/js/104.6ba5cf6b.js",
    "revision": "b309b59b27969d527b88a6d8b9a1f3bc"
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
    "url": "assets/js/126.ff5f7035.js",
    "revision": "1dc8043be0c650cb19e66606038dd4c2"
  },
  {
    "url": "assets/js/127.defed87d.js",
    "revision": "149e333cbb160364bc372fe8e8b61df9"
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
    "url": "assets/js/133.408cff7d.js",
    "revision": "0962018d5b3c581a7e8ae58e9bccbb18"
  },
  {
    "url": "assets/js/134.593f947f.js",
    "revision": "2e3512116ebddcdb319d54f17e862d9e"
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
    "url": "assets/js/139.19898797.js",
    "revision": "f8ed5208a958929cb6992755d530e5c8"
  },
  {
    "url": "assets/js/14.878f25c8.js",
    "revision": "e1ba8e957942181d372d46dfd1d2be33"
  },
  {
    "url": "assets/js/140.d08640bf.js",
    "revision": "c383d8d763e4808b699a74da78152aae"
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
    "url": "assets/js/148.f385dfeb.js",
    "revision": "e66aa76d06859d3d7d1e5074b71cb7af"
  },
  {
    "url": "assets/js/149.d0175f99.js",
    "revision": "67e0965f4ce2fa30c8642dbab1c06001"
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
    "url": "assets/js/157.735006c1.js",
    "revision": "9c136baf71a79bc403d1a99f56e3c44f"
  },
  {
    "url": "assets/js/158.1194cb75.js",
    "revision": "cf8e59dfa0c705a8329ac46cc168b26c"
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
    "url": "assets/js/163.02f0838b.js",
    "revision": "afb76c81a80167d05d3439b0b1c5e936"
  },
  {
    "url": "assets/js/164.1649ff59.js",
    "revision": "de993705a092a4b96454f7cc2dfe4d38"
  },
  {
    "url": "assets/js/165.9c5e9544.js",
    "revision": "b78f89e8638ef71c5212f68c879b2d01"
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
    "url": "assets/js/169.0feda43f.js",
    "revision": "009780344030bd5d1de4d8da6a43f6f2"
  },
  {
    "url": "assets/js/17.9d94ba62.js",
    "revision": "ed50f2507795e2e956abe7c1c8741e73"
  },
  {
    "url": "assets/js/170.e04fc02c.js",
    "revision": "9713f91d53792351b7f293878525575f"
  },
  {
    "url": "assets/js/171.c4bd64e3.js",
    "revision": "c78edf2fae409a95e863c19a84c02e56"
  },
  {
    "url": "assets/js/172.554ab6a2.js",
    "revision": "24414c156d82e05fbafa19c4b5796715"
  },
  {
    "url": "assets/js/173.1ea20fa0.js",
    "revision": "7fbfbacacf537f4496d34e339e967282"
  },
  {
    "url": "assets/js/174.bf72367d.js",
    "revision": "80f9a0c5350e56cff8144dd7e4d5c8c9"
  },
  {
    "url": "assets/js/175.379e3152.js",
    "revision": "3f7989cf264942115bc3a37cb5132265"
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
    "url": "assets/js/190.798c5d33.js",
    "revision": "8901d7b0094a3bd6b895bb2ee6927aa0"
  },
  {
    "url": "assets/js/191.277b2d85.js",
    "revision": "04ffc446b96ab3894049cd55cff68300"
  },
  {
    "url": "assets/js/192.346fd8d2.js",
    "revision": "638aa0c72f7bd340f85376e0f3021b67"
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
    "url": "assets/js/203.49dc11a8.js",
    "revision": "3cb6dd479a294708c41f36acf3f2fe12"
  },
  {
    "url": "assets/js/204.4611cda1.js",
    "revision": "7530d9d8188643fb26842701c339ef17"
  },
  {
    "url": "assets/js/205.d76f4de4.js",
    "revision": "fdb8088b5eb41e821c912c85956b9dd1"
  },
  {
    "url": "assets/js/206.d7eecaa3.js",
    "revision": "6bfa7b5aef16241060f464c38aaa701e"
  },
  {
    "url": "assets/js/207.68fea7f9.js",
    "revision": "4f734f51c1c1cf9e33226e872c087307"
  },
  {
    "url": "assets/js/208.4416122c.js",
    "revision": "e8ee31273cac5f228f9ce26587393c11"
  },
  {
    "url": "assets/js/209.06ff278d.js",
    "revision": "39c398ee5a82661a781d9b08d1d0ac4e"
  },
  {
    "url": "assets/js/21.2511433a.js",
    "revision": "def162b31ae514fe12552947e29d51ef"
  },
  {
    "url": "assets/js/210.c654fe6c.js",
    "revision": "24e572877ae3b7fec8e112f954e76757"
  },
  {
    "url": "assets/js/211.e2943d78.js",
    "revision": "cbea15820b529a8764057ffe09514aff"
  },
  {
    "url": "assets/js/212.72140c2c.js",
    "revision": "8bf470a4acc84e039990f91775c109af"
  },
  {
    "url": "assets/js/213.1ab55844.js",
    "revision": "35ac2cb27c53990b79762e613cc6954c"
  },
  {
    "url": "assets/js/214.bf542f1c.js",
    "revision": "8764586a8d6b74c061f07a344f18ef01"
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
    "url": "assets/js/217.4ddeb400.js",
    "revision": "35539e834d5c58bfbd3546df1aae80fc"
  },
  {
    "url": "assets/js/218.0a98cc80.js",
    "revision": "4dd498370117be14e659246a27573d23"
  },
  {
    "url": "assets/js/219.4e9f837a.js",
    "revision": "b78596483c3d21db174181dd4fab5b09"
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
    "url": "assets/js/226.58c83a9e.js",
    "revision": "06f4f0e0b2e0da8f9a23932b75536ff1"
  },
  {
    "url": "assets/js/227.0a57361d.js",
    "revision": "5efc16e809cb439dd8ba2470e90486ce"
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
    "url": "assets/js/231.9efb305c.js",
    "revision": "89cbea329013a1703e2fe1e2040cc3dd"
  },
  {
    "url": "assets/js/232.dd667e9b.js",
    "revision": "c3ec2e1b6c05c84dd86d2440fd56214d"
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
    "url": "assets/js/236.4fcce126.js",
    "revision": "a2311ed5750dfe7b9cb44471af790fdb"
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
    "url": "assets/js/87.194a13f4.js",
    "revision": "fa446592a3f624fcd15aa5c4ed5c31e9"
  },
  {
    "url": "assets/js/88.ad10c852.js",
    "revision": "daeba20f16d21aee396be2a6aeb7db30"
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
    "url": "assets/js/app.78445696.js",
    "revision": "9a2dc58fa43b1438e39230574a2ec8ef"
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
    "revision": "9d7b609d5491e40eb9676251889d4a8b"
  },
  {
    "url": "basis/algorithms/t1-buble-sort.html",
    "revision": "1d4097504c60a246553f73c1a365756d"
  },
  {
    "url": "basis/algorithms/t2-selection-sort.html",
    "revision": "cd14cb7127ce79a97e8969941a5c80ab"
  },
  {
    "url": "basis/algorithms/t3-insertion-sort.html",
    "revision": "318081fa6b4b7f693c47c060b3b7c3e6"
  },
  {
    "url": "basis/algorithms/t4-shell-sort.html",
    "revision": "e26cc293b4d270542aa97f624f8c84fb"
  },
  {
    "url": "basis/algorithms/t5-quick-sort.html",
    "revision": "f06ecf5e3798bf153fceee5d14c7c20b"
  },
  {
    "url": "basis/algorithms/t6-heap-sort.html",
    "revision": "10d235e16a0ca70723959614af045e27"
  },
  {
    "url": "basis/algorithms/t7-merge-sort.html",
    "revision": "427e58182f5c190f44cb071881c74242"
  },
  {
    "url": "basis/algorithms/t8-radix-sort.html",
    "revision": "dce8eac584c99a9a45edad9b6c4f07f8"
  },
  {
    "url": "basis/algorithms/t9-count-sort.html",
    "revision": "93f7a07b41f6f329cb0cb382805b66bb"
  },
  {
    "url": "basis/algorithms/u1-bucket-sort.html",
    "revision": "9b1543764cc948e2fc4b92ed3433a871"
  },
  {
    "url": "basis/design-patterns/AdapterPattern.html",
    "revision": "688ca7fdc5ee0e2b85c5ef905f9541d2"
  },
  {
    "url": "basis/design-patterns/BridgePattern.html",
    "revision": "d99c14a03fd63d3d67538de8de21754a"
  },
  {
    "url": "basis/design-patterns/BuilderPattern.html",
    "revision": "371cd25b418bcf2d64ecc41c04a15bfd"
  },
  {
    "url": "basis/design-patterns/ChainOfResponsibilityPattern.html",
    "revision": "c8ad7a6bf38b71976eb97b0cb6c43e7d"
  },
  {
    "url": "basis/design-patterns/ClassReleation.html",
    "revision": "ee9c103ccd566bbc20e5b2f07798eb4e"
  },
  {
    "url": "basis/design-patterns/CommandPattern.html",
    "revision": "21e8f6ce2afe09066d88ca4951e287a4"
  },
  {
    "url": "basis/design-patterns/CompositePattern.html",
    "revision": "fd00e3256823624b21b3664a303c6631"
  },
  {
    "url": "basis/design-patterns/DecoratorPattern.html",
    "revision": "4ff5dea720320e82243367a6137891e4"
  },
  {
    "url": "basis/design-patterns/DesignPrinciples.html",
    "revision": "d16cd11d2cb2a4d2b3e107b468791b3b"
  },
  {
    "url": "basis/design-patterns/FacadePattern.html",
    "revision": "39dc037c8fd6f75adb208c9b39b7853e"
  },
  {
    "url": "basis/design-patterns/FactoryPattern.html",
    "revision": "489daec51796206a37e485dc2861f6eb"
  },
  {
    "url": "basis/design-patterns/FilterCriteriaPattern.html",
    "revision": "57733ed52e97fc70d6793476f934c8cb"
  },
  {
    "url": "basis/design-patterns/FlyweightPattern.html",
    "revision": "2eabbbcf2cad093feeb4dd4d6e14dc4f"
  },
  {
    "url": "basis/design-patterns/index.html",
    "revision": "1bfe36d2c26c1fbb1f392988c26a6163"
  },
  {
    "url": "basis/design-patterns/InterpreterPattern.html",
    "revision": "a6c131d3fef6c8ab8f74ff6696b16d72"
  },
  {
    "url": "basis/design-patterns/IteratorPattern.html",
    "revision": "2332d46cec0aced22c1054ea30bb79bd"
  },
  {
    "url": "basis/design-patterns/MediatorPattern.html",
    "revision": "d4e2927bb87b3d755b9c4bb8fb88419e"
  },
  {
    "url": "basis/design-patterns/MementoPattern.html",
    "revision": "93eae3db5a5d8280d1c644baf8dc4297"
  },
  {
    "url": "basis/design-patterns/NullObjectPattern.html",
    "revision": "23fabcb0056fabd9c3ff4b2a49dc138c"
  },
  {
    "url": "basis/design-patterns/ObserverPattern.html",
    "revision": "96f58530e1504771baa17e4db1a6d488"
  },
  {
    "url": "basis/design-patterns/PrototypePattern.html",
    "revision": "5f6e9d14c5d0289373083e62ef8a3b85"
  },
  {
    "url": "basis/design-patterns/ProxyPattern.html",
    "revision": "9128ee7a4b3be9eb02c831cd49896ac0"
  },
  {
    "url": "basis/design-patterns/SingletonPattern.html",
    "revision": "cce043321080d63bd3b60c7076b10896"
  },
  {
    "url": "basis/design-patterns/StatePattern.html",
    "revision": "939748ea0a9e0cc2d85916dbd2997822"
  },
  {
    "url": "basis/design-patterns/StrategyPattern.html",
    "revision": "59503ba3b1e3cfdd34440b3be9925ecf"
  },
  {
    "url": "basis/design-patterns/TemplatePattern.html",
    "revision": "d068e15319aa74ecaa23782a19939185"
  },
  {
    "url": "basis/design-patterns/VisitorPattern.html",
    "revision": "f9cf1f83e445e0ffe48d340dbed2ba22"
  },
  {
    "url": "basis/index/index.html",
    "revision": "8fbd4f85eb6ba8859b80ffea86a06af8"
  },
  {
    "url": "basis/os/index.html",
    "revision": "e9ef234dff911c50e3897c1a5a4adbc2"
  },
  {
    "url": "book/index.html",
    "revision": "4e729302ea85326ad428cf33a4efc32a"
  },
  {
    "url": "book/t-find-books.html",
    "revision": "ef80ef5f9855e0535c7e691d86a87f20"
  },
  {
    "url": "c/audio/audio-basic.html",
    "revision": "50a4c05d66dc495bb24ea0e44dd18cb5"
  },
  {
    "url": "c/audio/endian.html",
    "revision": "ad837e17d7874ac87737b38894b3525c"
  },
  {
    "url": "c/audio/index.html",
    "revision": "18bd4d7d1960e68a0b1395cc39f57486"
  },
  {
    "url": "c/cmake/01-basic/A-hello-cmake.html",
    "revision": "347e378c3397f7854126baa09e302574"
  },
  {
    "url": "c/cmake/01-basic/B-hello-headers.html",
    "revision": "91c630624fa9d97f8a1c62cf270361c4"
  },
  {
    "url": "c/cmake/01-basic/C-static-library.html",
    "revision": "15a01bf8296b7c6e913850908cd54568"
  },
  {
    "url": "c/cmake/01-basic/D-shared-library.html",
    "revision": "5efc8a22618fca047dbb5130e3041df9"
  },
  {
    "url": "c/cmake/01-basic/E-installing.html",
    "revision": "0a4a594062322725d404a6ef64246961"
  },
  {
    "url": "c/cmake/01-basic/F-build-type.html",
    "revision": "f6f7ade7df8f14dc891d8a691252f403"
  },
  {
    "url": "c/cmake/01-basic/G-compile-flags.html",
    "revision": "c52f162a9bb946075dbfdf970320e678"
  },
  {
    "url": "c/cmake/01-basic/H-third-party-library.html",
    "revision": "e8d5c0af6276f96103f96e0ec6dd0700"
  },
  {
    "url": "c/cmake/01-basic/I-compiling-with-clang.html",
    "revision": "aa8b81aff37d7c01fc43f2f676fb585f"
  },
  {
    "url": "c/cmake/01-basic/index.html",
    "revision": "7698397d65d1f9528fdd0e1960bb6c5d"
  },
  {
    "url": "c/cmake/01-basic/J-building-with-ninja.html",
    "revision": "73e8702bdcf1d0ca89c42766a4f66962"
  },
  {
    "url": "c/cmake/01-basic/K-imported-targets.html",
    "revision": "635d117d8e0a2eb78201041b2fd16e10"
  },
  {
    "url": "c/cmake/01-basic/L-cpp-standard.html",
    "revision": "11f6512a34e0810464aa2b2038a2d3db"
  },
  {
    "url": "c/cmake/index.html",
    "revision": "fdb0a517d76bf91c01a8300bf70733c4"
  },
  {
    "url": "c/program/index.html",
    "revision": "ef2f35afdd0a565e6de2e7e0185e93fd"
  },
  {
    "url": "c/program/pointers.html",
    "revision": "643168851509c0b15f2378769d1b7416"
  },
  {
    "url": "categories/index.html",
    "revision": "cd9cb3c9316e4edf496b1a70d99cee89"
  },
  {
    "url": "figma/index.html",
    "revision": "444348ebe8a6f7c2f1191b7603f5b8ff"
  },
  {
    "url": "flutter/flutter-color.html",
    "revision": "20e4a9d1e86d08c5222b5972656812da"
  },
  {
    "url": "flutter/github-actions-build-flutter-android.html",
    "revision": "ea23a88c01c3153cb5bbf67e031d9c8e"
  },
  {
    "url": "flutter/github-actions-build-flutter-ios.html",
    "revision": "eb75207c7ef901a32fba1a6bcdc46809"
  },
  {
    "url": "flutter/index.html",
    "revision": "6ece30dc501a49d4788458477d95253e"
  },
  {
    "url": "flutter/point.html",
    "revision": "9168bcdc42c46e2dcfa2c2e22b62df0b"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "8fed3dd77d3922a83a545aa02ecec76c"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "19b7c247953d09945e15c6a207e13e45"
  },
  {
    "url": "flutter/t3-messages.html",
    "revision": "b4125240534775cba09cc6086f974dc6"
  },
  {
    "url": "flutter/t3-mixin.html",
    "revision": "2d970cad86780111debc0f416b873631"
  },
  {
    "url": "flutter/t4-lifecycle.html",
    "revision": "095895279f3cb9b167a6cf7bed52715c"
  },
  {
    "url": "flutter/t5-flutter-web-deploy.html",
    "revision": "6d6f8a1a864f62e4090b1ee554535be5"
  },
  {
    "url": "flutter/t6-docker-web-deploy.html",
    "revision": "5c2c004e556db5030543cbf10fc5ca76"
  },
  {
    "url": "flutter/t7-fvm.html",
    "revision": "41766fc9555ef215233dc90952d17034"
  },
  {
    "url": "flutter/t8-const.html",
    "revision": "d6a76d0c435004d0da42e571efd21377"
  },
  {
    "url": "flutter/t9-logs.html",
    "revision": "0c572eaf82470da3e51e09d28079b2fd"
  },
  {
    "url": "flutter/u10-fvm-flutter2.html",
    "revision": "1da00107ff8b57185ddc5a863be534cb"
  },
  {
    "url": "flutter/u11-flutter-render.html",
    "revision": "bd52da0559e0fa7c17c0a2ea756a8154"
  },
  {
    "url": "flutter/u12-flutter-create-w.html",
    "revision": "4c5ce2f225470b76e138437cb317b46e"
  },
  {
    "url": "flutter/u12-flutter-web-01.html",
    "revision": "af592f267806cc93a62625f4fcba10a5"
  },
  {
    "url": "flutter/u12-flutter-web-02.html",
    "revision": "afb82315bf5121d9f572aaf500ccd5b3"
  },
  {
    "url": "flutter/u13-sliverappbar.html",
    "revision": "e1901129cb73d6b588e94fd2f5e64f19"
  },
  {
    "url": "flutter/u14-navbar-color.html",
    "revision": "5e9d31e0be3e78a646fe00ca2625c798"
  },
  {
    "url": "flutter/u15-custom-nabar.html",
    "revision": "903412e5f242f84119cf7d07477e34fd"
  },
  {
    "url": "flutter/u16-shape.html",
    "revision": "371f0de40bb90887d06b668a45619a42"
  },
  {
    "url": "flutter/y1-statubar.html",
    "revision": "d1ebda3efd0d7dd2d6f21fb3c96daba2"
  },
  {
    "url": "haskell/1-install.html",
    "revision": "9cd85fc88ee8de9406e840d623bc0ec8"
  },
  {
    "url": "haskell/2-vscode.html",
    "revision": "dd60b3f001bd1e9fc939d6198ee90b6a"
  },
  {
    "url": "haskell/3-pktool.html",
    "revision": "d988f54fe4d0b54ef1d97871b809b3f7"
  },
  {
    "url": "haskell/4-digui.html",
    "revision": "463bc40f1d4b898a499099be3d2dca0a"
  },
  {
    "url": "haskell/index.html",
    "revision": "0ac381798145dac091807cacb94b14e5"
  },
  {
    "url": "index.html",
    "revision": "85235f9873cfbadd16312a3d0fc5c39a"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "python/1-file-map.html",
    "revision": "585cb41f319b05d1d6d78555b8782e75"
  },
  {
    "url": "python/2-mongo-random.html",
    "revision": "a1015433b1589d75c24acfee89c4ed0b"
  },
  {
    "url": "python/3-page-upload.html",
    "revision": "733e6a3bb664012f7da0a1683269d863"
  },
  {
    "url": "python/4-bt-flask.html",
    "revision": "3fd2b76f92bba9903a49b082f499d0ec"
  },
  {
    "url": "python/index.html",
    "revision": "eca1cd928f45aea171d71703cd12fd98"
  },
  {
    "url": "read/head-first-oop.html",
    "revision": "29d6f9884d6e2d4d10b8caf9d0d7bac7"
  },
  {
    "url": "read/index.html",
    "revision": "97994f99496adb208ebdbd493743c1b5"
  },
  {
    "url": "swift/better/autoclosure.html",
    "revision": "cabe4a233e259279bbd1044614d3f26b"
  },
  {
    "url": "swift/better/available.html",
    "revision": "c3c1386c5c6deb87cb0a577ee35cb082"
  },
  {
    "url": "swift/better/chain.html",
    "revision": "4b8f4f165b0a6ebb135e9db79e3ccf22"
  },
  {
    "url": "swift/better/copy-in-copy-out.html",
    "revision": "342da0d8ac8dffe66f069519740bd751"
  },
  {
    "url": "swift/better/Copy-On-Write.html",
    "revision": "cf42c315a5aaca0ae4d53948f8e0754d"
  },
  {
    "url": "swift/better/di.html",
    "revision": "b56d78667aae73ebae9620b70d4f86ae"
  },
  {
    "url": "swift/better/index.html",
    "revision": "d079907effd645aa09409c2c141c2450"
  },
  {
    "url": "swift/better/last.html",
    "revision": "785c3d050209606cdef276d35d64995d"
  },
  {
    "url": "swift/better/lazy.html",
    "revision": "1209823ffc0918d8862b4aed678746a4"
  },
  {
    "url": "swift/better/protocol.html",
    "revision": "e518057c26bddafc9bbf1482ad5cf219"
  },
  {
    "url": "swift/fp/index.html",
    "revision": "fa45338f225c22d4df7c1cf5fd16703a"
  },
  {
    "url": "swift/fp/t1-fp.html",
    "revision": "346ce093a4227a4c1212d23ca5f38f74"
  },
  {
    "url": "swift/fp/t2-lens.html",
    "revision": "6f3409cf076170f1dcb887e9ae219f28"
  },
  {
    "url": "swift/fp/t3-json1.html",
    "revision": "825b5aa8d02fd4aa169539561ed08299"
  },
  {
    "url": "swift/fp/t3-json2.html",
    "revision": "36b2ff5df1289f34a500fcaa33978847"
  },
  {
    "url": "swift/fp/t3-json3.html",
    "revision": "7398e040f6cbe8aa159aa79b1702f936"
  },
  {
    "url": "swift/fp/t4-length.html",
    "revision": "265ecd9025abd9512cb5377291e38127"
  },
  {
    "url": "swift/ios/index.html",
    "revision": "ce46e455d6c434f565bb6dda4237658e"
  },
  {
    "url": "swift/ios/ios-build-cers.html",
    "revision": "bb99b06bbdada58406f5c2ac846faf7d"
  },
  {
    "url": "swift/ios/pod-wechat.html",
    "revision": "3fecdf41a8e9b685921f89d88d5c5e9c"
  },
  {
    "url": "swift/ios/t1-pod-webp.html",
    "revision": "f1002468bf60e9e299c82af990e8914f"
  },
  {
    "url": "swift/ios/t2-youhua.html",
    "revision": "b8ba7c3d35270c96fa94b16cb0aa2150"
  },
  {
    "url": "swift/swiftui/ActionSheet.html",
    "revision": "f9fcde5cde981d9d85c89d80b30776c9"
  },
  {
    "url": "swift/swiftui/Alert.html",
    "revision": "b7653e3c27947a83d1fd945c478dbef6"
  },
  {
    "url": "swift/swiftui/AnyGesture.html",
    "revision": "ae57258f2a163e5a06bb372494de71c2"
  },
  {
    "url": "swift/swiftui/Bindings.html",
    "revision": "77819f14340866dca8d052d36e13b2d1"
  },
  {
    "url": "swift/swiftui/Button.html",
    "revision": "d41076994488c21a1ff8b70419fbf4f5"
  },
  {
    "url": "swift/swiftui/DatePicker.html",
    "revision": "cbefb72e77e625090f9e04435effdc9f"
  },
  {
    "url": "swift/swiftui/DragGesture.html",
    "revision": "93105073c002fa9da558c7d482e15004"
  },
  {
    "url": "swift/swiftui/DynamicNavigationDestinationLink.html",
    "revision": "832c1c4c45fa812e4f3dd22f3298f48c"
  },
  {
    "url": "swift/swiftui/EditButton.html",
    "revision": "07f01d4bfdd847cd1622b1b2c653ea89"
  },
  {
    "url": "swift/swiftui/Environment.html",
    "revision": "e193d10415bcc6713ffdc716572c2920"
  },
  {
    "url": "swift/swiftui/EnvironmentObject.html",
    "revision": "9db693ee8f6ee0ecf3b488e8bddfec4f"
  },
  {
    "url": "swift/swiftui/EnvironmentValues.html",
    "revision": "2df349a4161bc9b8d8fdc23251270aba"
  },
  {
    "url": "swift/swiftui/ExclusiveGesture.html",
    "revision": "6b0135171c3b406f1729aebc0e1c1d7d"
  },
  {
    "url": "swift/swiftui/ForEach.html",
    "revision": "c141185e57442ef85e9660dc66387e53"
  },
  {
    "url": "swift/swiftui/Form.html",
    "revision": "5929db89bd4ba39a26d111a1edbe71e7"
  },
  {
    "url": "swift/swiftui/GeometryReader.html",
    "revision": "f7755e3e7174689250674927993c6437"
  },
  {
    "url": "swift/swiftui/Group.html",
    "revision": "62edbe5765c8505462915769799037c9"
  },
  {
    "url": "swift/swiftui/GroupBox.html",
    "revision": "953b0f9d8f8bdc4205d9465732ac5e96"
  },
  {
    "url": "swift/swiftui/HSplitView.html",
    "revision": "b1bc3a59596eee46ad8925316df67478"
  },
  {
    "url": "swift/swiftui/HStack.html",
    "revision": "9833040b3b83710694c9f604eac8a2c0"
  },
  {
    "url": "swift/swiftui/Image.html",
    "revision": "3d10ecc2171f98d89baf6b8e2641b6a0"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "8ad485e0d6747adcc679ca01ff7276da"
  },
  {
    "url": "swift/swiftui/ItemBasedPopUpButton.html",
    "revision": "50b176689223a8bba486e9c6064339d7"
  },
  {
    "url": "swift/swiftui/List.html",
    "revision": "7f11d75bda630e2779addf50414664e0"
  },
  {
    "url": "swift/swiftui/LocalizedStringKey.html",
    "revision": "9365b541dfdc8e429816273e1b29662f"
  },
  {
    "url": "swift/swiftui/LongPressGesture.html",
    "revision": "5df971113dfd82372fff8d0d47658ee1"
  },
  {
    "url": "swift/swiftui/MagnificationGesture.html",
    "revision": "953a63a75d03c9f80d86a356453408d4"
  },
  {
    "url": "swift/swiftui/Modal.html",
    "revision": "42a690657df1740d067207e227f5cc79"
  },
  {
    "url": "swift/swiftui/NavigationButton.html",
    "revision": "9a4eeb28513a6ab0e6634e2cbd1b148c"
  },
  {
    "url": "swift/swiftui/NavigationView.html",
    "revision": "45140e109976c3dbc98530d4a3404f82"
  },
  {
    "url": "swift/swiftui/ObjectBinding.html",
    "revision": "e6d2625bd70c848486a0bed0cf993119"
  },
  {
    "url": "swift/swiftui/PasteButton.html",
    "revision": "db54a0c087bf23f3e36d22445748219c"
  },
  {
    "url": "swift/swiftui/Picker.html",
    "revision": "0c5126a3e6babcf56fc3897438de6788"
  },
  {
    "url": "swift/swiftui/Popover.html",
    "revision": "152ed8c396cd7d5abb0dc7c1dd940e96"
  },
  {
    "url": "swift/swiftui/PreferenceKey.html",
    "revision": "bcc7864f59733da66917196ee4a10d3e"
  },
  {
    "url": "swift/swiftui/PresentationButton.html",
    "revision": "779d1c5c508fc3a5c3401c7586e7e0fa"
  },
  {
    "url": "swift/swiftui/Principle01.html",
    "revision": "8671acde293b708b5b8ea055fb41b0cf"
  },
  {
    "url": "swift/swiftui/Principle02.html",
    "revision": "4107f27db67fbc7304b5dd635135321d"
  },
  {
    "url": "swift/swiftui/Principle03.html",
    "revision": "104fa173f91f47526c2c5333c81e12fd"
  },
  {
    "url": "swift/swiftui/Principle04.html",
    "revision": "07232f2dabebd7fc78fda420e8b76335"
  },
  {
    "url": "swift/swiftui/Principle05.html",
    "revision": "a03130cf9efd589b48862dc43f6518af"
  },
  {
    "url": "swift/swiftui/Principle06.html",
    "revision": "13a6838e388ca26dc118a2eaea3cfe34"
  },
  {
    "url": "swift/swiftui/PullDownButton.html",
    "revision": "db24a0741cf511f6fd3da865fdb0e817"
  },
  {
    "url": "swift/swiftui/RotationGesture.html",
    "revision": "213bb69a9f72379b11021452c3e0a647"
  },
  {
    "url": "swift/swiftui/ScrollView.html",
    "revision": "d02fac320e6ad431eb3f2fbf3a2f4c25"
  },
  {
    "url": "swift/swiftui/Section.html",
    "revision": "1af81dc8e73519379f71cbf48bd39f18"
  },
  {
    "url": "swift/swiftui/SecureField.html",
    "revision": "29198412617440ba238c2df5e5e7d662"
  },
  {
    "url": "swift/swiftui/SegmentedControl.html",
    "revision": "b3ac44732208d861f4cf8971c2ad1188"
  },
  {
    "url": "swift/swiftui/SequenceGesture.html",
    "revision": "5ab624e93d3d32dbbcb109a4e0f48b8f"
  },
  {
    "url": "swift/swiftui/Sheet.html",
    "revision": "77ac969302e29c4b463c0ee6ed6c37bb"
  },
  {
    "url": "swift/swiftui/SimultaneousGesture.html",
    "revision": "a7bf8fe9b2357a66941ce00be966132f"
  },
  {
    "url": "swift/swiftui/Slider.html",
    "revision": "4d73254d5681a46b7cbaa8915094db8c"
  },
  {
    "url": "swift/swiftui/Stacks.html",
    "revision": "8ace36e2b0f74db2ca572b968f44d53d"
  },
  {
    "url": "swift/swiftui/State.html",
    "revision": "b14b24f108b5ed504ad4bc7639324a38"
  },
  {
    "url": "swift/swiftui/Stepper.html",
    "revision": "ea7ea2d3f74f9ebf3c5a423db81b89c9"
  },
  {
    "url": "swift/swiftui/Strideable.html",
    "revision": "0a08177c4c819c904a29e82961e4adca"
  },
  {
    "url": "swift/swiftui/TabView.html",
    "revision": "6fb5af5e9785e7aeeb31befc23a7c9ca"
  },
  {
    "url": "swift/swiftui/TapGesture.html",
    "revision": "b0ca6ae596a6bedfd5c8945d335d39e2"
  },
  {
    "url": "swift/swiftui/Text.html",
    "revision": "a2588e158eefcf823b88f55ebd859bc6"
  },
  {
    "url": "swift/swiftui/TextField.html",
    "revision": "c22409976b9d33484b25bf662a363af7"
  },
  {
    "url": "swift/swiftui/Toggle.html",
    "revision": "237978673f752187fb39bafa20c3a76f"
  },
  {
    "url": "swift/swiftui/Transaction.html",
    "revision": "84e7559850333c888eccf99c348d3504"
  },
  {
    "url": "swift/swiftui/UIViewController.html",
    "revision": "6d007909ce69fe3b403cfa73bf74f6ee"
  },
  {
    "url": "swift/swiftui/ViewModifier.html",
    "revision": "cce12a500f8b1af7d9a7438711cacc68"
  },
  {
    "url": "swift/swiftui/VSplitView.html",
    "revision": "f86928dab445d2b68869a18c61145f63"
  },
  {
    "url": "swift/swiftui/VStack.html",
    "revision": "ab75e05b70baa584b2cd21e56f59674c"
  },
  {
    "url": "swift/swiftui/WebImage.html",
    "revision": "1bb27ac706a63c315f3dd8c23ca915f6"
  },
  {
    "url": "swift/swiftui/WebView.html",
    "revision": "76eec12904ae78a95e8c240bae2b3402"
  },
  {
    "url": "swift/swiftui/ZStack.html",
    "revision": "349d1822bf9377c6c2397674e979dbdc"
  },
  {
    "url": "swift/tips/index.html",
    "revision": "c5cd770a00dbf9125411dd2bb1af80f1"
  },
  {
    "url": "swift/ubuntu/demo.html",
    "revision": "f3911216d71e66287f57633d779647d6"
  },
  {
    "url": "swift/ubuntu/index.html",
    "revision": "378e394bbbf557d33e3ca6b43e91f3a2"
  },
  {
    "url": "swift/ubuntu/spm.html",
    "revision": "5d3990e560f2101f54aacc96dce68c81"
  },
  {
    "url": "swift/ubuntu/swiftenv.html",
    "revision": "b0812c10c2125c9459dae80e731f0a85"
  },
  {
    "url": "swift/ubuntu/vscode.html",
    "revision": "35a159a1491888f8058623220c9bbbf4"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "4de5f91f1d56b416e7823f86fb99fe45"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "dbbf087c60897ee7706dc18771fc26c6"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "31af49ffe575b98b28ad4593158d540c"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "93698938967806fc2724d75c42637483"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "ae32f39fdb929174ae215b02540c473d"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "6f93c5cc5202b370d5a122c8e32f2646"
  },
  {
    "url": "swift/vapor/t6-say-oldbirds.html",
    "revision": "6c4282aa333a1ed15ab60515cb04eca4"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "02c7c65ce29dce66335f9818f2e251ac"
  },
  {
    "url": "swift/vapor/u-11-auth.html",
    "revision": "899dd7280764f961de1a65aac9d24111"
  },
  {
    "url": "swift/vapor/u-12-permission.html",
    "revision": "c4bc439d3913641e7424f99be3281496"
  },
  {
    "url": "swift/vapor/v-20-read-code.html",
    "revision": "1f89ec1738cb941aa426c09153f5a7f4"
  },
  {
    "url": "swift/vapor/v-21-io.html",
    "revision": "733cb9b54a4da9ba7555009fce0e49d0"
  },
  {
    "url": "swift/vapor/v-22-bio2.html",
    "revision": "be3bf94ef828faff0df05d13be0ec0aa"
  },
  {
    "url": "swift/vapor/v-23-swiftnio-do-text.html",
    "revision": "27f2036ee1bce11e479982148fd41e9d"
  },
  {
    "url": "swift/vapor/v-24-swift-zhan-package.html",
    "revision": "12685362f23823fe2bf16c5912fbcba6"
  },
  {
    "url": "swift/vapor/v-25-swiftnio-do-serisize.html",
    "revision": "29cf409df07be190a0556402b94f13e3"
  },
  {
    "url": "swift/vapor/v-26-swfitnio-grpc-1.html",
    "revision": "187d462c5951f2a26bd39e895d7cff79"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/ai/index.html",
    "revision": "4cf09801f36dfc20098bb80a265f0e63"
  },
  {
    "url": "tag/c/c++/index.html",
    "revision": "85261b2e79a72725ea75158ee3e1163b"
  },
  {
    "url": "tag/cmake/index.html",
    "revision": "212203978a9e340834786bbec4428434"
  },
  {
    "url": "tag/flask/index.html",
    "revision": "a5bd9d84e76fa8322cb17ed0b4f82bc8"
  },
  {
    "url": "tag/flowchart/index.html",
    "revision": "c1f8aefa14666a15bf6a139389cd7540"
  },
  {
    "url": "tag/flutter/index.html",
    "revision": "cf314c8a508b1f380f8884492629d68f"
  },
  {
    "url": "tag/flutter/page/2/index.html",
    "revision": "0654fe3626a35535d47e902ddeb48653"
  },
  {
    "url": "tag/flutter/page/3/index.html",
    "revision": "8d8f87b5e3ce7a309776b3db0fd1bc85"
  },
  {
    "url": "tag/git/index.html",
    "revision": "c18d58a1356d566216ee1e507eb620eb"
  },
  {
    "url": "tag/github/index.html",
    "revision": "08a8e36942d66324b1477dbc19a2c266"
  },
  {
    "url": "tag/haskell/index.html",
    "revision": "b1fbde2e075071fd2f7e024e19a14a9b"
  },
  {
    "url": "tag/html/index.html",
    "revision": "d91f3c88b151618800d3e17d5250bb16"
  },
  {
    "url": "tag/index.html",
    "revision": "61db3e3a6fa15d5d5530f50af061c8a3"
  },
  {
    "url": "tag/ios/index.html",
    "revision": "65e424edca3eaf815ebf65620385d82c"
  },
  {
    "url": "tag/ios/page/2/index.html",
    "revision": "3633581a87c50d268a65f70860b56db9"
  },
  {
    "url": "tag/ios/page/3/index.html",
    "revision": "f4a25cf602b6e9aa342c58a9d8d0e0b0"
  },
  {
    "url": "tag/ios/page/4/index.html",
    "revision": "4f9e2360c92041adc62be26d7b6e9acc"
  },
  {
    "url": "tag/ios/page/5/index.html",
    "revision": "25e5c7435c440c9184e632cb6ca7032b"
  },
  {
    "url": "tag/ios/page/6/index.html",
    "revision": "4d7d677d0f2ca825d74e907f1c35514c"
  },
  {
    "url": "tag/ios/page/7/index.html",
    "revision": "a70dfadd2938b6e8a7a929f8c6fdf11c"
  },
  {
    "url": "tag/ios/page/8/index.html",
    "revision": "49a1a5176b803d66eb09681d2659fc69"
  },
  {
    "url": "tag/ios/page/9/index.html",
    "revision": "67c593d2d708d38778f5e3267ffa4cc9"
  },
  {
    "url": "tag/json/index.html",
    "revision": "22e3b7fa4d24db73431a04f36049251b"
  },
  {
    "url": "tag/plantuml/index.html",
    "revision": "7274025200f23502d277473da3d915bd"
  },
  {
    "url": "tag/pod/index.html",
    "revision": "739a5dd287c8a040dab9e95e33d2e266"
  },
  {
    "url": "tag/python/index.html",
    "revision": "75ad68f43d626875b05eef59d4953245"
  },
  {
    "url": "tag/read/index.html",
    "revision": "1be92c2c1fe03d1a7acb53465d3efb99"
  },
  {
    "url": "tag/swift/index.html",
    "revision": "0af36122243ac6be689ab8a4933b9820"
  },
  {
    "url": "tag/swift/page/10/index.html",
    "revision": "5ecc84f1cd475cace1263ff35b82be41"
  },
  {
    "url": "tag/swift/page/11/index.html",
    "revision": "2c7a1283523f476371bcf8a7d077b635"
  },
  {
    "url": "tag/swift/page/12/index.html",
    "revision": "08d154f34104f01c7e410dc6e0edbd29"
  },
  {
    "url": "tag/swift/page/13/index.html",
    "revision": "d1a57c0c921686388fa0b8a37ae315f8"
  },
  {
    "url": "tag/swift/page/14/index.html",
    "revision": "1a3fbb28713337b0ba99f6f0e85f6834"
  },
  {
    "url": "tag/swift/page/2/index.html",
    "revision": "94a67f5c3da8704a62dba30bb2c0337a"
  },
  {
    "url": "tag/swift/page/3/index.html",
    "revision": "01bc265c0bd2216c2408d303596a7959"
  },
  {
    "url": "tag/swift/page/4/index.html",
    "revision": "73211eaa8e10b85799357970fbc860e7"
  },
  {
    "url": "tag/swift/page/5/index.html",
    "revision": "8b6164d4172094dbfdc52b6d90dad7c9"
  },
  {
    "url": "tag/swift/page/6/index.html",
    "revision": "c87010e52ae21353c571a67deae9b448"
  },
  {
    "url": "tag/swift/page/7/index.html",
    "revision": "8188b59e501e26b4b452634c424398aa"
  },
  {
    "url": "tag/swift/page/8/index.html",
    "revision": "51a20a10abff1bbb6ec967bd7925602f"
  },
  {
    "url": "tag/swift/page/9/index.html",
    "revision": "b8581739f5bb4965f496b59b09510ef1"
  },
  {
    "url": "tag/swiftenv/index.html",
    "revision": "037d73a2e7f8236482443d0e440b3513"
  },
  {
    "url": "tag/swiftnio/index.html",
    "revision": "dd58a435379e349f6c183450f41aea11"
  },
  {
    "url": "tag/swiftui/index.html",
    "revision": "35c1549c41b5235d423629c726ac8bea"
  },
  {
    "url": "tag/swiftui/page/2/index.html",
    "revision": "c889b44291e40c72b26e25ee0426c617"
  },
  {
    "url": "tag/swiftui/page/3/index.html",
    "revision": "6e5273ebce88b299dbf2349c5011b7be"
  },
  {
    "url": "tag/swiftui/page/4/index.html",
    "revision": "b96ad6cdd6a8c53523aaf3ab310f2318"
  },
  {
    "url": "tag/swiftui/page/5/index.html",
    "revision": "493e1c09dfa692835954aad190c86d0d"
  },
  {
    "url": "tag/swiftui/page/6/index.html",
    "revision": "640244e2531804b9a5bc112b6807c43e"
  },
  {
    "url": "tag/swiftui/page/7/index.html",
    "revision": "011f1c33b8e9e39092d8ec94b0aaf68b"
  },
  {
    "url": "tag/tips/index.html",
    "revision": "89f76880d7cdb118384780eecb53f8f7"
  },
  {
    "url": "tag/tools/index.html",
    "revision": "7da9d9a0afff028c3ce38d09776b597f"
  },
  {
    "url": "tag/tools/page/2/index.html",
    "revision": "53093b342cd126d7dd6004f99feb5b24"
  },
  {
    "url": "tag/ubuntu/index.html",
    "revision": "3a9c7d5b20abbfb544c93d71392d6c90"
  },
  {
    "url": "tag/vapor/index.html",
    "revision": "d437a23be4b9e6eb90208176b49d1a43"
  },
  {
    "url": "tag/vapor/page/2/index.html",
    "revision": "44db0aef2a24940893ac53c8c51907a1"
  },
  {
    "url": "tag/vapor/page/3/index.html",
    "revision": "f55bd82597d95e05a419ad9ca1419624"
  },
  {
    "url": "tag/vscode/index.html",
    "revision": "fc2fc4215630bf9df7a589743d6ac763"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "f65d503ba6a4449226ba724a51b69a1f"
  },
  {
    "url": "tag/yaml/index.html",
    "revision": "883d96ecdd16d1c39f61aacc8e9b5662"
  },
  {
    "url": "tag/书单/index.html",
    "revision": "b3cf95177f12855171d3a052f1193844"
  },
  {
    "url": "tag/函数式编程/index.html",
    "revision": "5c267729f63255f8a289e78d29e1f532"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "82d2e9dd5eaa81780d34b761afd2a105"
  },
  {
    "url": "tag/基础/page/2/index.html",
    "revision": "96b5578609013b74f6745584b36c3ebb"
  },
  {
    "url": "tag/打包/index.html",
    "revision": "8c26d886c4461aec053bfe7b180f3e62"
  },
  {
    "url": "tag/指针/index.html",
    "revision": "f861494314618a301b49770d495e636b"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "d8791f689ae63a2a4595af626e8a9a5e"
  },
  {
    "url": "tag/数据结构与算法/page/2/index.html",
    "revision": "1ec9120499a75ca0fbb84e73a6c77a46"
  },
  {
    "url": "tag/笔记/index.html",
    "revision": "ad65b298d965ef27dec3be97c0a29835"
  },
  {
    "url": "tag/设计模式/index.html",
    "revision": "b984baa7d75229e286d5c024b1cf0da1"
  },
  {
    "url": "tag/设计模式/page/2/index.html",
    "revision": "b83c2bc5bd6230b55b54c8d79884c4af"
  },
  {
    "url": "tag/设计模式/page/3/index.html",
    "revision": "68f864f7c2f55976fe36725da57375b6"
  },
  {
    "url": "tag/阅读/index.html",
    "revision": "169cead8a45f59ddb0bef56216a5cea0"
  },
  {
    "url": "tag/音频/index.html",
    "revision": "00468e6d6b76be593df9e7aca7456813"
  },
  {
    "url": "timeline/index.html",
    "revision": "2ea475f310b7a3f0f1578a2639629dab"
  },
  {
    "url": "tools/flowchart/index.html",
    "revision": "75ff0a2e3890b2fd8963f814e2b67414"
  },
  {
    "url": "tools/git/git-branch-mapping.html",
    "revision": "f76825309fb0bc98c56982bf6382cf58"
  },
  {
    "url": "tools/git/git-reset.html",
    "revision": "a057ce22972552c7f4f6e29343bfc011"
  },
  {
    "url": "tools/git/index.html",
    "revision": "434111ae687e037f4ceb21e3153ad22a"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "97c18f446fceaab427b6bff7a6832f2b"
  },
  {
    "url": "tools/git/t2-git-submodule.html",
    "revision": "712d1ac17678d44ea100f00bbe4eb1a9"
  },
  {
    "url": "tools/html/index.html",
    "revision": "18a225c4f64cec236e0ecf1a22e17c1f"
  },
  {
    "url": "tools/plantuml/index.html",
    "revision": "f0ae01ed059d5f508be23af38f66bd6f"
  },
  {
    "url": "tools/plantuml/t1-sequence-diagram.html",
    "revision": "445ad2d07423b5c1803e1e8c576b99fb"
  },
  {
    "url": "tools/plantuml/t2-class-diagram.html",
    "revision": "8826d0a4357db0209406852dd70a5030"
  },
  {
    "url": "tools/vuepress/deploy-github-action.html",
    "revision": "9fdeb668f71152ae2d4e7213b8ee5cd2"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "807002005aca468011c97459705e51a3"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "6a049707aa83fc71c38418b3aac8af1c"
  },
  {
    "url": "tools/vuepress/memory-out.html",
    "revision": "3f54d40cfbd70a83cbb4f9617fa8e909"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "4089183ab04823332c9401c6523b71c4"
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
