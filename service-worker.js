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
    "revision": "56c85ab01a3db3276c325261f046c215"
  },
  {
    "url": "about/app/index.html",
    "revision": "db68b42118514a3ba8a25ce4c067f463"
  },
  {
    "url": "about/app/t1-protocol.html",
    "revision": "af25419fddd7ad223194174be6d44710"
  },
  {
    "url": "about/app/t2-secrect.html",
    "revision": "dc2a4399a22ca806e9c918ee22bb525d"
  },
  {
    "url": "about/app/t3-miniapps-sec.html",
    "revision": "283db544c6c8f457419c59b764fa2900"
  },
  {
    "url": "about/index/index.html",
    "revision": "47357cdf690eb619f9e4bfbcc9c688d9"
  },
  {
    "url": "ai/index.html",
    "revision": "0fa73728c290aee16dc6e13abb192638"
  },
  {
    "url": "ai/t1-gzj.html",
    "revision": "84cc159a25c6de7f5647b49157c4718c"
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
    "url": "assets/js/102.89d57be5.js",
    "revision": "64d04c0143ffcfcb976e098ad7daf016"
  },
  {
    "url": "assets/js/103.b56f7d48.js",
    "revision": "185e51240cb4d01413c9108d62f059f5"
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
    "url": "assets/js/117.b6f08ca3.js",
    "revision": "9a25e0d73baf40c61f6e8d605bf1294d"
  },
  {
    "url": "assets/js/118.55d7e210.js",
    "revision": "de6d47863db98c25c7495dc5db0ceed6"
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
    "url": "assets/js/123.dab16822.js",
    "revision": "b7981d2a6be60e15b9d7ff0c2f8ceb76"
  },
  {
    "url": "assets/js/124.710e0638.js",
    "revision": "cf92d3b60f6cd467c419f733e1523f9b"
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
    "url": "assets/js/143.2ec8b6b2.js",
    "revision": "927ad52bbe3182a8f2cf30ac800e550a"
  },
  {
    "url": "assets/js/144.2fb94ed9.js",
    "revision": "2b228445dff6a829c9b108dee54f9795"
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
    "url": "assets/js/168.94eb421c.js",
    "revision": "7ee9b3c543323925decf2db807e9566f"
  },
  {
    "url": "assets/js/169.a0d8a2ae.js",
    "revision": "85ba6ab1a13f9db87c30f841f6927080"
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
    "url": "assets/js/179.c2bca3d5.js",
    "revision": "510c57edcf8619b9f263f75aed64e9ba"
  },
  {
    "url": "assets/js/18.06797c0d.js",
    "revision": "ac89ef8caeec7579ee2be0dc3c949615"
  },
  {
    "url": "assets/js/180.545930c5.js",
    "revision": "141835892c36ee9819bc81eae1fbebe3"
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
    "url": "assets/js/189.b7491172.js",
    "revision": "e1e6eea4676ac5e1cc7b2176875f6a6e"
  },
  {
    "url": "assets/js/19.7a13361c.js",
    "revision": "76fb08c8f25f12ca529404ff657ccc78"
  },
  {
    "url": "assets/js/190.680f6ab4.js",
    "revision": "b4146242b88cfe563b12229de3fd0426"
  },
  {
    "url": "assets/js/191.847660d4.js",
    "revision": "4635bdaea41264f257599fd74fdff165"
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
    "url": "assets/js/203.ffd4712e.js",
    "revision": "96fa920b55ed608630357c182bc0852f"
  },
  {
    "url": "assets/js/204.f73f39c2.js",
    "revision": "e7a065039d5f869571c5191f55abebec"
  },
  {
    "url": "assets/js/205.b9d3c0f9.js",
    "revision": "4e2ca4c253b009de994c8bd02bc6a1a5"
  },
  {
    "url": "assets/js/206.850c53cc.js",
    "revision": "e258dbe316f8afef902f942c368367f1"
  },
  {
    "url": "assets/js/207.3be0b013.js",
    "revision": "c8630f76538194c29317bb1fac0bdcee"
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
    "url": "assets/js/210.46a39775.js",
    "revision": "8f12575e5b62491bc980a74d568105be"
  },
  {
    "url": "assets/js/211.c48371db.js",
    "revision": "c6f1e71f9435398c01f35284ce50e6a4"
  },
  {
    "url": "assets/js/212.60fc7402.js",
    "revision": "246b9565d24a8228ddd1e73c2f7aba47"
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
    "url": "assets/js/236.6ff06916.js",
    "revision": "3065aaf4f91383d98043199be99f86de"
  },
  {
    "url": "assets/js/237.9841b9ea.js",
    "revision": "16984b998868cf4ca31fa69921dfbe69"
  },
  {
    "url": "assets/js/238.76b355d4.js",
    "revision": "8bac7a998440dcfa1fc86318726f4a06"
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
    "url": "assets/js/242.c2e84d9f.js",
    "revision": "389c3d698aa1ca64e5b01434fa4c30ed"
  },
  {
    "url": "assets/js/243.eef6586a.js",
    "revision": "310c4267fe0047b96b9511e7cce4d128"
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
    "url": "assets/js/53.a14deeda.js",
    "revision": "728c11d007ed258a978c1b0df966c4d6"
  },
  {
    "url": "assets/js/54.f16fdb88.js",
    "revision": "dd88bb0fbc679f9b598c729c60c2561b"
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
    "url": "assets/js/64.72c8c9a5.js",
    "revision": "63b73d9548c06da08b1586a9630ea144"
  },
  {
    "url": "assets/js/65.98aa9044.js",
    "revision": "c3d1de321f62f090ee8540df51213c6a"
  },
  {
    "url": "assets/js/66.8363892e.js",
    "revision": "4b837a9f024d6d4507e5e02cf7e4a227"
  },
  {
    "url": "assets/js/67.d2f55ac3.js",
    "revision": "6b03ce4540a558937e2e32536942014a"
  },
  {
    "url": "assets/js/68.5a7e2a4a.js",
    "revision": "a5d4b35e0b84d9170a531d9216115e10"
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
    "url": "assets/js/78.a0d21839.js",
    "revision": "f78e0dcae984454ab5cbd18952fded20"
  },
  {
    "url": "assets/js/79.f2763289.js",
    "revision": "2e68f903fc39fabca9222ee8c257d277"
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
    "url": "assets/js/91.96486601.js",
    "revision": "21e6a222c43035948d6643a706a48161"
  },
  {
    "url": "assets/js/92.4b8edbe1.js",
    "revision": "2e06be8e57f43773fe92c263bbac7311"
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
    "url": "assets/js/app.331afc10.js",
    "revision": "ffb5f95987c125b05e1e0643e3caa2cb"
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
    "revision": "80ac430cd7fe06ea67db73e093077f26"
  },
  {
    "url": "basis/algorithms/t1-buble-sort.html",
    "revision": "674fecb42ca41e163b13ed12810fe165"
  },
  {
    "url": "basis/algorithms/t2-selection-sort.html",
    "revision": "93d53b3bbc7127dc68106a8f7d908c25"
  },
  {
    "url": "basis/algorithms/t3-insertion-sort.html",
    "revision": "1fbec35dbfe7d310020d34df87e0c436"
  },
  {
    "url": "basis/algorithms/t4-shell-sort.html",
    "revision": "3e85d70565394897aa900542a547bd0f"
  },
  {
    "url": "basis/algorithms/t5-quick-sort.html",
    "revision": "3094f9382604be28d07478c100b13182"
  },
  {
    "url": "basis/algorithms/t6-heap-sort.html",
    "revision": "50d61ce31794db970b3d7cd138413617"
  },
  {
    "url": "basis/algorithms/t7-merge-sort.html",
    "revision": "b9a66b67eb5504af9791888730b9438b"
  },
  {
    "url": "basis/algorithms/t8-radix-sort.html",
    "revision": "6952b963638417971f3a8a6291f67859"
  },
  {
    "url": "basis/algorithms/t9-count-sort.html",
    "revision": "52218390d50f5b6cb93e1d22188867a9"
  },
  {
    "url": "basis/algorithms/u1-bucket-sort.html",
    "revision": "3f296cbe8284afd09d42a925a07d66c8"
  },
  {
    "url": "basis/design-patterns/AdapterPattern.html",
    "revision": "87c4fae5769bfe85bcc9f1a6c759cdb0"
  },
  {
    "url": "basis/design-patterns/BridgePattern.html",
    "revision": "26c74dd2f8ed18186724b2f64ba286f7"
  },
  {
    "url": "basis/design-patterns/BuilderPattern.html",
    "revision": "07c7415b3e4426ed4a0a2876de2c654f"
  },
  {
    "url": "basis/design-patterns/ChainOfResponsibilityPattern.html",
    "revision": "36ed465727e73661d3d5698641f5df61"
  },
  {
    "url": "basis/design-patterns/ClassReleation.html",
    "revision": "3b4c8f54b1be6d6c18b4681804ab4314"
  },
  {
    "url": "basis/design-patterns/CommandPattern.html",
    "revision": "e9af022176df4d56acd74d2785d0fcc6"
  },
  {
    "url": "basis/design-patterns/CompositePattern.html",
    "revision": "539fb860c37e916b767c395bf0d2458f"
  },
  {
    "url": "basis/design-patterns/DecoratorPattern.html",
    "revision": "cf5fea390b4ce0883a92591a94d55651"
  },
  {
    "url": "basis/design-patterns/DesignPrinciples.html",
    "revision": "0d665b267cad028a81e38ec908e7f56f"
  },
  {
    "url": "basis/design-patterns/FacadePattern.html",
    "revision": "11d880dc1fbc6a54b2a038adb26a35cf"
  },
  {
    "url": "basis/design-patterns/FactoryPattern.html",
    "revision": "532037283c132feb559428b68b88d55a"
  },
  {
    "url": "basis/design-patterns/FilterCriteriaPattern.html",
    "revision": "2f5e954ce46c0552022957b90ff70550"
  },
  {
    "url": "basis/design-patterns/FlyweightPattern.html",
    "revision": "7e88b2f5e5c92e213c64197a7b91a39f"
  },
  {
    "url": "basis/design-patterns/index.html",
    "revision": "71e29107c6b6ee45c0d947c783c9552f"
  },
  {
    "url": "basis/design-patterns/InterpreterPattern.html",
    "revision": "5f32b1f4e5c86b361f65f175ffce7a6c"
  },
  {
    "url": "basis/design-patterns/IteratorPattern.html",
    "revision": "c5037728c12aa1bb0dd7b5877393532b"
  },
  {
    "url": "basis/design-patterns/MediatorPattern.html",
    "revision": "971ad4e541aefeae2d9cdd17fbeb8de3"
  },
  {
    "url": "basis/design-patterns/MementoPattern.html",
    "revision": "522afa31b14d41ceb3c2f4cf01a16131"
  },
  {
    "url": "basis/design-patterns/NullObjectPattern.html",
    "revision": "47444263abbdc6326b05f0bf2f98bd79"
  },
  {
    "url": "basis/design-patterns/ObserverPattern.html",
    "revision": "8dc4d8b32ce212006263daca70107263"
  },
  {
    "url": "basis/design-patterns/PrototypePattern.html",
    "revision": "7a3272371bbab07d79effcc1ad4e81fb"
  },
  {
    "url": "basis/design-patterns/ProxyPattern.html",
    "revision": "b927f7188bb857944735eede26d3b07c"
  },
  {
    "url": "basis/design-patterns/SingletonPattern.html",
    "revision": "55a2501c46ee41566d3caced2e2f11da"
  },
  {
    "url": "basis/design-patterns/StatePattern.html",
    "revision": "84af653a68c16f48f449d4aaa1043d85"
  },
  {
    "url": "basis/design-patterns/StrategyPattern.html",
    "revision": "da2028a60fe2f81ca8a3dbe6547d3881"
  },
  {
    "url": "basis/design-patterns/TemplatePattern.html",
    "revision": "ef3306332c33e9c2977e2d9a4e48b98e"
  },
  {
    "url": "basis/design-patterns/VisitorPattern.html",
    "revision": "74c6591bdc5f2af2f2c972457d3325a8"
  },
  {
    "url": "basis/index/index.html",
    "revision": "d4569e0ef7cb5013af4dc512d7bc0497"
  },
  {
    "url": "basis/os/index.html",
    "revision": "a98e990447a1b99b8d7eb69d62716ce7"
  },
  {
    "url": "book/index.html",
    "revision": "c29c6e69a541c99eaaa41f108d618826"
  },
  {
    "url": "book/t-find-books.html",
    "revision": "59fc6592c11d89cb58ed7b838f19c647"
  },
  {
    "url": "c/audio/audio-basic.html",
    "revision": "cca32037d82c339c39ac60a77c05104e"
  },
  {
    "url": "c/audio/endian.html",
    "revision": "a2c714dffb38caf680d2a37e861384c0"
  },
  {
    "url": "c/audio/index.html",
    "revision": "034acc611d6c621f2b67708589131ff3"
  },
  {
    "url": "c/cmake/01-basic/A-hello-cmake.html",
    "revision": "b34d15ee0790fab62b32ef73c0faff04"
  },
  {
    "url": "c/cmake/01-basic/B-hello-headers.html",
    "revision": "90de290e8337310058e501ac40c6177a"
  },
  {
    "url": "c/cmake/01-basic/C-static-library.html",
    "revision": "7988e9773611b507266d7d59f9720acd"
  },
  {
    "url": "c/cmake/01-basic/D-shared-library.html",
    "revision": "ada0339e956fd22966ba11ec299881d3"
  },
  {
    "url": "c/cmake/01-basic/E-installing.html",
    "revision": "9ea4c0436fd1faf9fd82258f5e2027e6"
  },
  {
    "url": "c/cmake/01-basic/F-build-type.html",
    "revision": "32eb79fe109eb364e3f032d813c6c7da"
  },
  {
    "url": "c/cmake/01-basic/G-compile-flags.html",
    "revision": "7ee6d22de4ecb7dea3eb9b51882135a6"
  },
  {
    "url": "c/cmake/01-basic/H-third-party-library.html",
    "revision": "0ceb44fcc8242c8a08b3c47a74b26cf1"
  },
  {
    "url": "c/cmake/01-basic/I-compiling-with-clang.html",
    "revision": "3b132ce5b1c21ba17dc75b27a2fc56ee"
  },
  {
    "url": "c/cmake/01-basic/index.html",
    "revision": "2f3eee2c7ec9d7c738c126918107cbd0"
  },
  {
    "url": "c/cmake/01-basic/J-building-with-ninja.html",
    "revision": "9974d587a00ccf3e0f0ccaf90b01cdb7"
  },
  {
    "url": "c/cmake/01-basic/K-imported-targets.html",
    "revision": "927159e2e96a8b8e62d9f4bdaf07ba07"
  },
  {
    "url": "c/cmake/01-basic/L-cpp-standard.html",
    "revision": "d687b8c48a0131c78db41f69273cdb5d"
  },
  {
    "url": "c/cmake/index.html",
    "revision": "ed3bb3b6b91c7e241a2f303c51b0d9a5"
  },
  {
    "url": "c/program/index.html",
    "revision": "90cb77c44b4ab6ab5fec100880920d4c"
  },
  {
    "url": "c/program/pointers.html",
    "revision": "67afce59484b4d3cc8fd7aeffa7c432b"
  },
  {
    "url": "categories/index.html",
    "revision": "59357ff3d638edc97bab336835b6e719"
  },
  {
    "url": "figma/index.html",
    "revision": "b881b141be835ccc161cdc39277357f5"
  },
  {
    "url": "flutter/flutter-color.html",
    "revision": "42b18c6033b970ba989389acaca82208"
  },
  {
    "url": "flutter/github-actions-build-flutter-android.html",
    "revision": "ccf4145fdeab3a551422e2ac859fae7d"
  },
  {
    "url": "flutter/github-actions-build-flutter-ios.html",
    "revision": "fb72509cb2c9b6f51b1bb4d79f3bf8b8"
  },
  {
    "url": "flutter/index.html",
    "revision": "73598c00e30ac72891a7c3a7b132f306"
  },
  {
    "url": "flutter/point.html",
    "revision": "464ee5f3ce23bbfd94754ad03d15b017"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "29a3786c803aa646751bb34b93e8c6d5"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "83975cbfb34f1596516731323e3c189f"
  },
  {
    "url": "flutter/t3-messages.html",
    "revision": "a773259f55c5adc6777e40e31279be6d"
  },
  {
    "url": "flutter/t3-mixin.html",
    "revision": "9b26745d45aa911c060a14aebe2b1e51"
  },
  {
    "url": "flutter/t4-lifecycle.html",
    "revision": "3b198428e4a4151178b2b6a4882c4083"
  },
  {
    "url": "flutter/t5-flutter-web-deploy.html",
    "revision": "abd909ba938a89cc1e6063ebcb48f748"
  },
  {
    "url": "flutter/t6-docker-web-deploy.html",
    "revision": "6f150bc3968db1196d45539aa4cb1c7c"
  },
  {
    "url": "flutter/t7-fvm.html",
    "revision": "52cfd772490373614220bd9471d142bc"
  },
  {
    "url": "flutter/t8-const.html",
    "revision": "c6aef2c8ccaad9ae7254f21b931bc726"
  },
  {
    "url": "flutter/t9-logs.html",
    "revision": "3007697d97fe6d9f84000fecbba93ed3"
  },
  {
    "url": "flutter/u10-fvm-flutter2.html",
    "revision": "a8a58623d49f6ef252a67ac402dbbf5c"
  },
  {
    "url": "flutter/u11-flutter-render.html",
    "revision": "9db93bc4d111e524d32890da59070fe2"
  },
  {
    "url": "flutter/u12-flutter-create-w.html",
    "revision": "c22d8de704f943aa67cd32bc0c41f60e"
  },
  {
    "url": "flutter/u12-flutter-web-01.html",
    "revision": "f725c5410da2a95ebb459804a3d71159"
  },
  {
    "url": "flutter/u12-flutter-web-02.html",
    "revision": "9171dd667de9710c3c540abea65a3274"
  },
  {
    "url": "flutter/u13-sliverappbar.html",
    "revision": "7ab6e31f2d8fb65187d247cf4fbe4597"
  },
  {
    "url": "flutter/u14-navbar-color.html",
    "revision": "6ac4beea856343bbcf29099b21a06057"
  },
  {
    "url": "flutter/u15-custom-nabar.html",
    "revision": "8455dbe5a781b4272e3f103486b54361"
  },
  {
    "url": "flutter/u16-shape.html",
    "revision": "d583af4b2f96818c6e84d16ce6b0f02f"
  },
  {
    "url": "flutter/y1-statubar.html",
    "revision": "bb4057cfe1fe34498b81475f57a12fbf"
  },
  {
    "url": "haskell/1-install.html",
    "revision": "051d03850cbbdd1a7a5e79853e05da10"
  },
  {
    "url": "haskell/2-vscode.html",
    "revision": "79488a72b7e69e65bdeaf2e1bfec0387"
  },
  {
    "url": "haskell/3-pktool.html",
    "revision": "3bd04cc2472111ff89e095d9ffe974a7"
  },
  {
    "url": "haskell/4-digui.html",
    "revision": "066d0b737ba21fc3b2fff16531c0f356"
  },
  {
    "url": "haskell/index.html",
    "revision": "f9f7151e5e4dbd482bc82548d79fed32"
  },
  {
    "url": "index.html",
    "revision": "e0fb4b4ee1958908c3d351f74f4ce51b"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "python/1-file-map.html",
    "revision": "de3ccdae89754ec9efef1c4f59cf1965"
  },
  {
    "url": "python/2-mongo-random.html",
    "revision": "582b1cf07e38cba412d6d1a1ac81d8dd"
  },
  {
    "url": "python/3-page-upload.html",
    "revision": "26bdb99be1633be82f7decd686bb5bcd"
  },
  {
    "url": "python/4-bt-flask.html",
    "revision": "d23e513fb9146332fd91059e53789fb6"
  },
  {
    "url": "python/index.html",
    "revision": "6cd14dcd17c999884476543b96acfd2b"
  },
  {
    "url": "read/head-first-oop.html",
    "revision": "6c3d026b856b151a88e00419107033de"
  },
  {
    "url": "read/index.html",
    "revision": "3b59e62cea39d684dbc9df9bf2947a5f"
  },
  {
    "url": "swift/better/autoclosure.html",
    "revision": "19ba92db0de0aacc15953a6ee1744524"
  },
  {
    "url": "swift/better/available.html",
    "revision": "7d2efb30ae02c4cf8b37c530cb957e25"
  },
  {
    "url": "swift/better/chain.html",
    "revision": "c6881bdead375579eda0ec5bd9efde47"
  },
  {
    "url": "swift/better/copy-in-copy-out.html",
    "revision": "fcf023e6c3bb4278bd61a54230e8fb7c"
  },
  {
    "url": "swift/better/Copy-On-Write.html",
    "revision": "3e2736ef95bf693c57fce2665cb0a66d"
  },
  {
    "url": "swift/better/di.html",
    "revision": "826e2ece81bfb110c2ee9be57118c452"
  },
  {
    "url": "swift/better/index.html",
    "revision": "5585da8a906b78d0fe2251eae22455f1"
  },
  {
    "url": "swift/better/last.html",
    "revision": "208b93a43480a24bc0fe49b842a24d4a"
  },
  {
    "url": "swift/better/lazy.html",
    "revision": "f221dd82803eedc30159e151d493e2fe"
  },
  {
    "url": "swift/better/protocol.html",
    "revision": "26a7750fde1bb48c2322fde8e6a0941a"
  },
  {
    "url": "swift/fp/index.html",
    "revision": "5121a0c7d2f3ae256102e457545b3cdc"
  },
  {
    "url": "swift/fp/t1-fp.html",
    "revision": "3584b36ec81bb70a98384d2eea669606"
  },
  {
    "url": "swift/fp/t2-lens.html",
    "revision": "a2730a79575f15a4e5d092febf75aa53"
  },
  {
    "url": "swift/fp/t3-json1.html",
    "revision": "bc886dd28ba25495ae471d14e089ed4f"
  },
  {
    "url": "swift/fp/t3-json2.html",
    "revision": "acd1c86892135fc5e33b599229c1f288"
  },
  {
    "url": "swift/fp/t3-json3.html",
    "revision": "7ae96b911245adcbd88e32bda17f1bd7"
  },
  {
    "url": "swift/fp/t4-length.html",
    "revision": "e6c25f93afe2b7c01da8f40a8a26b37a"
  },
  {
    "url": "swift/ios/index.html",
    "revision": "7f91aead9188664a1261510ede74f5b8"
  },
  {
    "url": "swift/ios/ios-build-cers.html",
    "revision": "ae3dc535a3c635ddbf55afffce7f3420"
  },
  {
    "url": "swift/ios/pod-wechat.html",
    "revision": "114c62029f8af1e0d474b79ddff6f1c8"
  },
  {
    "url": "swift/ios/t1-pod-webp.html",
    "revision": "6d713aa6306d8756c6e04f837c8eea19"
  },
  {
    "url": "swift/ios/t2-youhua.html",
    "revision": "b8f644253d3b0599f88089e4cfcf4d14"
  },
  {
    "url": "swift/swiftui/ActionSheet.html",
    "revision": "606de071e77438eec276b99ef4ec6ecf"
  },
  {
    "url": "swift/swiftui/Alert.html",
    "revision": "f2cb5baa381a0d347e66f73c4b824506"
  },
  {
    "url": "swift/swiftui/AnyGesture.html",
    "revision": "896b987e4238b7c89131922a0421628c"
  },
  {
    "url": "swift/swiftui/Bindings.html",
    "revision": "eb115495eb6c243ff6f8e33a8d53bab4"
  },
  {
    "url": "swift/swiftui/Button.html",
    "revision": "075ec92b30abf6a80fcb50cdf2296d5e"
  },
  {
    "url": "swift/swiftui/DatePicker.html",
    "revision": "6960cf595c5d77def86aeb6bf7e7170e"
  },
  {
    "url": "swift/swiftui/DragGesture.html",
    "revision": "6c6272aeb37f0978462aa315dfc19314"
  },
  {
    "url": "swift/swiftui/DynamicNavigationDestinationLink.html",
    "revision": "7da6eeae873ce595bdf00a1bc5639a78"
  },
  {
    "url": "swift/swiftui/EditButton.html",
    "revision": "92d7c3d60d75b9dbcc3fabaaeddf9908"
  },
  {
    "url": "swift/swiftui/Environment.html",
    "revision": "ab16481f6761090a90342acbea23e436"
  },
  {
    "url": "swift/swiftui/EnvironmentObject.html",
    "revision": "739e7b4abbd904a7d15995ee251b0b2c"
  },
  {
    "url": "swift/swiftui/EnvironmentValues.html",
    "revision": "3880948df2db0fafde1af7cc2e7ff399"
  },
  {
    "url": "swift/swiftui/ExclusiveGesture.html",
    "revision": "36f870960cb0692ec0a32e06458b4b03"
  },
  {
    "url": "swift/swiftui/ForEach.html",
    "revision": "4ae9d1a093a63b9d1714ddfae4d5ebef"
  },
  {
    "url": "swift/swiftui/Form.html",
    "revision": "23434c6c090c5bb93a30bd2d68dcf095"
  },
  {
    "url": "swift/swiftui/GeometryReader.html",
    "revision": "2845add200c3c479c344a0403d201652"
  },
  {
    "url": "swift/swiftui/Group.html",
    "revision": "d45b73d70b23447c84cf7368160ef92e"
  },
  {
    "url": "swift/swiftui/GroupBox.html",
    "revision": "538aa90a864eabb5d49b7260f9a55aee"
  },
  {
    "url": "swift/swiftui/HSplitView.html",
    "revision": "2b74ccca452109d3f27e0ce8abd71d04"
  },
  {
    "url": "swift/swiftui/HStack.html",
    "revision": "81d65b880e84e8f817d8ecf6ad06cf00"
  },
  {
    "url": "swift/swiftui/Image.html",
    "revision": "9cc7f214936a2d10246392815474f528"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "5012e5a00a887a12ee1f09b71ba691e3"
  },
  {
    "url": "swift/swiftui/ItemBasedPopUpButton.html",
    "revision": "dac9a0ba224745fe9b416f5053c8abd7"
  },
  {
    "url": "swift/swiftui/List.html",
    "revision": "ead94c8721e490128987f360dc91f3e8"
  },
  {
    "url": "swift/swiftui/LocalizedStringKey.html",
    "revision": "ab68eeb94560a7366931679e6dff3209"
  },
  {
    "url": "swift/swiftui/LongPressGesture.html",
    "revision": "02dc83c933258cb67cf1d1229729df36"
  },
  {
    "url": "swift/swiftui/MagnificationGesture.html",
    "revision": "c17d83bbdf94357ce233f5ad2afae03f"
  },
  {
    "url": "swift/swiftui/Modal.html",
    "revision": "0dfd9706a2b53199ab3f2906691ee873"
  },
  {
    "url": "swift/swiftui/NavigationButton.html",
    "revision": "06508297cc7520ecb14562d1b48cf18f"
  },
  {
    "url": "swift/swiftui/NavigationView.html",
    "revision": "59f41bfa5f12aef8f8697a7485378579"
  },
  {
    "url": "swift/swiftui/ObjectBinding.html",
    "revision": "aeb40417eb112680f3a96e33b7c947c6"
  },
  {
    "url": "swift/swiftui/PasteButton.html",
    "revision": "bb21cbfb47740435e6e6637cbb9d34a2"
  },
  {
    "url": "swift/swiftui/Picker.html",
    "revision": "78a71a0ce3edd36cb22be34420008bb7"
  },
  {
    "url": "swift/swiftui/Popover.html",
    "revision": "1e2d57d46c5236ded3a2f1ca3b9d83c1"
  },
  {
    "url": "swift/swiftui/PreferenceKey.html",
    "revision": "8470a044b72bf16afbcd732e4d31fd11"
  },
  {
    "url": "swift/swiftui/PresentationButton.html",
    "revision": "1a9949c4c0b065d0c688213ca191e7d4"
  },
  {
    "url": "swift/swiftui/Principle01.html",
    "revision": "e5528ac04649038e3920e2eb7008cf39"
  },
  {
    "url": "swift/swiftui/Principle02.html",
    "revision": "13eb5e7dc34b4f99cdc8920cd1466241"
  },
  {
    "url": "swift/swiftui/Principle03.html",
    "revision": "f90d31187cc4aa46b97e80ab200118e6"
  },
  {
    "url": "swift/swiftui/Principle04.html",
    "revision": "49a21e20266db84adb324229d38e7d43"
  },
  {
    "url": "swift/swiftui/Principle05.html",
    "revision": "fc38bc0a805df987154d89d07d6ee4b7"
  },
  {
    "url": "swift/swiftui/Principle06.html",
    "revision": "7ec649f3869462731bc46524d5768e84"
  },
  {
    "url": "swift/swiftui/PullDownButton.html",
    "revision": "249ee2cf860c01b769fdb36f7e730b91"
  },
  {
    "url": "swift/swiftui/RotationGesture.html",
    "revision": "378da3d282a0e6d2f5137d341f292f1a"
  },
  {
    "url": "swift/swiftui/ScrollView.html",
    "revision": "7d377b71d9f357e7675b7f7d6ce0553b"
  },
  {
    "url": "swift/swiftui/Section.html",
    "revision": "be0975e5c71f77f6470a984fb13c7ec9"
  },
  {
    "url": "swift/swiftui/SecureField.html",
    "revision": "be0475d4b0b91a8da6f9a739d35eafc9"
  },
  {
    "url": "swift/swiftui/SegmentedControl.html",
    "revision": "287ddc3de9d394559673ce23ef07096a"
  },
  {
    "url": "swift/swiftui/SequenceGesture.html",
    "revision": "bb979509925dbf441a932c76ea76c5a9"
  },
  {
    "url": "swift/swiftui/Sheet.html",
    "revision": "6b9d77e39b3cdd59da09c592edbc827c"
  },
  {
    "url": "swift/swiftui/SimultaneousGesture.html",
    "revision": "4347377d1703e4df6cf5a27374d3746e"
  },
  {
    "url": "swift/swiftui/Slider.html",
    "revision": "a6b76a819972d9fd891436335aa39868"
  },
  {
    "url": "swift/swiftui/Stacks.html",
    "revision": "5561f0320357be5aba86823653bd7d9a"
  },
  {
    "url": "swift/swiftui/State.html",
    "revision": "eea5c51b4353af9651fadc7817f6d9c3"
  },
  {
    "url": "swift/swiftui/Stepper.html",
    "revision": "f80caf93ec89b9d65104218aed6ee675"
  },
  {
    "url": "swift/swiftui/Strideable.html",
    "revision": "5a7255fe7ca2ba7a9ed65647b0589ce0"
  },
  {
    "url": "swift/swiftui/TabView.html",
    "revision": "7b63207171eac4be5d4a78450505ec91"
  },
  {
    "url": "swift/swiftui/TapGesture.html",
    "revision": "cfcf4331506850d84b2bff706ec8b461"
  },
  {
    "url": "swift/swiftui/Text.html",
    "revision": "79d9c4e7dff37c9580d9458688468785"
  },
  {
    "url": "swift/swiftui/TextField.html",
    "revision": "aa164bbd9e35ea1e7be666dfff1952ab"
  },
  {
    "url": "swift/swiftui/Toggle.html",
    "revision": "0ca515e7bd94a95301267ea40a3c4492"
  },
  {
    "url": "swift/swiftui/Transaction.html",
    "revision": "c28ae03b2baa1889a916f86346a7ba10"
  },
  {
    "url": "swift/swiftui/UIViewController.html",
    "revision": "8e02571c9e7be1f45e8d5f0ba6b8a32f"
  },
  {
    "url": "swift/swiftui/ViewModifier.html",
    "revision": "db9c66496371d200cce4f979d874dd53"
  },
  {
    "url": "swift/swiftui/VSplitView.html",
    "revision": "042aa0045b4f31aa4e736eedb8ba4d25"
  },
  {
    "url": "swift/swiftui/VStack.html",
    "revision": "7a017a2f540495c19947701cf75f16cf"
  },
  {
    "url": "swift/swiftui/WebImage.html",
    "revision": "daa016af3cc9028a393c700186e7c30a"
  },
  {
    "url": "swift/swiftui/WebView.html",
    "revision": "a3210ee5ec15183fed4320700beb1736"
  },
  {
    "url": "swift/swiftui/ZStack.html",
    "revision": "63e2ed4c236b659975090f9af6f1474f"
  },
  {
    "url": "swift/tips/index.html",
    "revision": "ea5b35b78669b03deef316dcae81fa38"
  },
  {
    "url": "swift/ubuntu/demo.html",
    "revision": "82120029a4a0c90a84f3d03f820a5326"
  },
  {
    "url": "swift/ubuntu/index.html",
    "revision": "f5c7060fba8f85d4fabf695dfba9c9f5"
  },
  {
    "url": "swift/ubuntu/spm.html",
    "revision": "9d1aedc88016b0f0621fadde282aecc7"
  },
  {
    "url": "swift/ubuntu/swiftenv.html",
    "revision": "e38968de44fd73f9cbba89cb2615d5a2"
  },
  {
    "url": "swift/ubuntu/vscode.html",
    "revision": "efdf61ca8a789885b00bf4c13912d85a"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "b769457b03c44962d520c9c862aa56b0"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "361aa2ef88544b33a37353c39976e8ca"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "3b9c8920d72694f546440ae0f39def6a"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "ce58651b5083e5ac87bf94597f18291a"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "7df3bff131f7d71c1eac716bdc0806cb"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "ae27b76cc4a21976bceb8c01e5a1430a"
  },
  {
    "url": "swift/vapor/t6-say-oldbirds.html",
    "revision": "2e37ef2af0851c483fe60baac55179ae"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "087a8be8005cc831277bdf1cab9ded2b"
  },
  {
    "url": "swift/vapor/u-11-auth.html",
    "revision": "71699d5ea1aa9e7b83f573acc86ed86e"
  },
  {
    "url": "swift/vapor/u-12-permission.html",
    "revision": "80bfd77187bc50afce11e9c8c687e3fb"
  },
  {
    "url": "swift/vapor/v-20-read-code.html",
    "revision": "dd5cf848bbe07791f02313a6111b5ae2"
  },
  {
    "url": "swift/vapor/v-21-io.html",
    "revision": "c33ff9f2a45922240f6f1d38451b00a3"
  },
  {
    "url": "swift/vapor/v-22-bio2.html",
    "revision": "cf1a14291a47d96caa501e550b038694"
  },
  {
    "url": "swift/vapor/v-23-swiftnio-do-text.html",
    "revision": "d65a1fa082618b59c215f124ec87d73c"
  },
  {
    "url": "swift/vapor/v-24-swift-zhan-package.html",
    "revision": "72436addb04dea72929020e256da55d1"
  },
  {
    "url": "swift/vapor/v-25-swiftnio-do-serisize.html",
    "revision": "f6e8a7330deeef3dd0ffc44377ba492c"
  },
  {
    "url": "swift/vapor/v-26-swfitnio-grpc-1.html",
    "revision": "11c16a286db5916672cf5c8b5d68cff9"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/ai/index.html",
    "revision": "88ceacb918c539c246638acf99dcb3d1"
  },
  {
    "url": "tag/c/c++/index.html",
    "revision": "28916719d0ecb0a81b788ee42ca3d23d"
  },
  {
    "url": "tag/cmake/index.html",
    "revision": "31529c71cf75dd3adeabde1c5de4176a"
  },
  {
    "url": "tag/flask/index.html",
    "revision": "8bbc9aa61152bfe114b27483a8ebf917"
  },
  {
    "url": "tag/flowchart/index.html",
    "revision": "7d0a05ed938e1b34fa5af17044ebe2c2"
  },
  {
    "url": "tag/flutter/index.html",
    "revision": "27cc7db3fbe793d063b02fbff27e7611"
  },
  {
    "url": "tag/flutter/page/2/index.html",
    "revision": "057f1afce6a798379c2216a3416055d5"
  },
  {
    "url": "tag/flutter/page/3/index.html",
    "revision": "5bdb71f57773e21b94f9a89e7be286e4"
  },
  {
    "url": "tag/git/index.html",
    "revision": "1ae05e9e5a786b1e425418a0ab80400f"
  },
  {
    "url": "tag/github/index.html",
    "revision": "f7baf4848fb5e90bc4169db47b6cf775"
  },
  {
    "url": "tag/haskell/index.html",
    "revision": "0f14bb0b5d0f983fccc0307bcf28b9fe"
  },
  {
    "url": "tag/html/index.html",
    "revision": "1717588e38eb7bfdf05726bafbb7b1e9"
  },
  {
    "url": "tag/index.html",
    "revision": "21ff4962de4df00407311837cefe28a4"
  },
  {
    "url": "tag/ios/index.html",
    "revision": "f91c24d1e0702dec730d82bd2b0593b1"
  },
  {
    "url": "tag/ios/page/2/index.html",
    "revision": "fbf3316e131503e6cba934f5e7027c34"
  },
  {
    "url": "tag/ios/page/3/index.html",
    "revision": "46c640f5909b99f962c52e237191b0ef"
  },
  {
    "url": "tag/ios/page/4/index.html",
    "revision": "e9d9eb46e71e9b9330de53291e009d82"
  },
  {
    "url": "tag/ios/page/5/index.html",
    "revision": "9363d429160d3765760e502475efa327"
  },
  {
    "url": "tag/ios/page/6/index.html",
    "revision": "048036c470c208334d202907f337fb3a"
  },
  {
    "url": "tag/ios/page/7/index.html",
    "revision": "a40ad35c6054b9047f77cba75f760dbb"
  },
  {
    "url": "tag/ios/page/8/index.html",
    "revision": "418f99cac7cd2f2e038210b0ecdb60e4"
  },
  {
    "url": "tag/ios/page/9/index.html",
    "revision": "ed36f43814b0fa586efe9d60592ea495"
  },
  {
    "url": "tag/json/index.html",
    "revision": "c0a3157881576fd4094e3bcde5ada44e"
  },
  {
    "url": "tag/plantuml/index.html",
    "revision": "a4b0730d64de8e5f660800e85b79941e"
  },
  {
    "url": "tag/pod/index.html",
    "revision": "b02cccd5bd59dc6af7876f7426865fd9"
  },
  {
    "url": "tag/python/index.html",
    "revision": "d51e232cb14f76654f04d47448ab1183"
  },
  {
    "url": "tag/read/index.html",
    "revision": "b9cfd6307b75176d4c91707cd53c2b37"
  },
  {
    "url": "tag/swift/index.html",
    "revision": "d3175de256bd7c299142e9de2c3df77e"
  },
  {
    "url": "tag/swift/page/10/index.html",
    "revision": "1dcc8a145fdb3bb7f3ae617197df338f"
  },
  {
    "url": "tag/swift/page/11/index.html",
    "revision": "d24376d85461ff7868e4a2c82ceb0ead"
  },
  {
    "url": "tag/swift/page/12/index.html",
    "revision": "347bc253867a7d3e4d7a505bb7f593c5"
  },
  {
    "url": "tag/swift/page/13/index.html",
    "revision": "988fb80750d2fe9570c17acf280f2a8d"
  },
  {
    "url": "tag/swift/page/14/index.html",
    "revision": "4281a257f0ec993a8cee2cb94617aeae"
  },
  {
    "url": "tag/swift/page/2/index.html",
    "revision": "93b085834911f86c446177b12d1c8e4c"
  },
  {
    "url": "tag/swift/page/3/index.html",
    "revision": "62ca32a4c821b00073d2d8685ddc7975"
  },
  {
    "url": "tag/swift/page/4/index.html",
    "revision": "49422a05029b2aae18c698c0c76014e9"
  },
  {
    "url": "tag/swift/page/5/index.html",
    "revision": "24c2ea082836e73e6e318497cbebf056"
  },
  {
    "url": "tag/swift/page/6/index.html",
    "revision": "9c432c1b3e75ca02186f0e1f8bb998b0"
  },
  {
    "url": "tag/swift/page/7/index.html",
    "revision": "726adad522a4a8f6a84d5d2c3b40064a"
  },
  {
    "url": "tag/swift/page/8/index.html",
    "revision": "2f4e8ef643b07e521f3b1ec2e7a79c40"
  },
  {
    "url": "tag/swift/page/9/index.html",
    "revision": "0531715585fa1fc16e7e48d1a22535ef"
  },
  {
    "url": "tag/swiftenv/index.html",
    "revision": "e4230df851d27fd88faf726ed78764f6"
  },
  {
    "url": "tag/swiftnio/index.html",
    "revision": "7390e3ccd9dc384d18293c62b8864752"
  },
  {
    "url": "tag/swiftui/index.html",
    "revision": "071cf2c21a2bb4d48664b1d05d985144"
  },
  {
    "url": "tag/swiftui/page/2/index.html",
    "revision": "31ad02a624323bf5185a4ceb72515907"
  },
  {
    "url": "tag/swiftui/page/3/index.html",
    "revision": "040e49b30186027580332596c4eeebb0"
  },
  {
    "url": "tag/swiftui/page/4/index.html",
    "revision": "5116dee88d5e154f535c00e4238aceed"
  },
  {
    "url": "tag/swiftui/page/5/index.html",
    "revision": "de3f56160ad30e24ddc5eb1c8f278da9"
  },
  {
    "url": "tag/swiftui/page/6/index.html",
    "revision": "d7e4b91047bfe1b57aea60b8eb5d9c4f"
  },
  {
    "url": "tag/swiftui/page/7/index.html",
    "revision": "bf56d008becb781f6c396fc49dad2241"
  },
  {
    "url": "tag/tips/index.html",
    "revision": "f512453a9d746c818ab07107985a5759"
  },
  {
    "url": "tag/tools/index.html",
    "revision": "58a8233e2019cb35ac1b60caed5264e3"
  },
  {
    "url": "tag/tools/page/2/index.html",
    "revision": "02706d71555b5b8efd34559002b21ca4"
  },
  {
    "url": "tag/ubuntu/index.html",
    "revision": "c8dae8d77743cbc068c0c68079a24b17"
  },
  {
    "url": "tag/vapor/index.html",
    "revision": "e98cc4304763075af348284a62eb9811"
  },
  {
    "url": "tag/vapor/page/2/index.html",
    "revision": "f73b5e712c698aefd8a13952e2ab93bb"
  },
  {
    "url": "tag/vapor/page/3/index.html",
    "revision": "328ae3964e061f055ff11091d3fcd8a0"
  },
  {
    "url": "tag/vscode/index.html",
    "revision": "ed3652522a884f0fab3bdda5e908fbc2"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "feeff5ff19ad71c46917383bd5bd2b64"
  },
  {
    "url": "tag/yaml/index.html",
    "revision": "4221372d794e42169df02c4841821982"
  },
  {
    "url": "tag/书单/index.html",
    "revision": "ad5bd60557e584c434ed370380944430"
  },
  {
    "url": "tag/函数式编程/index.html",
    "revision": "50f97f893793e18bf645e5a7626ff729"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "85c0c767d2603fafa0076f7466f7f25e"
  },
  {
    "url": "tag/基础/page/2/index.html",
    "revision": "593d5a28cde4aff5e1b6450424eb25af"
  },
  {
    "url": "tag/打包/index.html",
    "revision": "1f6d8f8e5d1c879b090e8d7c79883cd1"
  },
  {
    "url": "tag/指针/index.html",
    "revision": "1fa8ec6c0c1a1dfb368daad8fa28f9ef"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "676ab6665478c6063ee4495fcc1402e5"
  },
  {
    "url": "tag/数据结构与算法/page/2/index.html",
    "revision": "5390c44b0899ec7043e0fe2e3f0d09ff"
  },
  {
    "url": "tag/笔记/index.html",
    "revision": "f57bffae5277f054e3afd956416ce93a"
  },
  {
    "url": "tag/设计模式/index.html",
    "revision": "4c76958c76ff9feadd98f277a12f0cd3"
  },
  {
    "url": "tag/设计模式/page/2/index.html",
    "revision": "39a08933c5bb6f6fe29fe90fb50e582c"
  },
  {
    "url": "tag/设计模式/page/3/index.html",
    "revision": "2a4cd199d2de02ab186cb24b4b0ec811"
  },
  {
    "url": "tag/阅读/index.html",
    "revision": "d76100da287c7121115a94bac43b2cd6"
  },
  {
    "url": "tag/音频/index.html",
    "revision": "8824c2918c03291945807d801b17a5dd"
  },
  {
    "url": "timeline/index.html",
    "revision": "1bc29ae76b57257a4a61ef79a1c0ec7f"
  },
  {
    "url": "tools/flowchart/index.html",
    "revision": "621c9ed09241da330b60f3233ff95ba5"
  },
  {
    "url": "tools/git/git-branch-mapping.html",
    "revision": "b1906d936820a14075c2c09c329b6b17"
  },
  {
    "url": "tools/git/git-reset.html",
    "revision": "6860913df20144b7d91ccf6e2e8bceff"
  },
  {
    "url": "tools/git/index.html",
    "revision": "836bbef8b853e154a1eef4fedad2a306"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "63ea1e7a6f1003686042cc7d1649b70a"
  },
  {
    "url": "tools/git/t2-git-submodule.html",
    "revision": "1735cbca13b0821b40d219c17d767150"
  },
  {
    "url": "tools/html/index.html",
    "revision": "c2a641d3c13b81ef1b36123badf59f82"
  },
  {
    "url": "tools/plantuml/index.html",
    "revision": "538f657218831fca315f066672b65dd7"
  },
  {
    "url": "tools/plantuml/t1-sequence-diagram.html",
    "revision": "772385efc6f2f8c64b90b75cd12abb5b"
  },
  {
    "url": "tools/plantuml/t2-class-diagram.html",
    "revision": "6a51604ee0d22270db370f239627668f"
  },
  {
    "url": "tools/vuepress/deploy-github-action.html",
    "revision": "c69dc81860f6fa17dd7343bf81ab3f1a"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "26f6bacdfd156e0165c9f46ef24207b8"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "5ce0c1e038c0dd8d115beaa13dc1eb82"
  },
  {
    "url": "tools/vuepress/memory-out.html",
    "revision": "f000ccd48739150a7ed68069897accce"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "e8825842c15567aaa77cae20a269a49a"
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
