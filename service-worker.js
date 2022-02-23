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
    "revision": "01f72f05c2a3e1e2dd1c60fc97967124"
  },
  {
    "url": "about/app/index.html",
    "revision": "91684a1a7526785d1edc164e8bd36fb3"
  },
  {
    "url": "about/app/t1-protocol.html",
    "revision": "734a51522a6db52b079c356a56afa45c"
  },
  {
    "url": "about/app/t2-secrect.html",
    "revision": "c5a25db27d2d2b69f00fa602b4e5fe28"
  },
  {
    "url": "about/app/t3-miniapps-sec.html",
    "revision": "874ecb6908e5a2b60a399051850fb038"
  },
  {
    "url": "about/index/index.html",
    "revision": "ebcc35950d6e39dd2e25c2a4880d78ed"
  },
  {
    "url": "ai/index.html",
    "revision": "50a1f7476d3c541652cfbf5014e16c0f"
  },
  {
    "url": "ai/t1-gzj.html",
    "revision": "1b769f89733bdd07367f9ade9de3bde3"
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
    "url": "assets/js/10.8b69eac0.js",
    "revision": "dd3d1ca91dde3fa2e482057008710e1a"
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
    "url": "assets/js/121.3c2e50f0.js",
    "revision": "98162510f95b6d536261828c98028319"
  },
  {
    "url": "assets/js/122.19c1d4d7.js",
    "revision": "4e9cf5917b909133fd71913cdf14d903"
  },
  {
    "url": "assets/js/123.c1ca4f59.js",
    "revision": "81eac3281878e3d97013b4c9a9805371"
  },
  {
    "url": "assets/js/124.710e0638.js",
    "revision": "cf92d3b60f6cd467c419f733e1523f9b"
  },
  {
    "url": "assets/js/125.629ea1aa.js",
    "revision": "c0c1d128a32836b4fac255cdbea8a1b2"
  },
  {
    "url": "assets/js/126.d28bc355.js",
    "revision": "7071d8379b2444307bc31d2cdb4c870e"
  },
  {
    "url": "assets/js/127.defed87d.js",
    "revision": "149e333cbb160364bc372fe8e8b61df9"
  },
  {
    "url": "assets/js/128.0417b271.js",
    "revision": "43ba48be3144f10604a0d8a16cf88ac2"
  },
  {
    "url": "assets/js/129.af70072a.js",
    "revision": "8b52be7ff1c96f1771e099822777e3de"
  },
  {
    "url": "assets/js/13.c67eb4f3.js",
    "revision": "71603cc63ff2292bc3f39900298a1f33"
  },
  {
    "url": "assets/js/130.0e983b27.js",
    "revision": "7b0b5a0a9a52f5c555d322caf347fc1e"
  },
  {
    "url": "assets/js/131.eeed01f5.js",
    "revision": "3771dd99e9f90eb0d35cee4376393627"
  },
  {
    "url": "assets/js/132.ea1ad33f.js",
    "revision": "cd5bf3f45491d7f1c095445b90c759c0"
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
    "url": "assets/js/14.1f02aa53.js",
    "revision": "4f8feb834f55a9c2e3822b82064711a9"
  },
  {
    "url": "assets/js/140.d08640bf.js",
    "revision": "c383d8d763e4808b699a74da78152aae"
  },
  {
    "url": "assets/js/141.eb45f922.js",
    "revision": "5c4f817e829eb1886f002f9d6eba1388"
  },
  {
    "url": "assets/js/142.153920ce.js",
    "revision": "4c1006cc53db5b8b097df09162113601"
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
    "url": "assets/js/154.c6602c26.js",
    "revision": "fb8f3097a9ff6c172843c6c3c817cafe"
  },
  {
    "url": "assets/js/155.58df2ca0.js",
    "revision": "26c9abae24a0d9b99c384c1233d8731c"
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
    "url": "assets/js/163.ec335905.js",
    "revision": "656a7917a3cd093f1b28ae18ea22f812"
  },
  {
    "url": "assets/js/164.1649ff59.js",
    "revision": "de993705a092a4b96454f7cc2dfe4d38"
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
    "url": "assets/js/186.2596b205.js",
    "revision": "951dce0f4e4d111d54c8490ba289493e"
  },
  {
    "url": "assets/js/187.5a155285.js",
    "revision": "58680d57878ea2457f451865be22b6d6"
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
    "url": "assets/js/210.dabf4b86.js",
    "revision": "a1e46f376add81d6e0f7cb64d93fed45"
  },
  {
    "url": "assets/js/211.29ced447.js",
    "revision": "d06feec44718412c95953d5d55f2e154"
  },
  {
    "url": "assets/js/212.72140c2c.js",
    "revision": "8bf470a4acc84e039990f91775c109af"
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
    "url": "assets/js/222.a9cf1a64.js",
    "revision": "191dd4f959a0e77582eebe7263b156f9"
  },
  {
    "url": "assets/js/223.0bb5658d.js",
    "revision": "e6ab3134b485972666edfbba72f043e8"
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
    "url": "assets/js/236.383fd29e.js",
    "revision": "b7e85cfbb8b674c830e5bc67f1792372"
  },
  {
    "url": "assets/js/237.e59cad1f.js",
    "revision": "9d9550f9cf030130fa607067e4340adb"
  },
  {
    "url": "assets/js/238.40d03512.js",
    "revision": "fee4ef5d1b2dcc9303dbe55d9fbfc382"
  },
  {
    "url": "assets/js/239.2c971e1e.js",
    "revision": "a2b1491b57a4394020303c198f57e300"
  },
  {
    "url": "assets/js/24.124148d1.js",
    "revision": "ad4351b30c6d2aadb9642337bb13e170"
  },
  {
    "url": "assets/js/240.c7c7b575.js",
    "revision": "04aa29d189ffdddbccc227ce655268ae"
  },
  {
    "url": "assets/js/241.a5c3ebbb.js",
    "revision": "cd52f072e378c135d1b98668012dd193"
  },
  {
    "url": "assets/js/242.3097acd7.js",
    "revision": "f767893bc5d8391d79735e53b5272040"
  },
  {
    "url": "assets/js/243.481a479f.js",
    "revision": "d833570bce78a57cf7c10ca875ce5cd3"
  },
  {
    "url": "assets/js/244.e73a728d.js",
    "revision": "df7ea49344c408096760cb82ca2fd1db"
  },
  {
    "url": "assets/js/245.7ec0c388.js",
    "revision": "8f631bf97aa0d77d17266c5ebb94e437"
  },
  {
    "url": "assets/js/246.90baa583.js",
    "revision": "5ae0bf4007a04ce790219974509720f9"
  },
  {
    "url": "assets/js/247.f64ee336.js",
    "revision": "fbe3105a7cd00f11fa8911bdb5923d11"
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
    "url": "assets/js/app.baada117.js",
    "revision": "7170d2c41ac3f91a74c162dd57b5a5b8"
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
    "revision": "0fdbda035613edae62f2dfe9beab2cf5"
  },
  {
    "url": "basis/algorithms/t1-buble-sort.html",
    "revision": "d968cda74342279f31d7c8f0aea5c588"
  },
  {
    "url": "basis/algorithms/t2-selection-sort.html",
    "revision": "b2f5f0e06ac5976c6b72204b24d8b903"
  },
  {
    "url": "basis/algorithms/t3-insertion-sort.html",
    "revision": "5bccd99f2e57a247a589a36138c18979"
  },
  {
    "url": "basis/algorithms/t4-shell-sort.html",
    "revision": "3820a1cc915c34ac715c9cba6051ffeb"
  },
  {
    "url": "basis/algorithms/t5-quick-sort.html",
    "revision": "1d945949bc2df4801401ede9529a5a7d"
  },
  {
    "url": "basis/algorithms/t6-heap-sort.html",
    "revision": "45a3357ae320336a0d547abb0d4da71a"
  },
  {
    "url": "basis/algorithms/t7-merge-sort.html",
    "revision": "3949fee760740f285667d07d4e232dbc"
  },
  {
    "url": "basis/algorithms/t8-radix-sort.html",
    "revision": "335c41da20ddd5b64a434ff88ddb4480"
  },
  {
    "url": "basis/algorithms/t9-count-sort.html",
    "revision": "c06ef0468c6fa569f2c5e0535817fe5a"
  },
  {
    "url": "basis/algorithms/u1-bucket-sort.html",
    "revision": "ba94c5f65e6cf6604b181640c0622153"
  },
  {
    "url": "basis/design-patterns/AdapterPattern.html",
    "revision": "2ef0da155bbc71d3dc72a2c5c40ab76c"
  },
  {
    "url": "basis/design-patterns/BridgePattern.html",
    "revision": "e9db1f8410662031b2bf43399ef48e66"
  },
  {
    "url": "basis/design-patterns/BuilderPattern.html",
    "revision": "a658c2fc8c48329cd50ef2c6ca9f7c42"
  },
  {
    "url": "basis/design-patterns/ChainOfResponsibilityPattern.html",
    "revision": "f662799f870169607953c1afa7666e8b"
  },
  {
    "url": "basis/design-patterns/ClassReleation.html",
    "revision": "e8c8bb3719bca6fe3d9c122b1b18f8f0"
  },
  {
    "url": "basis/design-patterns/CommandPattern.html",
    "revision": "95ca850ce98d4fb63606453fc16c3e90"
  },
  {
    "url": "basis/design-patterns/CompositePattern.html",
    "revision": "2b2f2d75077e5a1323892e97bd88a9a3"
  },
  {
    "url": "basis/design-patterns/DecoratorPattern.html",
    "revision": "e0cc2d09cd6154ae0fc11c6feb937718"
  },
  {
    "url": "basis/design-patterns/DesignPrinciples.html",
    "revision": "f96abd06bae483d61a467d2f3454a6f7"
  },
  {
    "url": "basis/design-patterns/FacadePattern.html",
    "revision": "3f0d5127c8a8df6babe0c284efd92526"
  },
  {
    "url": "basis/design-patterns/FactoryPattern.html",
    "revision": "15efea2d10304609b0a9eb30d65ef1e8"
  },
  {
    "url": "basis/design-patterns/FilterCriteriaPattern.html",
    "revision": "3b6cb0cce52d3f5ced151ef86d33a1a5"
  },
  {
    "url": "basis/design-patterns/FlyweightPattern.html",
    "revision": "000bfd165f606ad3cdd79a5e81013dba"
  },
  {
    "url": "basis/design-patterns/index.html",
    "revision": "59fac6cb17eba5a1be83c83d99a2c2e5"
  },
  {
    "url": "basis/design-patterns/InterpreterPattern.html",
    "revision": "f0770bf626b59ec1ca8e8d971f4d2583"
  },
  {
    "url": "basis/design-patterns/IteratorPattern.html",
    "revision": "6d3cab178c537ff3ae143d7bb4ff3b6d"
  },
  {
    "url": "basis/design-patterns/MediatorPattern.html",
    "revision": "35e387c3bbd761ac5f553961bd0abb01"
  },
  {
    "url": "basis/design-patterns/MementoPattern.html",
    "revision": "7209a2beac16e38559c323c29737e411"
  },
  {
    "url": "basis/design-patterns/NullObjectPattern.html",
    "revision": "6b974cca8735668139bfa0fcd5267fed"
  },
  {
    "url": "basis/design-patterns/ObserverPattern.html",
    "revision": "9324b57a5958049a705cd51fff5c210b"
  },
  {
    "url": "basis/design-patterns/PrototypePattern.html",
    "revision": "9f94d7bc29b2df9f2136fa1ac9d1d013"
  },
  {
    "url": "basis/design-patterns/ProxyPattern.html",
    "revision": "87e50e859f841bbeaa8127af704dcb57"
  },
  {
    "url": "basis/design-patterns/SingletonPattern.html",
    "revision": "a6e42b5fa53a40d7fafa86c97033de54"
  },
  {
    "url": "basis/design-patterns/StatePattern.html",
    "revision": "ccb18001e0a8c1169a0557858ed2ded5"
  },
  {
    "url": "basis/design-patterns/StrategyPattern.html",
    "revision": "a77d25515c6c9a1a3c4f6b70b368f72e"
  },
  {
    "url": "basis/design-patterns/TemplatePattern.html",
    "revision": "e665792f8da150f056cf516a65530f61"
  },
  {
    "url": "basis/design-patterns/VisitorPattern.html",
    "revision": "df8a0ebfbaa0420a8224f45affaa8684"
  },
  {
    "url": "basis/index/index.html",
    "revision": "001048adee2f7519f9ebe64ebd588365"
  },
  {
    "url": "basis/os/index.html",
    "revision": "35eb9328159551d8fe631184cac75ef3"
  },
  {
    "url": "book/index.html",
    "revision": "7ecb997834e7b1cbf702202d3faa8286"
  },
  {
    "url": "book/t-find-books.html",
    "revision": "8be1f732827101d6668fc390880a18e6"
  },
  {
    "url": "c/audio/audio-basic.html",
    "revision": "457a1b091822cfb19b2702714c37f565"
  },
  {
    "url": "c/audio/endian.html",
    "revision": "11d9b3e27e103564d0d9adf78ef3c7eb"
  },
  {
    "url": "c/audio/index.html",
    "revision": "e69af5c2ca2a5b271bc84fa0fcb603d4"
  },
  {
    "url": "c/cmake/01-basic/A-hello-cmake.html",
    "revision": "873f4c587e13e33be23da76ca400ba85"
  },
  {
    "url": "c/cmake/01-basic/B-hello-headers.html",
    "revision": "0e66e0acf823efb421e48b4057574e75"
  },
  {
    "url": "c/cmake/01-basic/C-static-library.html",
    "revision": "8e0f698a981b72c06f36263774cfc555"
  },
  {
    "url": "c/cmake/01-basic/D-shared-library.html",
    "revision": "c36faf6ea4576985f74112de0d34a083"
  },
  {
    "url": "c/cmake/01-basic/E-installing.html",
    "revision": "3e17a2ebf8b549a8714780198fcc4636"
  },
  {
    "url": "c/cmake/01-basic/F-build-type.html",
    "revision": "6e1168594a46c998710939e6aae05f1b"
  },
  {
    "url": "c/cmake/01-basic/G-compile-flags.html",
    "revision": "a3fa7aa6788fccde996dae1a3119e218"
  },
  {
    "url": "c/cmake/01-basic/H-third-party-library.html",
    "revision": "6264253f96007a7c03d05c5ed8337d2b"
  },
  {
    "url": "c/cmake/01-basic/I-compiling-with-clang.html",
    "revision": "108a8d217b6d9384a3f9cade2ef49111"
  },
  {
    "url": "c/cmake/01-basic/index.html",
    "revision": "297488ad773637499b919c8b8a4f0a3a"
  },
  {
    "url": "c/cmake/01-basic/J-building-with-ninja.html",
    "revision": "d38832c390e4085d3bbf8cc2af286ae4"
  },
  {
    "url": "c/cmake/01-basic/K-imported-targets.html",
    "revision": "686e43e4e7486793798d6cdf10609349"
  },
  {
    "url": "c/cmake/01-basic/L-cpp-standard.html",
    "revision": "7c02b84e666df82447ec18155c183f1d"
  },
  {
    "url": "c/cmake/index.html",
    "revision": "f23957bcaa3e96cbb2525ce67e33d2da"
  },
  {
    "url": "c/program/index.html",
    "revision": "dc71d073404e48af23b52f607c988a19"
  },
  {
    "url": "c/program/pointers.html",
    "revision": "79c5a55f0689d71bd824cb0129cbb92e"
  },
  {
    "url": "categories/index.html",
    "revision": "03d7d8eb209781a58b1615be80573056"
  },
  {
    "url": "figma/index.html",
    "revision": "c9660b5b086e081dbef9463e4611137c"
  },
  {
    "url": "flutter/flutter-color.html",
    "revision": "1365b0bc5ca4c63ba766f942118f01b5"
  },
  {
    "url": "flutter/github-actions-build-flutter-android.html",
    "revision": "455d415d6ff057571ddfdb25704a9c96"
  },
  {
    "url": "flutter/github-actions-build-flutter-ios.html",
    "revision": "ff71ab253d20821f2e2bea31db77a0a5"
  },
  {
    "url": "flutter/index.html",
    "revision": "ff6494c0488f8a548fc09fe5f4721a6e"
  },
  {
    "url": "flutter/point.html",
    "revision": "787b0f30677f456b56badb99c1090c99"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "dbdaa4e2ee09048df895a2cc740ec771"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "26b9378272bd494e58c2ecc7a2fd5d06"
  },
  {
    "url": "flutter/t3-messages.html",
    "revision": "e6056bcfd228d2e4e17dbd274a46dd94"
  },
  {
    "url": "flutter/t3-mixin.html",
    "revision": "f49d10c5b28145881cc1c814e97f99c2"
  },
  {
    "url": "flutter/t4-lifecycle.html",
    "revision": "6a37ef4be2c73762ac6713ef8b44d91c"
  },
  {
    "url": "flutter/t5-flutter-web-deploy.html",
    "revision": "ba16204227583d4809332e0a7c70e719"
  },
  {
    "url": "flutter/t6-docker-web-deploy.html",
    "revision": "42197793b763818c8583b4310336c5b8"
  },
  {
    "url": "flutter/t7-fvm.html",
    "revision": "1bfe387355bafbb9e84b4de04f1b5589"
  },
  {
    "url": "flutter/t8-const.html",
    "revision": "5e7989e5368641e25a9eb2cf6942649f"
  },
  {
    "url": "flutter/t9-logs.html",
    "revision": "730e757932e0889b2ac7ca97edf5ccc1"
  },
  {
    "url": "flutter/u10-fvm-flutter2.html",
    "revision": "71d7f5c2ffbea5049d0731f095f57809"
  },
  {
    "url": "flutter/u11-flutter-render.html",
    "revision": "5ecfa864ee93e8d169ab24d0787baaee"
  },
  {
    "url": "flutter/u12-flutter-create-w.html",
    "revision": "0608f21657843b02283ac66c85eaeff3"
  },
  {
    "url": "flutter/u12-flutter-web-01.html",
    "revision": "bff66a833447a06e8618a178caeadca1"
  },
  {
    "url": "flutter/u12-flutter-web-02.html",
    "revision": "54d7321feaf012d77209eac448425573"
  },
  {
    "url": "flutter/u13-sliverappbar.html",
    "revision": "d8077cfbf7940bfe5a74c47d85f385d7"
  },
  {
    "url": "flutter/u14-navbar-color.html",
    "revision": "deb5b332ebaf3b65b21cf1999f55dc63"
  },
  {
    "url": "flutter/u15-custom-nabar.html",
    "revision": "40b8c0e5590d7736dc21eab72ef58548"
  },
  {
    "url": "flutter/u16-shape.html",
    "revision": "9c7252248293808bf3a09cd790c6472b"
  },
  {
    "url": "flutter/y1-statubar.html",
    "revision": "5b49a281f967888d7730d89772a2464e"
  },
  {
    "url": "haskell/1-install.html",
    "revision": "df21b96abb71065bf7f40f8b95504e60"
  },
  {
    "url": "haskell/2-vscode.html",
    "revision": "9d07c07c90857fa8c75bb6d3ffb9ace4"
  },
  {
    "url": "haskell/3-pktool.html",
    "revision": "40fd2f0e061065c13c8c32aa301085af"
  },
  {
    "url": "haskell/4-digui.html",
    "revision": "b3a4f12f15ec15d9ac555f7d387317e5"
  },
  {
    "url": "haskell/index.html",
    "revision": "5f05038143dba76c2d9edf77f91df346"
  },
  {
    "url": "index.html",
    "revision": "51f1ad827cc1bd39a7c9a471922b4298"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "python/1-file-map.html",
    "revision": "0865c5df2dd4341e1fdf09808cff6087"
  },
  {
    "url": "python/2-mongo-random.html",
    "revision": "ac61abb2a58aebb000b7792ef420810f"
  },
  {
    "url": "python/3-page-upload.html",
    "revision": "687b48b8f5dcf3f0c450911aa754088d"
  },
  {
    "url": "python/4-bt-flask.html",
    "revision": "2c94ada0a6f93e860b28c87851847ef3"
  },
  {
    "url": "python/index.html",
    "revision": "cb71cff8e3eeee6ae3a57bc0469be6ab"
  },
  {
    "url": "read/head-first-oop.html",
    "revision": "b498ac1aef352f1dc8d67a74a21890f8"
  },
  {
    "url": "read/index.html",
    "revision": "d68bcef64498fe11a73d785b736b6a95"
  },
  {
    "url": "swift/better/autoclosure.html",
    "revision": "afce2b0c475758e689a95753b9880550"
  },
  {
    "url": "swift/better/available.html",
    "revision": "afd4dd2786ee187114af6f060d681908"
  },
  {
    "url": "swift/better/chain.html",
    "revision": "24cc1027a3c8be4c1f863f15f0a2a872"
  },
  {
    "url": "swift/better/copy-in-copy-out.html",
    "revision": "de772af21e1869d1f46215a85dc8c1c3"
  },
  {
    "url": "swift/better/Copy-On-Write.html",
    "revision": "c91a053cf73e0600c1c4ea4fdc2e9c7b"
  },
  {
    "url": "swift/better/di.html",
    "revision": "4e1315a214884834cf77d9c8598cd916"
  },
  {
    "url": "swift/better/index.html",
    "revision": "6dbd52217caa4cf8b24eb32e261a4e08"
  },
  {
    "url": "swift/better/last.html",
    "revision": "b60bef47308e7c3410b1c429a1dd4bbd"
  },
  {
    "url": "swift/better/lazy.html",
    "revision": "2ed32010bc32d8e13647d70096b75a91"
  },
  {
    "url": "swift/better/protocol.html",
    "revision": "45a51964220ccde8ca8b270128dbe563"
  },
  {
    "url": "swift/fp/index.html",
    "revision": "881b6c7f2996ad43ba455823eab6bbb9"
  },
  {
    "url": "swift/fp/t1-fp.html",
    "revision": "ed9a349bf6b870d06153e4c97b4d37f5"
  },
  {
    "url": "swift/fp/t2-lens.html",
    "revision": "28e2b918b558a9ab0350b0267c823e75"
  },
  {
    "url": "swift/fp/t3-json1.html",
    "revision": "96ade03d22014ac058ffc2ec859427b5"
  },
  {
    "url": "swift/fp/t3-json2.html",
    "revision": "4d96a2d1a2332bcac2853b78977375e5"
  },
  {
    "url": "swift/fp/t3-json3.html",
    "revision": "64a26989a4684c250802e3dc95131557"
  },
  {
    "url": "swift/fp/t4-length.html",
    "revision": "067b1d2b696d15f59954770fc852510a"
  },
  {
    "url": "swift/ios/index.html",
    "revision": "16cbbb0237620fe1429e5798f703d039"
  },
  {
    "url": "swift/ios/ios-build-cers.html",
    "revision": "80422ac4a3e60e27cdb8495c29e969f7"
  },
  {
    "url": "swift/ios/pod-wechat.html",
    "revision": "bdc23b89b5687d1f4b17bbbb8954e27a"
  },
  {
    "url": "swift/ios/t1-pod-webp.html",
    "revision": "0a0848a8a42628fbe1e89f260c37be07"
  },
  {
    "url": "swift/ios/t2-youhua.html",
    "revision": "f6c6077d6549f5259a4138ab3dbfd05a"
  },
  {
    "url": "swift/swiftui/ActionSheet.html",
    "revision": "119e8409abdc0569fb2fcf500a7cf8c5"
  },
  {
    "url": "swift/swiftui/Alert.html",
    "revision": "ff7a8280554422eb4742354021a6f22f"
  },
  {
    "url": "swift/swiftui/AnyGesture.html",
    "revision": "4afe9adcfb6afd763734eb2cb90c46b0"
  },
  {
    "url": "swift/swiftui/Bindings.html",
    "revision": "fae3caa2fa1cc33cbfa97a8f0d81d760"
  },
  {
    "url": "swift/swiftui/Button.html",
    "revision": "67665b159a5403caee6ce9e442adb3fb"
  },
  {
    "url": "swift/swiftui/DatePicker.html",
    "revision": "8c7730662fae8faffbe2d62ea85e0a93"
  },
  {
    "url": "swift/swiftui/DragGesture.html",
    "revision": "2380b490af7a4ef59009f2d85583bd28"
  },
  {
    "url": "swift/swiftui/DynamicNavigationDestinationLink.html",
    "revision": "ac899a5e7d585143b819e6c1dec7e2d4"
  },
  {
    "url": "swift/swiftui/EditButton.html",
    "revision": "924d1a01525235e56df6a8662dc997f4"
  },
  {
    "url": "swift/swiftui/Environment.html",
    "revision": "054d7ea48480ce43f6517d7869031b9c"
  },
  {
    "url": "swift/swiftui/EnvironmentObject.html",
    "revision": "8864f385379d44f7b168dcb6882bb54f"
  },
  {
    "url": "swift/swiftui/EnvironmentValues.html",
    "revision": "1a62cd1dd6d9c939f2391a7f603261e9"
  },
  {
    "url": "swift/swiftui/ExclusiveGesture.html",
    "revision": "88b87132adaa926f0fcfcd887f581813"
  },
  {
    "url": "swift/swiftui/ForEach.html",
    "revision": "88b5ee90fdfa152d476511b56e4adf0f"
  },
  {
    "url": "swift/swiftui/Form.html",
    "revision": "22e6fda02bcb97694aad67522080bf3f"
  },
  {
    "url": "swift/swiftui/GeometryReader.html",
    "revision": "c095fc53aaa6c178679e80d4d67a06e5"
  },
  {
    "url": "swift/swiftui/Group.html",
    "revision": "ffeacfaceecef9ace06ad4f5cb500a5e"
  },
  {
    "url": "swift/swiftui/GroupBox.html",
    "revision": "57180169983e74b4a3936546b7d24e07"
  },
  {
    "url": "swift/swiftui/HSplitView.html",
    "revision": "ed9c5a4719b55d57b2e1e331d23638b0"
  },
  {
    "url": "swift/swiftui/HStack.html",
    "revision": "415b1030df42b7f551855fa7130db18a"
  },
  {
    "url": "swift/swiftui/Image.html",
    "revision": "b6fa1137f56c5341cedcfaa5940a70b3"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "0ed2e1de8e12abcf4e4b1dd215811184"
  },
  {
    "url": "swift/swiftui/ItemBasedPopUpButton.html",
    "revision": "dfd944946776e7f70eb151c383efaf72"
  },
  {
    "url": "swift/swiftui/List.html",
    "revision": "79402f5831d5301452dc6faaf4e46b71"
  },
  {
    "url": "swift/swiftui/LocalizedStringKey.html",
    "revision": "4bdede11c539d8ba1b70a09163aac029"
  },
  {
    "url": "swift/swiftui/LongPressGesture.html",
    "revision": "a09b8512acb343994857195f7b9fc6d2"
  },
  {
    "url": "swift/swiftui/MagnificationGesture.html",
    "revision": "474cae239ccaa35528c97cf34906e732"
  },
  {
    "url": "swift/swiftui/Modal.html",
    "revision": "4d99c09aa5f6baa4f99d40a8f307c241"
  },
  {
    "url": "swift/swiftui/NavigationButton.html",
    "revision": "2e7ee780987fd9996b1aebea84a0719a"
  },
  {
    "url": "swift/swiftui/NavigationView.html",
    "revision": "aa63c6c7dfdb32234864ba2ab48b1cdf"
  },
  {
    "url": "swift/swiftui/ObjectBinding.html",
    "revision": "0fc0ac107e5537c5b3e6c9ca75cdd89d"
  },
  {
    "url": "swift/swiftui/PasteButton.html",
    "revision": "8d2fd6db78d9adadb0e4c5a73e8eda33"
  },
  {
    "url": "swift/swiftui/Picker.html",
    "revision": "192f4a420e52606c4d9d2e538766f49c"
  },
  {
    "url": "swift/swiftui/Popover.html",
    "revision": "b1954c4a092ce27d600aa874c4813a83"
  },
  {
    "url": "swift/swiftui/PreferenceKey.html",
    "revision": "8f40f9ba772273951679def83d44c3e2"
  },
  {
    "url": "swift/swiftui/PresentationButton.html",
    "revision": "7a3e2156d618d245dfe0566684417c8a"
  },
  {
    "url": "swift/swiftui/Principle01.html",
    "revision": "101bcf8b326ca19330b2f58ecf13814f"
  },
  {
    "url": "swift/swiftui/Principle02.html",
    "revision": "8229b5c41a14fd9b09a89196e1263405"
  },
  {
    "url": "swift/swiftui/Principle03.html",
    "revision": "d74dce5bb3c85b95ead235473b7f04a0"
  },
  {
    "url": "swift/swiftui/Principle04.html",
    "revision": "7e577d4ea64fdd527cc3126f58f1c1e0"
  },
  {
    "url": "swift/swiftui/Principle05.html",
    "revision": "4aa94829afea196ce4e083a2cf4f63be"
  },
  {
    "url": "swift/swiftui/Principle06.html",
    "revision": "9d513ff03ae48d0cdb67a041f6d0c194"
  },
  {
    "url": "swift/swiftui/PullDownButton.html",
    "revision": "225b4fa0a6278f84504bd5c53b21fe45"
  },
  {
    "url": "swift/swiftui/RotationGesture.html",
    "revision": "f63c0d6730d9b640b71951582f77b8a7"
  },
  {
    "url": "swift/swiftui/ScrollView.html",
    "revision": "66b395d36a9f3e3600f6a6f872d95ed7"
  },
  {
    "url": "swift/swiftui/Section.html",
    "revision": "e8a312615e6a6016ab0d6c4fbdf660f7"
  },
  {
    "url": "swift/swiftui/SecureField.html",
    "revision": "a3b2327b1ab7212812d5e37004aed30a"
  },
  {
    "url": "swift/swiftui/SegmentedControl.html",
    "revision": "50ad97d8176047572608ca03ac0b5491"
  },
  {
    "url": "swift/swiftui/SequenceGesture.html",
    "revision": "9cf32eac51f40d4467280916c7d6d904"
  },
  {
    "url": "swift/swiftui/Sheet.html",
    "revision": "b8337e9df7b1967c2c88e8f5655900dc"
  },
  {
    "url": "swift/swiftui/SimultaneousGesture.html",
    "revision": "00e47d098cf4031c6a95ad7de93639e6"
  },
  {
    "url": "swift/swiftui/Slider.html",
    "revision": "ec1ec2371a017e27fc6291a23b74cf8a"
  },
  {
    "url": "swift/swiftui/Stacks.html",
    "revision": "dba481ec0e6f953f017545536d01d034"
  },
  {
    "url": "swift/swiftui/State.html",
    "revision": "00428f4580c10cf768f1c709fed08960"
  },
  {
    "url": "swift/swiftui/Stepper.html",
    "revision": "832c1b7712264c26f734373945184ffd"
  },
  {
    "url": "swift/swiftui/Strideable.html",
    "revision": "4de38b26650eb9b715be50ade0861df8"
  },
  {
    "url": "swift/swiftui/TabView.html",
    "revision": "26062c3271b34df3b6e67acb9ccccbd7"
  },
  {
    "url": "swift/swiftui/TapGesture.html",
    "revision": "fb10549620b78ac558862a2a029a3b13"
  },
  {
    "url": "swift/swiftui/Text.html",
    "revision": "1152d10fefb446a6522314c24922fd6e"
  },
  {
    "url": "swift/swiftui/TextField.html",
    "revision": "5e202ada5836dacefccec1fc89a9cefb"
  },
  {
    "url": "swift/swiftui/Toggle.html",
    "revision": "ab2a65dcee0ad1ceb980cf3a0d6724a1"
  },
  {
    "url": "swift/swiftui/Transaction.html",
    "revision": "41cff075de07a05baa919c80832c26fc"
  },
  {
    "url": "swift/swiftui/UIViewController.html",
    "revision": "85241f11da6aa6376f00482f68922aad"
  },
  {
    "url": "swift/swiftui/ViewModifier.html",
    "revision": "2cc7cf8859a150922088a0f32c249d31"
  },
  {
    "url": "swift/swiftui/VSplitView.html",
    "revision": "68d8f39e451ff74e03bdeb8f06069dbc"
  },
  {
    "url": "swift/swiftui/VStack.html",
    "revision": "82a5567bca42a78f60785b45f22cec89"
  },
  {
    "url": "swift/swiftui/WebImage.html",
    "revision": "8e197484b9813a592ad3dde1ffb9cac5"
  },
  {
    "url": "swift/swiftui/WebView.html",
    "revision": "f18a16f9c2b61a69feed4b6e68fa0fbf"
  },
  {
    "url": "swift/swiftui/ZStack.html",
    "revision": "396a0be0be09227688e33bbf50e70275"
  },
  {
    "url": "swift/tips/index.html",
    "revision": "e32e46c7fbd3b04374c33aa667098214"
  },
  {
    "url": "swift/ubuntu/demo.html",
    "revision": "b1dd6a15689fc3f64da359cb99040b0f"
  },
  {
    "url": "swift/ubuntu/index.html",
    "revision": "8160c9b921c373c18ecae2b81d65ecc8"
  },
  {
    "url": "swift/ubuntu/spm.html",
    "revision": "3d9a7536db45e261ffca6d50bcd15bd6"
  },
  {
    "url": "swift/ubuntu/swiftenv.html",
    "revision": "d0f43906ecc64259e44d4786042f5e97"
  },
  {
    "url": "swift/ubuntu/vscode.html",
    "revision": "c7dab65d98cfc5e62e6835b26434b6f9"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "54d7646ed95cf8d874a0004f8a3a60f2"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "bd3ba60599f883bfcc2be8d42a0d3db3"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "aafaa6e68a2bf390bcf45fe7559afbfb"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "084206321175d1a78c769ba234e61f35"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "33a29d86106b6522092d991fe3457202"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "93481f835c7a35ca5838e912f68154d2"
  },
  {
    "url": "swift/vapor/t6-say-oldbirds.html",
    "revision": "ded35608870401a04d025a50aeb87791"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "3e08894e6ae3580f9ba331cbc5a3608b"
  },
  {
    "url": "swift/vapor/u-11-auth.html",
    "revision": "6f0cfa9d199c538bf697057549f466b8"
  },
  {
    "url": "swift/vapor/u-12-permission.html",
    "revision": "9fd45e3ea66d447fc506647c2a46cbd0"
  },
  {
    "url": "swift/vapor/v-20-read-code.html",
    "revision": "264089e1eaf5146702ee8543af1f5867"
  },
  {
    "url": "swift/vapor/v-21-io.html",
    "revision": "94439aa2343eace73942e0ea3b9be9a4"
  },
  {
    "url": "swift/vapor/v-22-bio2.html",
    "revision": "40ce33f0766212252f493f21bdc09a25"
  },
  {
    "url": "swift/vapor/v-23-swiftnio-do-text.html",
    "revision": "5721979a55a01becccc2dc9a2967b550"
  },
  {
    "url": "swift/vapor/v-24-swift-zhan-package.html",
    "revision": "e3e1670834c20b89e5491b68258df7ae"
  },
  {
    "url": "swift/vapor/v-25-swiftnio-do-serisize.html",
    "revision": "02e08cbe8e3f6f71bd8dff98d57adb90"
  },
  {
    "url": "swift/vapor/v-26-swfitnio-grpc-1.html",
    "revision": "40c17b1b1a71a1caba4913e53ba79520"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/ai/index.html",
    "revision": "b34360f34a20ac94c98abbf65b87e1bd"
  },
  {
    "url": "tag/c/c++/index.html",
    "revision": "d37b6aeb18c1411b8d444a0618c3554b"
  },
  {
    "url": "tag/cmake/index.html",
    "revision": "1baaf1f530552bd1e851acd1fa471f26"
  },
  {
    "url": "tag/flask/index.html",
    "revision": "5bc1562fc8e59b3ddd4b2498d4790cab"
  },
  {
    "url": "tag/flowchart/index.html",
    "revision": "55217c639f86d8898b2fdfa3a5419692"
  },
  {
    "url": "tag/flutter/index.html",
    "revision": "9a40a57c121928892db4f34db8852351"
  },
  {
    "url": "tag/flutter/page/2/index.html",
    "revision": "8c59bd4bbad53ee3ad1d09014e62932b"
  },
  {
    "url": "tag/flutter/page/3/index.html",
    "revision": "628749f4e5f539947c6d75f121a373d8"
  },
  {
    "url": "tag/git/index.html",
    "revision": "88dc31e30c6f81a5409e8dd7b75855e1"
  },
  {
    "url": "tag/github/index.html",
    "revision": "6c15e1e7c77dae9f94c8c5c868c44d68"
  },
  {
    "url": "tag/haskell/index.html",
    "revision": "0ca0812170b57173a67ed08ee21416f2"
  },
  {
    "url": "tag/html/index.html",
    "revision": "b9f40958cda99c3f1770852b4b045c8b"
  },
  {
    "url": "tag/index.html",
    "revision": "7b5d2606a29c321df5f5fc43ca1e9e62"
  },
  {
    "url": "tag/ios/index.html",
    "revision": "4ce34f5420301ee5cd0ac9fccddaa59e"
  },
  {
    "url": "tag/ios/page/2/index.html",
    "revision": "799ccb9eafb9cc15b9f0a656749f52d1"
  },
  {
    "url": "tag/ios/page/3/index.html",
    "revision": "94e328f7bc59d97d83e3193c4a3b80d5"
  },
  {
    "url": "tag/ios/page/4/index.html",
    "revision": "d04b9c4758edfdca29cb436e90e21cba"
  },
  {
    "url": "tag/ios/page/5/index.html",
    "revision": "fa9ffbe39dc147c6a7e7d778bf7bb853"
  },
  {
    "url": "tag/ios/page/6/index.html",
    "revision": "a8797a33dfe7402547582dbbc5368250"
  },
  {
    "url": "tag/ios/page/7/index.html",
    "revision": "3af36b26d13878464dc8dabab4981a3d"
  },
  {
    "url": "tag/ios/page/8/index.html",
    "revision": "cbe6d5cc8089f27e0343f1c020f233b7"
  },
  {
    "url": "tag/ios/page/9/index.html",
    "revision": "f1006446cca33aab2c3837bf4d1a59db"
  },
  {
    "url": "tag/json/index.html",
    "revision": "14303ec0b42f411a24b0620147570b24"
  },
  {
    "url": "tag/plantuml/index.html",
    "revision": "6340c40faab3b8dcb4201d200c2bc7cc"
  },
  {
    "url": "tag/pod/index.html",
    "revision": "0b211fae1be6f94c6be98ed807a2d58a"
  },
  {
    "url": "tag/python/index.html",
    "revision": "7253e10a2dbc2908821490b73c5db0ec"
  },
  {
    "url": "tag/read/index.html",
    "revision": "3ce60570c125a8fadbba5dad441150df"
  },
  {
    "url": "tag/swift/index.html",
    "revision": "6dee20b00eaf2822827e2a105dd553dd"
  },
  {
    "url": "tag/swift/page/10/index.html",
    "revision": "cf287ab398a6f073b373dbf6574cdd63"
  },
  {
    "url": "tag/swift/page/11/index.html",
    "revision": "e64aad3050e27bf891931ad793d8e18c"
  },
  {
    "url": "tag/swift/page/12/index.html",
    "revision": "8b9b30bdee4fe82a7234c08ad6d73067"
  },
  {
    "url": "tag/swift/page/13/index.html",
    "revision": "4f03073472e68bdb455e50f77c39d21c"
  },
  {
    "url": "tag/swift/page/14/index.html",
    "revision": "452064cb214d5a5ecf55013528544124"
  },
  {
    "url": "tag/swift/page/2/index.html",
    "revision": "9eb733d51ab3262850034fc1465fe47b"
  },
  {
    "url": "tag/swift/page/3/index.html",
    "revision": "3f04cee851c0858efa43ea4a04bc9c72"
  },
  {
    "url": "tag/swift/page/4/index.html",
    "revision": "1f9b24885b08f283280201227c03541a"
  },
  {
    "url": "tag/swift/page/5/index.html",
    "revision": "983fd29a72818901b7c60c7120124955"
  },
  {
    "url": "tag/swift/page/6/index.html",
    "revision": "5be4743d429e100ebd15d770096bf59a"
  },
  {
    "url": "tag/swift/page/7/index.html",
    "revision": "00b7cb0dc222471970f5bddecccdecc7"
  },
  {
    "url": "tag/swift/page/8/index.html",
    "revision": "2c5f681680a4cff2e8396ad27fb9a87e"
  },
  {
    "url": "tag/swift/page/9/index.html",
    "revision": "9885a655a21717114959002c231dd628"
  },
  {
    "url": "tag/swiftenv/index.html",
    "revision": "806575956abe20dc2efa8bd4bec3b0ec"
  },
  {
    "url": "tag/swiftnio/index.html",
    "revision": "41821495ef83218c6f1e7ef561d15258"
  },
  {
    "url": "tag/swiftui/index.html",
    "revision": "794cf0322881f965399de24356e9d683"
  },
  {
    "url": "tag/swiftui/page/2/index.html",
    "revision": "73f855a45415a6d09c01dc29f2e6c32d"
  },
  {
    "url": "tag/swiftui/page/3/index.html",
    "revision": "8a2abcbf27ae3719ac2ceedcb1cfbaf4"
  },
  {
    "url": "tag/swiftui/page/4/index.html",
    "revision": "0a452143b18f477a9d483d46f47f89d6"
  },
  {
    "url": "tag/swiftui/page/5/index.html",
    "revision": "2b174bc9491fd6e7947f2c959c632745"
  },
  {
    "url": "tag/swiftui/page/6/index.html",
    "revision": "e14f164043086692f8868a2176dc2209"
  },
  {
    "url": "tag/swiftui/page/7/index.html",
    "revision": "3ad6e403a8386dacc5a317de06e07450"
  },
  {
    "url": "tag/tips/index.html",
    "revision": "38fd381102eca96be13666b091975c88"
  },
  {
    "url": "tag/tools/index.html",
    "revision": "5683fa8571806d2d562f47a0c9f80312"
  },
  {
    "url": "tag/tools/page/2/index.html",
    "revision": "0263249e39fc29b61fdbda340babad19"
  },
  {
    "url": "tag/ubuntu/index.html",
    "revision": "45b182a817c450ddd77e200e5aaec956"
  },
  {
    "url": "tag/vapor/index.html",
    "revision": "57c141d93902dc569b4cb87d60535ea6"
  },
  {
    "url": "tag/vapor/page/2/index.html",
    "revision": "1810298754b01019dd40788ce930efaf"
  },
  {
    "url": "tag/vapor/page/3/index.html",
    "revision": "831b5778225f0fadee6ae02854470e50"
  },
  {
    "url": "tag/vscode/index.html",
    "revision": "157525f224a72175a5e51fb56c6d590a"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "fc0db9dbabf50b2d5d039d4261ae770e"
  },
  {
    "url": "tag/yaml/index.html",
    "revision": "f1cb0087fb12ba2196b8467ad1dabc73"
  },
  {
    "url": "tag/书单/index.html",
    "revision": "1deba82227247a34e6e16aa0ba383d2b"
  },
  {
    "url": "tag/函数式编程/index.html",
    "revision": "8ff013c660e5b1c865d8996b2a9b6636"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "6e6d8a535fe4e49d149ccd262276ab28"
  },
  {
    "url": "tag/基础/page/2/index.html",
    "revision": "c8ddd333f2be7baddc04867841565fce"
  },
  {
    "url": "tag/打包/index.html",
    "revision": "a203473e0da2a13df3437c795669ddfb"
  },
  {
    "url": "tag/指针/index.html",
    "revision": "e4e59cf29f439191380ed68fc934ea76"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "58d6f385e9a001dc88d14dc5585c557b"
  },
  {
    "url": "tag/数据结构与算法/page/2/index.html",
    "revision": "fd66c8f9ddf7523278d45d6382f55246"
  },
  {
    "url": "tag/笔记/index.html",
    "revision": "56c60ba67c493bfe1ef5454fcf790dea"
  },
  {
    "url": "tag/设计模式/index.html",
    "revision": "26e573d8f7e69962aac8a86295525a49"
  },
  {
    "url": "tag/设计模式/page/2/index.html",
    "revision": "06bf7bdb38a900d6312757a21d0529bb"
  },
  {
    "url": "tag/设计模式/page/3/index.html",
    "revision": "ae32252b9d898d6a43ab53cbc1fe580d"
  },
  {
    "url": "tag/阅读/index.html",
    "revision": "73ae24b7932f98cd070fc9c0e718e555"
  },
  {
    "url": "tag/音频/index.html",
    "revision": "9de66f32bbc0f31e2d3ebe0d902056a4"
  },
  {
    "url": "timeline/index.html",
    "revision": "5c5885b9453081662895368e584ed5cc"
  },
  {
    "url": "tools/flowchart/index.html",
    "revision": "4d7ea1dc76b23c6e8b94421984432636"
  },
  {
    "url": "tools/git/git-branch-mapping.html",
    "revision": "4c03889ce6ce91e59c531b3353de08c1"
  },
  {
    "url": "tools/git/index.html",
    "revision": "05ce997d31dbb85fd9570255555c55cb"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "7f01b0535be24581353d9c318ffe065f"
  },
  {
    "url": "tools/git/t2-git-submodule.html",
    "revision": "d24bedf3a207ff7b9f732963d555eecb"
  },
  {
    "url": "tools/html/index.html",
    "revision": "45e2ea733497021b6f2e192a77c0611c"
  },
  {
    "url": "tools/plantuml/index.html",
    "revision": "b60678caaeebf1a15f977ee4f0a37488"
  },
  {
    "url": "tools/plantuml/t1-sequence-diagram.html",
    "revision": "f95d419e154fdba7223426610db07982"
  },
  {
    "url": "tools/plantuml/t2-class-diagram.html",
    "revision": "bdfb0c6c20331f10530ebfbeb220f036"
  },
  {
    "url": "tools/vuepress/deploy-github-action.html",
    "revision": "9df971fd8fa2dd7a46c828039dc3c775"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "d439fd025c2b8710caf18aa5488bfd00"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "ed0ef414f93901e45447867646577e9c"
  },
  {
    "url": "tools/vuepress/memory-out.html",
    "revision": "1e1dbb489e79490a32bfa056b68b5a7b"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "ae35644dd29c0b30ea55fd0979611e71"
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
