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
    "revision": "040c45bfd08a47acd192d34714650ea0"
  },
  {
    "url": "about/app/index.html",
    "revision": "f8bc740b8a9baa3fb72b2626fbfbd4a8"
  },
  {
    "url": "about/app/t1-protocol.html",
    "revision": "f2eda35aa4f5880e9221b759bd6023aa"
  },
  {
    "url": "about/app/t2-secrect.html",
    "revision": "4e795035026659d6b808857108a8b9e0"
  },
  {
    "url": "about/app/t3-miniapps-sec.html",
    "revision": "f03ee30002ff20a68095aea84cb9af33"
  },
  {
    "url": "about/index/index.html",
    "revision": "9bf08ffb98f1f8c3c910695ef2d43fd7"
  },
  {
    "url": "ai/index.html",
    "revision": "b2b2c30a2dd314d6cd3a799a94384a55"
  },
  {
    "url": "ai/t1-gzj.html",
    "revision": "ab02c8f3dafb8f2d58072a6191cf3680"
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
    "url": "assets/js/1.a551f48d.js",
    "revision": "799de6bd95cd1e9ebeb538d7942a1b7e"
  },
  {
    "url": "assets/js/10.a1b7c426.js",
    "revision": "745377592d8d1871be7fb120bc561a78"
  },
  {
    "url": "assets/js/100.ad1f2f42.js",
    "revision": "7436ab1bc028219edbae99c8a8c18a97"
  },
  {
    "url": "assets/js/101.3776d718.js",
    "revision": "c27b28b1e36211cecc53376b0613c4c5"
  },
  {
    "url": "assets/js/102.7ae3c84f.js",
    "revision": "ff117cdcba06ac02f337047a31868143"
  },
  {
    "url": "assets/js/103.0ff7b439.js",
    "revision": "9e9ba6e6a5f2b06d2a367cdd95abe49b"
  },
  {
    "url": "assets/js/104.d3b8881c.js",
    "revision": "f3b1033e1a2329ada63456690852ac5a"
  },
  {
    "url": "assets/js/105.3ca9e5c8.js",
    "revision": "6c3e310958f9fc560c2fb6c6ae75f5f3"
  },
  {
    "url": "assets/js/106.45ff6cd3.js",
    "revision": "311645b94ecb8186b2d267561758ae36"
  },
  {
    "url": "assets/js/107.cc80c4b9.js",
    "revision": "84df75d591a24aa4d86e3d97df580b6a"
  },
  {
    "url": "assets/js/108.37464949.js",
    "revision": "5e2437a85a75b9defd71a932313f798b"
  },
  {
    "url": "assets/js/109.38c729e0.js",
    "revision": "70e76eab7a7303bed550e57e5a1f323a"
  },
  {
    "url": "assets/js/11.2c085d70.js",
    "revision": "e1268aec28c13be0da97ba27b6d19a1b"
  },
  {
    "url": "assets/js/110.ac45902e.js",
    "revision": "24919d59ccc975c57fb391de47b8357c"
  },
  {
    "url": "assets/js/111.d85639be.js",
    "revision": "6fd6af9e1dbad9b229b2c2a9340529e9"
  },
  {
    "url": "assets/js/112.bad6bd34.js",
    "revision": "5e1d47727e4e9b2aa301597e92eb1a4d"
  },
  {
    "url": "assets/js/113.da7355f8.js",
    "revision": "2ca81ad677cbfe5b81eaf423abbd80df"
  },
  {
    "url": "assets/js/114.14913a72.js",
    "revision": "ae894155c52155380b48a942078cbad9"
  },
  {
    "url": "assets/js/115.0d6e206f.js",
    "revision": "fecec4388c00d335706a692775b82cfe"
  },
  {
    "url": "assets/js/116.dcf19e96.js",
    "revision": "012ce1b26d62bb87ac350027b4ce6ec2"
  },
  {
    "url": "assets/js/117.e25df4a2.js",
    "revision": "8a22c0dd3b599ddbb4ccd9932a6ab9da"
  },
  {
    "url": "assets/js/118.1ccf4cdb.js",
    "revision": "0a12f04c0715658910aa169c4685d195"
  },
  {
    "url": "assets/js/119.069067ae.js",
    "revision": "34b268a0c9a46f38e045d83d0804eda1"
  },
  {
    "url": "assets/js/12.07ae5b2f.js",
    "revision": "4439b95611a48d78d2acf6219f6e30aa"
  },
  {
    "url": "assets/js/120.b495945c.js",
    "revision": "02183a46c2475daa3663bbfe96f286b9"
  },
  {
    "url": "assets/js/121.a83da555.js",
    "revision": "eaac519b6cf42c9c24cfd95d4b2a489f"
  },
  {
    "url": "assets/js/122.9484ad7c.js",
    "revision": "f95acf175cd9da0bfb2366112254210c"
  },
  {
    "url": "assets/js/123.c8a61af2.js",
    "revision": "02336c2705f003f6a488ffcdc580c8b9"
  },
  {
    "url": "assets/js/124.c12859f8.js",
    "revision": "53490eaf32386328300afcde8a2260a6"
  },
  {
    "url": "assets/js/125.a7bdaa63.js",
    "revision": "a5c5ce34fa484fd865bc6cc3b4cc5e2e"
  },
  {
    "url": "assets/js/126.3891c74f.js",
    "revision": "1960e4cf25717e9593662a32701f6cd2"
  },
  {
    "url": "assets/js/127.34d8eb0b.js",
    "revision": "f029944cafd12dfe30aa5ed247dc3e18"
  },
  {
    "url": "assets/js/128.4f0a719a.js",
    "revision": "20f412465a163e351d70431da59217f2"
  },
  {
    "url": "assets/js/129.38c6f4cd.js",
    "revision": "4d1d0e38df710ef035cbffa5ddbc7ac1"
  },
  {
    "url": "assets/js/13.e98bb4bc.js",
    "revision": "43c21373e6bc06b1c996bd147d8ca308"
  },
  {
    "url": "assets/js/130.33a79b60.js",
    "revision": "6cfc1ab9f7a20b78cdb9f8bff72000ea"
  },
  {
    "url": "assets/js/131.afe1107a.js",
    "revision": "2195fc14cb5e1efcd8be35628800b8e5"
  },
  {
    "url": "assets/js/132.89dcb736.js",
    "revision": "677f5e0652411f34c7cd8a1b9e5dd859"
  },
  {
    "url": "assets/js/133.2034dd69.js",
    "revision": "faf72df9ca00aac5553adc1e25a07015"
  },
  {
    "url": "assets/js/134.e43c24c1.js",
    "revision": "599d5b289f8a2ab2ce474414c9c35698"
  },
  {
    "url": "assets/js/135.89d1608f.js",
    "revision": "fa3ec973c267718fe6d192e70c44c8ec"
  },
  {
    "url": "assets/js/136.a931ef7f.js",
    "revision": "1d1b9d687d78823d4a74b98ee6e247df"
  },
  {
    "url": "assets/js/137.a96545fe.js",
    "revision": "a38aa0df960a63a16ccc77da77131abe"
  },
  {
    "url": "assets/js/138.b73f022a.js",
    "revision": "ac1a903d8284be950bf5334edf72c602"
  },
  {
    "url": "assets/js/139.6e70a9c7.js",
    "revision": "8e363e834bf86d23736c74be8c433d03"
  },
  {
    "url": "assets/js/14.2897d1a8.js",
    "revision": "7856cabbaf7f135f6180957351d76ebc"
  },
  {
    "url": "assets/js/140.0063933a.js",
    "revision": "95d58dae400f933115cfbc7d5353ca7e"
  },
  {
    "url": "assets/js/141.9ed38250.js",
    "revision": "85f8ca1fd79539f8d195ec131caff1fb"
  },
  {
    "url": "assets/js/142.5adbe7e3.js",
    "revision": "ae2e681a3e8a1dda2e813a059f27f90c"
  },
  {
    "url": "assets/js/143.ce8b5087.js",
    "revision": "7074f4bc7ba2787f99a72896452e0bc6"
  },
  {
    "url": "assets/js/144.624860a8.js",
    "revision": "f79a3214f34c4e8814eb8a1646d8fe74"
  },
  {
    "url": "assets/js/145.f18121c9.js",
    "revision": "279d7388d59100f9207a370a19ad8545"
  },
  {
    "url": "assets/js/146.5383d61a.js",
    "revision": "8f1abb6b2cec1bc712053ee4e700d649"
  },
  {
    "url": "assets/js/147.09260136.js",
    "revision": "58a548c5df4b4169c89af9b8e05ea3d0"
  },
  {
    "url": "assets/js/148.f53a5412.js",
    "revision": "eae137f1360d854a4fb1ed12629f8551"
  },
  {
    "url": "assets/js/149.df0ec34b.js",
    "revision": "a12b96a503a8b86c6dc50bda48fb7403"
  },
  {
    "url": "assets/js/15.0727d298.js",
    "revision": "d4bda84b8171fb3466624824e999a764"
  },
  {
    "url": "assets/js/150.48d5919d.js",
    "revision": "9bcd75c59e8edbfdc5758ddef3093974"
  },
  {
    "url": "assets/js/151.5a91b536.js",
    "revision": "33ff9960de9f5d70b3fdeb49e67924c5"
  },
  {
    "url": "assets/js/152.6b8c0e88.js",
    "revision": "e74da32e7afeb8908c52a03e7d603301"
  },
  {
    "url": "assets/js/153.88fd1558.js",
    "revision": "0ab3c4f6b86d6a312b3f82d9d647da75"
  },
  {
    "url": "assets/js/154.0ebbebd9.js",
    "revision": "e093a9229ff88eb52d8d1fd051688e6f"
  },
  {
    "url": "assets/js/155.dbc8bfab.js",
    "revision": "bb87c36313556b96b4fad60fe651873b"
  },
  {
    "url": "assets/js/156.d3b6b2bd.js",
    "revision": "aa887d02ed8a225bd95bb34467b4f0b7"
  },
  {
    "url": "assets/js/157.0502ab03.js",
    "revision": "ad46d65578549047fc931546b76cf094"
  },
  {
    "url": "assets/js/158.37fb4931.js",
    "revision": "80a377638a965802b9c4108a6e05a0e7"
  },
  {
    "url": "assets/js/159.c3bc76af.js",
    "revision": "04e1dd9241c010be2a7aa79f4a92fb78"
  },
  {
    "url": "assets/js/16.b82d6f38.js",
    "revision": "fcd5889fb25f1fbcf1c9cbf885507a64"
  },
  {
    "url": "assets/js/160.a95eb075.js",
    "revision": "b049aad489efdaf8a755531eeeedf457"
  },
  {
    "url": "assets/js/161.54aacbc6.js",
    "revision": "313213a68afcaeee3a1630034e4fd5e0"
  },
  {
    "url": "assets/js/162.c4b2f195.js",
    "revision": "729a902069405f999b579f072f2f5a66"
  },
  {
    "url": "assets/js/163.a24a7b11.js",
    "revision": "4d1c694bd20b29a0e0cbf4450a093ed9"
  },
  {
    "url": "assets/js/164.df0511b7.js",
    "revision": "48cbd5d681820492e34b7548b18d6c10"
  },
  {
    "url": "assets/js/165.729f2c7c.js",
    "revision": "946f40fa6b9149f17356b93283918b56"
  },
  {
    "url": "assets/js/166.31076b96.js",
    "revision": "6e2fd0f9441ea699d18cf64cf91f7c18"
  },
  {
    "url": "assets/js/167.b1a90d43.js",
    "revision": "32cf499ff5f1cda51b37217a02bc2469"
  },
  {
    "url": "assets/js/168.2ed9a2d1.js",
    "revision": "f47eed3d05c6f8f6cc2a185973b1ffe3"
  },
  {
    "url": "assets/js/169.3d872f66.js",
    "revision": "566c4106a2795230e4f5076c2f66a251"
  },
  {
    "url": "assets/js/17.1d44e9f2.js",
    "revision": "35bd94f0fe950644a5866ca8aa80426d"
  },
  {
    "url": "assets/js/170.a217e66e.js",
    "revision": "6de90d6a1ed1874b967d1a2ce0787040"
  },
  {
    "url": "assets/js/171.da5be6f7.js",
    "revision": "6100e001dca5cad95c92a0ce7e409350"
  },
  {
    "url": "assets/js/172.dc92cd26.js",
    "revision": "f6d7f69e1810556dbc1c35db64614e34"
  },
  {
    "url": "assets/js/173.bc6c7241.js",
    "revision": "eb2ef132d979f7c967c3d4f2aa2796c6"
  },
  {
    "url": "assets/js/174.dd31d730.js",
    "revision": "6b8e50b9311bf39d61b00047ab3d7399"
  },
  {
    "url": "assets/js/175.e10a43d8.js",
    "revision": "386723aa9f6897ffee46cce8b6204839"
  },
  {
    "url": "assets/js/176.32295232.js",
    "revision": "52c4c553e22e9cd1eb6b2f2416a7ac08"
  },
  {
    "url": "assets/js/177.45316b27.js",
    "revision": "16cff3aacef67fc4b5d9884b963e8e1c"
  },
  {
    "url": "assets/js/178.a2cbb327.js",
    "revision": "57937c842efc941111ff038f81ad0ef0"
  },
  {
    "url": "assets/js/179.9831a7bc.js",
    "revision": "86da0b751b44d390f4eb045ce9f71e60"
  },
  {
    "url": "assets/js/18.9ca347d2.js",
    "revision": "f6a2571189830d38059f05ce1a806c58"
  },
  {
    "url": "assets/js/180.d48fbd3f.js",
    "revision": "2f0782c3f5d901ed753fa1cb8d18ccd0"
  },
  {
    "url": "assets/js/181.72b6425e.js",
    "revision": "724de9e9f0794036dab00444944675d0"
  },
  {
    "url": "assets/js/182.01bb4f87.js",
    "revision": "9f3373ae6666e5723989db8621391264"
  },
  {
    "url": "assets/js/183.7055c9de.js",
    "revision": "387627ff4a32380d04e14ceb2a4eac7f"
  },
  {
    "url": "assets/js/184.ad8f52c6.js",
    "revision": "7862ff0805a6d94b234cec0b8092bc37"
  },
  {
    "url": "assets/js/185.2d8cf943.js",
    "revision": "405ff0a076e37188aa07b3db69ac3a82"
  },
  {
    "url": "assets/js/186.0dc37059.js",
    "revision": "83df7165855c095c63b39aad3eb2fe4a"
  },
  {
    "url": "assets/js/187.e35d8cec.js",
    "revision": "bca680cbc2c08460eeb095fc1e3c6dad"
  },
  {
    "url": "assets/js/188.e1b51c69.js",
    "revision": "126fbb5af4696ed251ac7637f8845460"
  },
  {
    "url": "assets/js/189.6f0c881f.js",
    "revision": "b81ffab11ade8d766db3638248be8709"
  },
  {
    "url": "assets/js/19.8e1b1269.js",
    "revision": "b46d2dec9292a7ff98ae338e740c45ce"
  },
  {
    "url": "assets/js/190.c4e25b35.js",
    "revision": "077709cb255d1bb863401627fb2ccf5c"
  },
  {
    "url": "assets/js/191.25988d34.js",
    "revision": "521397460ff25f9914c3cbbdbb3861f8"
  },
  {
    "url": "assets/js/192.29ff380e.js",
    "revision": "fd808bbb40c7ac82a0b259608e9439bf"
  },
  {
    "url": "assets/js/193.8581b3e0.js",
    "revision": "0071384ced8f1d5a5adfcda673734b35"
  },
  {
    "url": "assets/js/194.2351dc75.js",
    "revision": "d104b47cb07c95e6022d0773cabd0af5"
  },
  {
    "url": "assets/js/195.e371cb46.js",
    "revision": "ae87bf74cfa670fa147db5c90d988113"
  },
  {
    "url": "assets/js/196.87e2b99f.js",
    "revision": "787d507e2be41c2d9501a69333cbfa8c"
  },
  {
    "url": "assets/js/197.a0e72271.js",
    "revision": "23d69d3103646d795ce0b8d0973e28ce"
  },
  {
    "url": "assets/js/198.cde44e77.js",
    "revision": "faf319356a635f297a73bf35c48b4f86"
  },
  {
    "url": "assets/js/199.cdd27f49.js",
    "revision": "92682d1d687e57e0c5c99baabda18ef2"
  },
  {
    "url": "assets/js/20.83d8f04f.js",
    "revision": "219c4392df7d74f7e81a42677ee1ee29"
  },
  {
    "url": "assets/js/200.986bf147.js",
    "revision": "1e837f1533eb3787d022c3d9b8bbce9b"
  },
  {
    "url": "assets/js/201.8289ad40.js",
    "revision": "ae49007c1a80e37667665356a39aed5f"
  },
  {
    "url": "assets/js/202.4826f6f5.js",
    "revision": "62f000622e207f5fab183ab26fe54abb"
  },
  {
    "url": "assets/js/203.ebe723e5.js",
    "revision": "a8e45e8207863d7cec2e187be9c8fc67"
  },
  {
    "url": "assets/js/204.63f63889.js",
    "revision": "4b86f6af22c5cb85faf81daff38fc0db"
  },
  {
    "url": "assets/js/205.e93a80d9.js",
    "revision": "53fbfe858381d17e4de1f7ee34269cfd"
  },
  {
    "url": "assets/js/206.68fc645e.js",
    "revision": "8f644ead4d6614ae0c25fa3741fc037d"
  },
  {
    "url": "assets/js/207.761bfca5.js",
    "revision": "073e7ec33eb08a45fa07848c311074c0"
  },
  {
    "url": "assets/js/208.0f715622.js",
    "revision": "71e7a46a456d9651e1062d1b52d5c7b3"
  },
  {
    "url": "assets/js/209.8d2e6ebd.js",
    "revision": "7885696ac1509fb1596066450b68a8e5"
  },
  {
    "url": "assets/js/21.f2ac8f76.js",
    "revision": "24753e5ec7ab7192de55cc779fd1cdd9"
  },
  {
    "url": "assets/js/210.8bb7cb7d.js",
    "revision": "f7d0b96640cb41d26463ef4fcac4e470"
  },
  {
    "url": "assets/js/211.fc5fce02.js",
    "revision": "a8d24f05e882be686847fb535abfb6e7"
  },
  {
    "url": "assets/js/212.36a2f9f6.js",
    "revision": "a4d5fa23260826f601d99eab3af2a884"
  },
  {
    "url": "assets/js/213.3cca79e3.js",
    "revision": "4217cadada484a3dd9e4c0fb360e4585"
  },
  {
    "url": "assets/js/214.0972cb79.js",
    "revision": "2e5ee3a1abcf4256cad54d6cc26db3e3"
  },
  {
    "url": "assets/js/215.08af8639.js",
    "revision": "cc45e8808ba53c4689700012974c0986"
  },
  {
    "url": "assets/js/216.bfe1c182.js",
    "revision": "9cf2c35e83b91cf74a7fb4a2368b30c3"
  },
  {
    "url": "assets/js/217.39352352.js",
    "revision": "34d446961a5cfd43528e97fdd94d8afa"
  },
  {
    "url": "assets/js/218.7476a006.js",
    "revision": "40616699fd77e0f02947ea3c4b997750"
  },
  {
    "url": "assets/js/219.13a4e4e3.js",
    "revision": "34fac09faeb13ab55d222d332f1c8130"
  },
  {
    "url": "assets/js/22.487afd95.js",
    "revision": "0c0d51b7b42403a311c9ceba000f042a"
  },
  {
    "url": "assets/js/220.644a9915.js",
    "revision": "27cfd5c65aa061909f4eb6cf73451042"
  },
  {
    "url": "assets/js/221.0f40195c.js",
    "revision": "d2f4392d6962f6b833e2d88ee4d196f8"
  },
  {
    "url": "assets/js/222.3ad8950d.js",
    "revision": "482b39bbfa3640ae95c2927b8f463a98"
  },
  {
    "url": "assets/js/223.85ef1540.js",
    "revision": "94678218631c19ee3234735f909a7470"
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
    "url": "assets/js/27.3dd9d55b.js",
    "revision": "7605fe3b5d40bd8793d98bb8cb5134d2"
  },
  {
    "url": "assets/js/28.9d8aa8ac.js",
    "revision": "cd03b3468adb53dc390f460cc4377fee"
  },
  {
    "url": "assets/js/29.c3246eac.js",
    "revision": "1031ca89ef260ff618ef9fedf4cc66cb"
  },
  {
    "url": "assets/js/3.03b8f943.js",
    "revision": "737a431cc8030315950311ca7b95026a"
  },
  {
    "url": "assets/js/30.5249c517.js",
    "revision": "056230725bde40be120cc991d9e7cb72"
  },
  {
    "url": "assets/js/31.142fb64f.js",
    "revision": "a07d581e2eacf55fe84dda3f8dbd1dee"
  },
  {
    "url": "assets/js/32.b747d335.js",
    "revision": "b371f77cd2a9d546a1ef94c57b871700"
  },
  {
    "url": "assets/js/33.ce56f90b.js",
    "revision": "2b509fcc7e757928745836dd383618c0"
  },
  {
    "url": "assets/js/34.d1630693.js",
    "revision": "b4b72957488fd33143cfbc87e9d14600"
  },
  {
    "url": "assets/js/35.cec93a6d.js",
    "revision": "1635a117cfa629974866f7c5e080d17a"
  },
  {
    "url": "assets/js/36.f9348fee.js",
    "revision": "41909cffebe14044519ce2fb64361474"
  },
  {
    "url": "assets/js/37.5f3be3f4.js",
    "revision": "66fa3aca65f23841e22e7fb1f7b405fb"
  },
  {
    "url": "assets/js/38.7bd21d49.js",
    "revision": "7610e2f432721143a81fd6cea4ee6faa"
  },
  {
    "url": "assets/js/39.5aad70da.js",
    "revision": "d480864c0da5517b4d2fa5d7629480a8"
  },
  {
    "url": "assets/js/4.ec8238cb.js",
    "revision": "107d56e1f2f07697778f23d95805bcd5"
  },
  {
    "url": "assets/js/40.3fc5d959.js",
    "revision": "85195ebf699982cea30b386a177eae87"
  },
  {
    "url": "assets/js/41.31c80fa6.js",
    "revision": "212f6e2d0692aa313bd2957079af54c8"
  },
  {
    "url": "assets/js/42.ea849bee.js",
    "revision": "e25020089a0d9d16ef0c762f2c27bca1"
  },
  {
    "url": "assets/js/43.b7a1f86e.js",
    "revision": "90ac1710caebac649d4148cb7247bc9b"
  },
  {
    "url": "assets/js/44.eb50bcce.js",
    "revision": "43d343a2c0bab2d7d5a9a32d84e100fa"
  },
  {
    "url": "assets/js/45.14bb0184.js",
    "revision": "afe392c8c52dcce45dada60e9c2be06b"
  },
  {
    "url": "assets/js/46.c6463346.js",
    "revision": "a53df765bcc6ff83040be71272353f91"
  },
  {
    "url": "assets/js/47.39286241.js",
    "revision": "389bbac7bccc98b46e7d512beba3723a"
  },
  {
    "url": "assets/js/48.85776129.js",
    "revision": "51692b2b083cbf6a265bd806caf16a50"
  },
  {
    "url": "assets/js/49.14c18272.js",
    "revision": "beda7c9ff34a1223df8a0a11a4b89902"
  },
  {
    "url": "assets/js/5.a53ea690.js",
    "revision": "d0d4dc19de111f7311c55ac963d410fc"
  },
  {
    "url": "assets/js/50.02012b8c.js",
    "revision": "4f61b355ad22a2be9ee40f8a3f323ccd"
  },
  {
    "url": "assets/js/51.7994c93a.js",
    "revision": "c75ef917696de464e50de1dec187811f"
  },
  {
    "url": "assets/js/52.70705de2.js",
    "revision": "3189d7342b19a7fc0126412c34b6b0d8"
  },
  {
    "url": "assets/js/53.d0c300c3.js",
    "revision": "3fbacefac0c34bb3c1783a3ee02a2ed5"
  },
  {
    "url": "assets/js/54.5d30e396.js",
    "revision": "9802ce8d79ebee9bc8b69cb550dc74d7"
  },
  {
    "url": "assets/js/55.748e8f50.js",
    "revision": "a27cbc4c34e1395cffc6c2b798922c5a"
  },
  {
    "url": "assets/js/56.2efc2837.js",
    "revision": "524c126932b339e3aab9c3120fa95f68"
  },
  {
    "url": "assets/js/57.b5490e73.js",
    "revision": "09a34594adee6a5cdf52c4049773a099"
  },
  {
    "url": "assets/js/58.0490ccf0.js",
    "revision": "55d5521a42cf2f5475d15b2f55d8f21b"
  },
  {
    "url": "assets/js/59.0901c838.js",
    "revision": "890553d830c83037f433bb95afce5e3e"
  },
  {
    "url": "assets/js/6.5532b0c7.js",
    "revision": "bbc667e24f257650e6fa7786b221774b"
  },
  {
    "url": "assets/js/60.d0f8df08.js",
    "revision": "d10f8c14e2ecdda820ea551c533f5241"
  },
  {
    "url": "assets/js/61.81345526.js",
    "revision": "dc9d23d17a346824afaa8325e0b56df0"
  },
  {
    "url": "assets/js/62.34444ce7.js",
    "revision": "93b2fd6de52c4ac057f44464c83a2eb0"
  },
  {
    "url": "assets/js/63.eacb4e6c.js",
    "revision": "8898dc5e8bb0996b066338ac6a86b0c7"
  },
  {
    "url": "assets/js/64.7977efe4.js",
    "revision": "4e1076f37d2e1db92db28d87254f8e43"
  },
  {
    "url": "assets/js/65.8d9ca6fa.js",
    "revision": "924308b54c490d336d259d981f969a84"
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
    "url": "assets/js/69.682330cd.js",
    "revision": "5e6d90b88bbb8a747ae8361d433c4a27"
  },
  {
    "url": "assets/js/7.90373899.js",
    "revision": "ba632ee6651c5150a50c93eb8873f6f9"
  },
  {
    "url": "assets/js/70.31cbf7fb.js",
    "revision": "df7e816fc2c8540c4536cfb954e0c2f2"
  },
  {
    "url": "assets/js/71.b000ef0a.js",
    "revision": "da080e5e32b726f9f2b5a9b749ed3d55"
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
    "url": "assets/js/74.2aa57466.js",
    "revision": "a012cf0c9fabc2eb4ef4394f053ee5d4"
  },
  {
    "url": "assets/js/75.402c1138.js",
    "revision": "8da4bb48e483eb194cb4a0a09a971428"
  },
  {
    "url": "assets/js/76.28493260.js",
    "revision": "7d48a96813d6cdc577c998e27a49f94d"
  },
  {
    "url": "assets/js/77.272c14a6.js",
    "revision": "0ec270b74099f05682c8a20b9498e71d"
  },
  {
    "url": "assets/js/78.fdd2b0ab.js",
    "revision": "530c5f2edfba9b8a7c1b1dd885f20ffb"
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
    "url": "assets/js/80.0961b3f0.js",
    "revision": "4a5d6a4afed19863eba9a7b6534f2b7b"
  },
  {
    "url": "assets/js/81.3aa3c893.js",
    "revision": "bf71923b5df478045971c3ae355692c2"
  },
  {
    "url": "assets/js/82.af03ebce.js",
    "revision": "c0cd3965cb67ce833f04a9ddc5d88003"
  },
  {
    "url": "assets/js/83.4bed7a04.js",
    "revision": "af2b1032e6154620e52c98fc7c977916"
  },
  {
    "url": "assets/js/84.dec19c14.js",
    "revision": "83c7c13fb27442769f5221e05c6ed373"
  },
  {
    "url": "assets/js/85.bb610f56.js",
    "revision": "3c87731ece31a1fbbe5fb8bdddc4669e"
  },
  {
    "url": "assets/js/86.91a99844.js",
    "revision": "949e742cc324f7babad36c36adff1ce5"
  },
  {
    "url": "assets/js/87.6dccf705.js",
    "revision": "fca1c1bd933012bf450750676338d173"
  },
  {
    "url": "assets/js/88.9f052c60.js",
    "revision": "08d72560169e661baa44e8bee8488a74"
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
    "url": "assets/js/90.6b496e9d.js",
    "revision": "d3b79f3cc7462b5a6e4164a113543097"
  },
  {
    "url": "assets/js/91.057270fa.js",
    "revision": "6c457b71a6c4b3be9423c507d910167c"
  },
  {
    "url": "assets/js/92.df551a2b.js",
    "revision": "b0d2663bf2fbe0cf7a830fd336411cde"
  },
  {
    "url": "assets/js/93.168ca1ec.js",
    "revision": "4f7a99d74d060377615e70707c15b9e3"
  },
  {
    "url": "assets/js/94.6c6b0b66.js",
    "revision": "4e86c97ff13264f696644c0a1a7feb0f"
  },
  {
    "url": "assets/js/95.3169b572.js",
    "revision": "4922ebe330710f7a5cde46a4016e6ad4"
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
    "url": "assets/js/98.71c20909.js",
    "revision": "8f0dd584b43333c9c53cc558eb6989bf"
  },
  {
    "url": "assets/js/99.2eb1e379.js",
    "revision": "109a11fe9bd29170b21d8bc79d64d0e9"
  },
  {
    "url": "assets/js/app.d0c5aba9.js",
    "revision": "5ffe0d0beb8234a1f3b163db9ef7c00e"
  },
  {
    "url": "author.jpeg",
    "revision": "7e1bfc6337e85b76f0f6e95859ed93d6"
  },
  {
    "url": "basis/algorithms/index.html",
    "revision": "f0a13044d702b046470f245cb0243fab"
  },
  {
    "url": "basis/algorithms/t1-buble-sort.html",
    "revision": "4406e5e76359c3b91fab336d85450f2a"
  },
  {
    "url": "basis/algorithms/t2-selection-sort.html",
    "revision": "119f75194c83093a10239b25ac031f39"
  },
  {
    "url": "basis/algorithms/t3-insertion-sort.html",
    "revision": "c93e650478506ef2813873d64c0ef97e"
  },
  {
    "url": "basis/algorithms/t4-shell-sort.html",
    "revision": "3886471d0d6eb1655766508f174caf58"
  },
  {
    "url": "basis/algorithms/t5-quick-sort.html",
    "revision": "9e61f8c0872a1571c47c7dff1ab09b9b"
  },
  {
    "url": "basis/algorithms/t6-heap-sort.html",
    "revision": "1207883217a17e956c6e36ed1a8e914a"
  },
  {
    "url": "basis/algorithms/t7-merge-sort.html",
    "revision": "6597e39998c1787438efd67f50e329a0"
  },
  {
    "url": "basis/algorithms/t8-radix-sort.html",
    "revision": "c5d01aa438104820ccb6eaca6814dffd"
  },
  {
    "url": "basis/algorithms/t9-count-sort.html",
    "revision": "ce187e3a0a5b9f3516b3cb02f4b7c8a1"
  },
  {
    "url": "basis/algorithms/u1-bucket-sort.html",
    "revision": "89223023f11e1f18f976a4783438e308"
  },
  {
    "url": "basis/cmake/01-basic/A-hello-cmake.html",
    "revision": "23bf6d25f510af9a9b043c476064603c"
  },
  {
    "url": "basis/cmake/01-basic/B-hello-headers.html",
    "revision": "23247bcf47e8969f8e3efcd88cec865a"
  },
  {
    "url": "basis/cmake/01-basic/C-static-library.html",
    "revision": "b1b035e532d2b8e9ad4f644aad887fc5"
  },
  {
    "url": "basis/cmake/01-basic/D-shared-library.html",
    "revision": "56ec31462b4b552cb31ca35b580dd9fd"
  },
  {
    "url": "basis/cmake/01-basic/E-installing.html",
    "revision": "d1778895b03d01ba6db52c632b46599c"
  },
  {
    "url": "basis/cmake/01-basic/F-build-type.html",
    "revision": "239692858c2422acb879ee3cb1301f45"
  },
  {
    "url": "basis/cmake/01-basic/G-compile-flags.html",
    "revision": "9760fde7eb61e67bc2ae209e7dba6a6a"
  },
  {
    "url": "basis/cmake/01-basic/H-third-party-library.html",
    "revision": "492429c010853deb63ea71c9ae605460"
  },
  {
    "url": "basis/cmake/01-basic/I-compiling-with-clang.html",
    "revision": "a7699548ec2b924a1c97098727097aa9"
  },
  {
    "url": "basis/cmake/01-basic/index.html",
    "revision": "f757697c593a52031f5662da5f5bc07e"
  },
  {
    "url": "basis/cmake/01-basic/J-building-with-ninja.html",
    "revision": "51ae5f890171228cc80e26ac8c410d65"
  },
  {
    "url": "basis/cmake/01-basic/K-imported-targets.html",
    "revision": "4e16cabe9977611c30ea5e2765a5c4f3"
  },
  {
    "url": "basis/cmake/01-basic/L-cpp-standard.html",
    "revision": "cf3cf4af362afb37afae049da8d616d4"
  },
  {
    "url": "basis/cmake/index.html",
    "revision": "ac79ccb061d662c06467bdb5b00200a2"
  },
  {
    "url": "basis/design-patterns/AdapterPattern.html",
    "revision": "710a61b35a76b6e59e0ed14f3ff3ab8f"
  },
  {
    "url": "basis/design-patterns/BridgePattern.html",
    "revision": "395cfe2d5685c03261f4af3776d89d86"
  },
  {
    "url": "basis/design-patterns/BuilderPattern.html",
    "revision": "cc3cfc4a4e0058b4771a5808dd460970"
  },
  {
    "url": "basis/design-patterns/ChainOfResponsibilityPattern.html",
    "revision": "619dd065743c05b4afb31435412fc691"
  },
  {
    "url": "basis/design-patterns/ClassReleation.html",
    "revision": "a94f9a34588695cea8870041fefd26f8"
  },
  {
    "url": "basis/design-patterns/CommandPattern.html",
    "revision": "9ca69fdfe252c5e2c09f58857b94ce89"
  },
  {
    "url": "basis/design-patterns/CompositePattern.html",
    "revision": "d8d4df541b5b811fdcc74757474ca2ea"
  },
  {
    "url": "basis/design-patterns/DecoratorPattern.html",
    "revision": "c9b377f2bf4a8cf95468e5b81ee7ec74"
  },
  {
    "url": "basis/design-patterns/DesignPrinciples.html",
    "revision": "f4102ae1bbf96ea71e6466c1478d000b"
  },
  {
    "url": "basis/design-patterns/FacadePattern.html",
    "revision": "24df3bc9f69741917b1508010f69e251"
  },
  {
    "url": "basis/design-patterns/FactoryPattern.html",
    "revision": "1a06f3667aba37ef4d125c8a82cc2e10"
  },
  {
    "url": "basis/design-patterns/FilterCriteriaPattern.html",
    "revision": "135d56552495595a17d1b334cdaf845c"
  },
  {
    "url": "basis/design-patterns/FlyweightPattern.html",
    "revision": "cb046934c7c2e227b9c2a1bbcbedb62e"
  },
  {
    "url": "basis/design-patterns/index.html",
    "revision": "41a6477b177582dbf4d00d30fdfc0841"
  },
  {
    "url": "basis/design-patterns/InterpreterPattern.html",
    "revision": "3459ab7dfbce429eac8010fff7c319db"
  },
  {
    "url": "basis/design-patterns/IteratorPattern.html",
    "revision": "812754c47c2010394f8d3ac269bdd85e"
  },
  {
    "url": "basis/design-patterns/MediatorPattern.html",
    "revision": "3a21478a69e8be8e3402a1994cacc52f"
  },
  {
    "url": "basis/design-patterns/MementoPattern.html",
    "revision": "db6d575233af9eb0272443b2bce63bfd"
  },
  {
    "url": "basis/design-patterns/NullObjectPattern.html",
    "revision": "68c4be6a5f1d321c6a145e1d8b98e49f"
  },
  {
    "url": "basis/design-patterns/ObserverPattern.html",
    "revision": "a06a9259eec71698d9c2a90b5d3176ac"
  },
  {
    "url": "basis/design-patterns/PrototypePattern.html",
    "revision": "8873737cb45cf0b8dc70cdf182bdaf61"
  },
  {
    "url": "basis/design-patterns/ProxyPattern.html",
    "revision": "8ef1d1275ecb4da786a68a2102483c7d"
  },
  {
    "url": "basis/design-patterns/SingletonPattern.html",
    "revision": "b47dd189b3420461a6290c60be3bf80d"
  },
  {
    "url": "basis/design-patterns/StatePattern.html",
    "revision": "5238f3bd30c72ac92074e602693e85b1"
  },
  {
    "url": "basis/design-patterns/StrategyPattern.html",
    "revision": "61026e151998719b8203bad678c93ee8"
  },
  {
    "url": "basis/design-patterns/TemplatePattern.html",
    "revision": "dc5ea8abd9b8c4765572564daa66711e"
  },
  {
    "url": "basis/design-patterns/VisitorPattern.html",
    "revision": "298386f4102f2ffbc07f584d5d23f903"
  },
  {
    "url": "basis/index/index.html",
    "revision": "c53c530e62ef4012b9bc09fcde956a4f"
  },
  {
    "url": "basis/os/index.html",
    "revision": "baff05f6f9005a9b5247ace3ea00051a"
  },
  {
    "url": "book/index.html",
    "revision": "264073a3bbba53437ab1bc3db5a3854f"
  },
  {
    "url": "book/t-find-books.html",
    "revision": "4dfe94155743e5c7ac37d715bc776c23"
  },
  {
    "url": "categories/index.html",
    "revision": "4db2fd37844e0a5d4484670197d49485"
  },
  {
    "url": "figma/index.html",
    "revision": "4b6cd97cba1288d7d4a39301f0719991"
  },
  {
    "url": "flutter/index.html",
    "revision": "b1e7643ff4aae34f64ac5d7523c711a5"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "19cf8e318907e7768fc9af7425d75d90"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "76952acda1a21a9a187103930e9f8199"
  },
  {
    "url": "flutter/t3-messages.html",
    "revision": "99cf9da229ba0dd02c284794fb44386c"
  },
  {
    "url": "flutter/t3-mixin.html",
    "revision": "cf7c94dd02cbd942581c501fecca1530"
  },
  {
    "url": "flutter/t4-lifecycle.html",
    "revision": "0d89e40cbaf427c4245a2a2f62c5261a"
  },
  {
    "url": "flutter/t5-flutter-web-deploy.html",
    "revision": "e45053b29c5597cf15cca547e88ac0fc"
  },
  {
    "url": "flutter/t6-docker-web-deploy.html",
    "revision": "18e92b84ee7c8f4211a7ace0e3f4d048"
  },
  {
    "url": "flutter/t7-fvm.html",
    "revision": "534e1f978cfff48094432c51e858a92f"
  },
  {
    "url": "flutter/t8-const.html",
    "revision": "f567f3b0796de5cef536ab17a52d35a7"
  },
  {
    "url": "flutter/t9-logs.html",
    "revision": "0fd67104cb0f6636714bb8a73dfb8d7a"
  },
  {
    "url": "flutter/u10-fvm-flutter2.html",
    "revision": "e8555d69f1457f1ff23378984caa74db"
  },
  {
    "url": "flutter/u11-flutter-render.html",
    "revision": "1e141e0c276d6875990ffcbc0f699a03"
  },
  {
    "url": "flutter/u12-flutter-create-w.html",
    "revision": "6ad8feb55fa29941b742ee132320303e"
  },
  {
    "url": "flutter/u12-flutter-web-01.html",
    "revision": "c346a07b218432ee9951420470cac6e8"
  },
  {
    "url": "flutter/u12-flutter-web-02.html",
    "revision": "2eb0d89a338efbce4bc258ec87d71030"
  },
  {
    "url": "flutter/u13-sliverappbar.html",
    "revision": "d949d90c80381720d7718fa45eeddf00"
  },
  {
    "url": "flutter/u14-navbar-color.html",
    "revision": "101a3081331c1c7f7e3e482e7b552f5f"
  },
  {
    "url": "flutter/u15-custom-nabar.html",
    "revision": "3e6d496d6d92caaf750cf796d22d7e0f"
  },
  {
    "url": "flutter/u16-shape.html",
    "revision": "d6eb8740617fd52c0dc4a9ca10939714"
  },
  {
    "url": "flutter/y1-statubar.html",
    "revision": "415cd67449668fd8c2b47c99fbf509d8"
  },
  {
    "url": "haskell/1-install.html",
    "revision": "4cece2dea0b1eb878fee6ab0574a989a"
  },
  {
    "url": "haskell/2-vscode.html",
    "revision": "b5cc4646e691255ccd9a74be10c1c5ea"
  },
  {
    "url": "haskell/3-pktool.html",
    "revision": "e5f654071ef95ae437a76ecb56724f23"
  },
  {
    "url": "haskell/4-digui.html",
    "revision": "3b2eaa6e9b1ea99a1181f03111223851"
  },
  {
    "url": "haskell/index.html",
    "revision": "6e90c149d90a1c10a3359011914d7763"
  },
  {
    "url": "index.html",
    "revision": "6d34987a9039ae84250fe1da2594e4de"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "python/1-file-map.html",
    "revision": "68ac614e3eff52308b8ea3e01eca966b"
  },
  {
    "url": "python/2-mongo-random.html",
    "revision": "a0bcfe6da84c0dc1dd6b86b3df9b8062"
  },
  {
    "url": "python/3-page-upload.html",
    "revision": "7bfb7fe10f7a4b967b520424d33cac68"
  },
  {
    "url": "python/4-bt-flask.html",
    "revision": "c23876d397abfd721bcc040c09d98ece"
  },
  {
    "url": "python/index.html",
    "revision": "f2297d454bc2682212488296d2bae74b"
  },
  {
    "url": "swift/better/autoclosure.html",
    "revision": "fe355c801511cd3a26a84065f1072874"
  },
  {
    "url": "swift/better/available.html",
    "revision": "7dd8c012c576d7b73919e829c8752df2"
  },
  {
    "url": "swift/better/chain.html",
    "revision": "89844d7c48c3b7a107f965f13eaa5a11"
  },
  {
    "url": "swift/better/copy-in-copy-out.html",
    "revision": "36af20c877dcc1a6ca67d2f272f89c6e"
  },
  {
    "url": "swift/better/Copy-On-Write.html",
    "revision": "6f7aac876d0a23f35b07635d94de420d"
  },
  {
    "url": "swift/better/di.html",
    "revision": "312e75a18526d669db6e14c706e389e7"
  },
  {
    "url": "swift/better/last.html",
    "revision": "e487eed5a065a193a59e3b3b3601d579"
  },
  {
    "url": "swift/better/lazy.html",
    "revision": "bde6b1a4b4a26f0279500d3cc55bc3a8"
  },
  {
    "url": "swift/better/protocol.html",
    "revision": "7ddaceee857d5cc52814a67ddd5150d1"
  },
  {
    "url": "swift/fp/index.html",
    "revision": "c1a8b320688ed817672b08080f9cdd8a"
  },
  {
    "url": "swift/fp/t1-fp.html",
    "revision": "2e6b006ce598228d7661660d5a4b397e"
  },
  {
    "url": "swift/fp/t2-lens.html",
    "revision": "5c75492fa8ec044fc1c745097c6daa2d"
  },
  {
    "url": "swift/fp/t3-json1.html",
    "revision": "676260f4be6ebf7e58f08b14e25f52b7"
  },
  {
    "url": "swift/fp/t3-json2.html",
    "revision": "03fa04a88b74f493faf53a64f53dd25a"
  },
  {
    "url": "swift/fp/t3-json3.html",
    "revision": "443c7763a3a64f56acc357fefd4ec35f"
  },
  {
    "url": "swift/fp/t4-length.html",
    "revision": "d26d876a409dca9d53f146f61457beed"
  },
  {
    "url": "swift/ios/index.html",
    "revision": "520192098a3e7d5c07cc5898af81ac53"
  },
  {
    "url": "swift/ios/t1-pod-webp.html",
    "revision": "6a691cd0737e399057db0f5fbfa92048"
  },
  {
    "url": "swift/ios/t2-youhua.html",
    "revision": "68c5dec96afe70064ed04dfd6e5edf75"
  },
  {
    "url": "swift/swiftui/ActionSheet.html",
    "revision": "f274b088613a97bca37b3158e71b7d7f"
  },
  {
    "url": "swift/swiftui/Alert.html",
    "revision": "b9505a7c1e99d0f3d2ffc0ec073513f0"
  },
  {
    "url": "swift/swiftui/AnyGesture.html",
    "revision": "cac90d290bd2a304713c9335577c7ab4"
  },
  {
    "url": "swift/swiftui/Bindings.html",
    "revision": "a951846f8d83d95e230826d5578f712b"
  },
  {
    "url": "swift/swiftui/Button.html",
    "revision": "866646901217b308c41881e531a0f050"
  },
  {
    "url": "swift/swiftui/DatePicker.html",
    "revision": "4ec98fb7d319b9643a8d8adfda7d65f3"
  },
  {
    "url": "swift/swiftui/DragGesture.html",
    "revision": "89fe083a694a114e76ba808dcb9dcabf"
  },
  {
    "url": "swift/swiftui/DynamicNavigationDestinationLink.html",
    "revision": "76457b19e832374b52f740164dcbd074"
  },
  {
    "url": "swift/swiftui/EditButton.html",
    "revision": "4c43818194ac4c5016c4c89864ce2c0c"
  },
  {
    "url": "swift/swiftui/Environment.html",
    "revision": "1d3c893502e32c444afef18d1c19e14a"
  },
  {
    "url": "swift/swiftui/EnvironmentObject.html",
    "revision": "8571ff995ca7dcc70b1d171fb3617c94"
  },
  {
    "url": "swift/swiftui/EnvironmentValues.html",
    "revision": "d4ed821e1e9cfbf3e3046fbf05a013a6"
  },
  {
    "url": "swift/swiftui/ExclusiveGesture.html",
    "revision": "30085eb9233f3ae9810d351f75638038"
  },
  {
    "url": "swift/swiftui/ForEach.html",
    "revision": "048167c2384a75f4ea3e8d1c2bcec37d"
  },
  {
    "url": "swift/swiftui/Form.html",
    "revision": "88eeaedd95bab72a3cf7ce49234fa0bf"
  },
  {
    "url": "swift/swiftui/GeometryReader.html",
    "revision": "05bb6b538c879d89675746b60830b22e"
  },
  {
    "url": "swift/swiftui/Group.html",
    "revision": "035f327d34ebcef9305ea9354964ea8e"
  },
  {
    "url": "swift/swiftui/GroupBox.html",
    "revision": "b8e5715a8fd38dd0abe9e56f13943411"
  },
  {
    "url": "swift/swiftui/HSplitView.html",
    "revision": "84663e1a1c579c3f1405633ac24bdab4"
  },
  {
    "url": "swift/swiftui/HStack.html",
    "revision": "87c720a9eee9d929f190bc4c24739b27"
  },
  {
    "url": "swift/swiftui/Image.html",
    "revision": "2839456adbb9eb3e154adfc0c54ba450"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "ba56086f3f807726b0afa7d678e6c35a"
  },
  {
    "url": "swift/swiftui/ItemBasedPopUpButton.html",
    "revision": "83ec219065c53c0a11aae16d2b10c398"
  },
  {
    "url": "swift/swiftui/List.html",
    "revision": "161b2183c2c5bab97ad347c3946deeb2"
  },
  {
    "url": "swift/swiftui/LocalizedStringKey.html",
    "revision": "fa36d3112224c7bb6c13ca677cfccc7c"
  },
  {
    "url": "swift/swiftui/LongPressGesture.html",
    "revision": "1345711b65dd4c96657f24edb7dac8b0"
  },
  {
    "url": "swift/swiftui/MagnificationGesture.html",
    "revision": "2db73aaa50638dadd3ef4fcdcdc2d8cd"
  },
  {
    "url": "swift/swiftui/Modal.html",
    "revision": "9be1287536a035757cd6b85e8ee329bc"
  },
  {
    "url": "swift/swiftui/NavigationButton.html",
    "revision": "a1b7a20c0c042a162874d4b873a5d751"
  },
  {
    "url": "swift/swiftui/NavigationView.html",
    "revision": "fa15b6359ef831b6d05d3548a38383c8"
  },
  {
    "url": "swift/swiftui/ObjectBinding.html",
    "revision": "a70287a4dee9e7b7a8ec859a66bd9563"
  },
  {
    "url": "swift/swiftui/PasteButton.html",
    "revision": "4a285726747cbd95316af92b1e54d904"
  },
  {
    "url": "swift/swiftui/Picker.html",
    "revision": "d42be3cf49e15fa60e9c24494b0616fb"
  },
  {
    "url": "swift/swiftui/Popover.html",
    "revision": "369893ab3d6233640c3ac7a4c1b4c57f"
  },
  {
    "url": "swift/swiftui/PreferenceKey.html",
    "revision": "2659cfcbfc154d1c8f145799c2d56bf4"
  },
  {
    "url": "swift/swiftui/PresentationButton.html",
    "revision": "efe24e12176c93a4c85a597e4c4d0eea"
  },
  {
    "url": "swift/swiftui/Principle01.html",
    "revision": "28a437283b408df1cf37ffa448dc92b8"
  },
  {
    "url": "swift/swiftui/Principle02.html",
    "revision": "f11649a835cb12c58478f6cc3c0f9182"
  },
  {
    "url": "swift/swiftui/Principle03.html",
    "revision": "5e45d35be7480c69ff7fa1c2e9fb9b96"
  },
  {
    "url": "swift/swiftui/Principle04.html",
    "revision": "c87c5dffec540678b1496ffea6097161"
  },
  {
    "url": "swift/swiftui/Principle05.html",
    "revision": "cab9a045f01a98a45021e0fd3571d617"
  },
  {
    "url": "swift/swiftui/Principle06.html",
    "revision": "766e0b81d66771fd21f54651f05ff460"
  },
  {
    "url": "swift/swiftui/PullDownButton.html",
    "revision": "2efbb901222ceee62e5e8be1990f87a3"
  },
  {
    "url": "swift/swiftui/RotationGesture.html",
    "revision": "7386d065644826c51002d07caa9b663c"
  },
  {
    "url": "swift/swiftui/ScrollView.html",
    "revision": "60bb3635bac5a93ca3eca766be3871b7"
  },
  {
    "url": "swift/swiftui/Section.html",
    "revision": "59b66e521915aa797d8e3952c0405858"
  },
  {
    "url": "swift/swiftui/SecureField.html",
    "revision": "85415223d23ea04bb5d2aacec529df8d"
  },
  {
    "url": "swift/swiftui/SegmentedControl.html",
    "revision": "fa4d118bfdeac29834699ca04f783289"
  },
  {
    "url": "swift/swiftui/SequenceGesture.html",
    "revision": "d5f632a7fbd089c9f5a2990b678f59e8"
  },
  {
    "url": "swift/swiftui/Sheet.html",
    "revision": "57bff1175ef56c151ce04fbed53bd0af"
  },
  {
    "url": "swift/swiftui/SimultaneousGesture.html",
    "revision": "33aeaf10af1d980093fa22e09bd3f6b2"
  },
  {
    "url": "swift/swiftui/Slider.html",
    "revision": "a6e688d1049c52f3cb7203788a5a2fce"
  },
  {
    "url": "swift/swiftui/Stacks.html",
    "revision": "43a4ab8c1607bf0ac64b95f150ebc9ad"
  },
  {
    "url": "swift/swiftui/State.html",
    "revision": "596d4f4f60bf927366541e81b0e2d27a"
  },
  {
    "url": "swift/swiftui/Stepper.html",
    "revision": "8349f0af88d1e9dcb3c29c0c8e71bd8b"
  },
  {
    "url": "swift/swiftui/Strideable.html",
    "revision": "e40467953dd7192008dc56c6ed9ea43e"
  },
  {
    "url": "swift/swiftui/TabView.html",
    "revision": "492b16b8852cc1f82f012f513a36573d"
  },
  {
    "url": "swift/swiftui/TapGesture.html",
    "revision": "1469921730744de0e772e184d0a3476c"
  },
  {
    "url": "swift/swiftui/Text.html",
    "revision": "7feb86e963719600e4a626b9c84c2eaf"
  },
  {
    "url": "swift/swiftui/TextField.html",
    "revision": "e342d068b9942b30e969e352d418d6f2"
  },
  {
    "url": "swift/swiftui/Toggle.html",
    "revision": "46bf2ee6be403cccf19ee70c64ad15f9"
  },
  {
    "url": "swift/swiftui/Transaction.html",
    "revision": "27c8aedf0eedc8697daa6461f77f6ce5"
  },
  {
    "url": "swift/swiftui/UIViewController.html",
    "revision": "f599e4023bc9dd60169615d1da562276"
  },
  {
    "url": "swift/swiftui/ViewModifier.html",
    "revision": "b3dd59ed4fe53b0698c7875033bb95f8"
  },
  {
    "url": "swift/swiftui/VSplitView.html",
    "revision": "37a34c675bb3443068810106206d0c3f"
  },
  {
    "url": "swift/swiftui/VStack.html",
    "revision": "afb2b5d95dc46ad97b7a594f8dc8cf1c"
  },
  {
    "url": "swift/swiftui/WebImage.html",
    "revision": "6b87b47c713cebb6af70b0b79aa2e455"
  },
  {
    "url": "swift/swiftui/WebView.html",
    "revision": "5fecc64c8871adc92ceb9ede1e8e6ad4"
  },
  {
    "url": "swift/swiftui/ZStack.html",
    "revision": "882fac739e30152966da7b1fd9c4bd03"
  },
  {
    "url": "swift/tips/index.html",
    "revision": "41c0b35aa373aa1fd84152fbfc25f5b8"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "905235dd06a04bf62499f469ced8ec5c"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "6185c60328f9c15211fcfec32cb6ab90"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "8762a6e3a690bfddd617bf690dd8348f"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "cdc87265979fe54741acda450ef8d279"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "b07e643f1355d7b1c20cc713be5f302f"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "b38ff1c36f0c1b37097eccfe49f3977f"
  },
  {
    "url": "swift/vapor/t6-say-oldbirds.html",
    "revision": "d0755aef3792d0d42b5b56313b315aca"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "ea9eca4646727b2e083b3d371dfe9b3e"
  },
  {
    "url": "swift/vapor/u-11-auth.html",
    "revision": "1f462ca65784b1e5b60c53125921779c"
  },
  {
    "url": "swift/vapor/u-12-permission.html",
    "revision": "f1f564c44592470956926177a50bcfd0"
  },
  {
    "url": "swift/vapor/v-20-read-code.html",
    "revision": "ff732d144862bc33208d9f96243443cc"
  },
  {
    "url": "swift/vapor/v-21-io.html",
    "revision": "e92674a0eed0e5b6519fa431c9e97b3a"
  },
  {
    "url": "swift/vapor/v-22-bio2.html",
    "revision": "8acff6ecb4f409d65b63b7a5f5d4a8e3"
  },
  {
    "url": "swift/vapor/v-23-swiftnio-do-text.html",
    "revision": "ce55e07c0192ee8c3c6b3855a36676af"
  },
  {
    "url": "swift/vapor/v-24-swift-zhan-package.html",
    "revision": "4364adba12eaefd3604f361702e26b01"
  },
  {
    "url": "swift/vapor/v-25-swiftnio-do-serisize.html",
    "revision": "ec97cedf30b71ab7f489740fcf8dbc6d"
  },
  {
    "url": "swift/vapor/v-26-swfitnio-grpc-1.html",
    "revision": "58b79a0c36c0fba2a2b615c537937444"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/ai/index.html",
    "revision": "ef67319ee685ef092d1df39e06955172"
  },
  {
    "url": "tag/flask/index.html",
    "revision": "1a2bb82115f0c1a8c1b1736360658f65"
  },
  {
    "url": "tag/flutter/index.html",
    "revision": "6965697493d07f8c35248c65201e7ea4"
  },
  {
    "url": "tag/flutter/page/2/index.html",
    "revision": "997976bbef85dc7f0aaa6bc24e8b2fc0"
  },
  {
    "url": "tag/flutter/page/3/index.html",
    "revision": "27cae2e7bd9870b967a3d71c00d4c598"
  },
  {
    "url": "tag/git/index.html",
    "revision": "33a8c445ba9c8fafd02dc129928d58ab"
  },
  {
    "url": "tag/haskell/index.html",
    "revision": "f56b6d76e556a5eecdaaa8ffe1ba2c0d"
  },
  {
    "url": "tag/html/index.html",
    "revision": "0b0837aa29a3b9776475ed6f6c54ba1c"
  },
  {
    "url": "tag/index.html",
    "revision": "13cf9725d08483ea92809371b3fdabc1"
  },
  {
    "url": "tag/ios/index.html",
    "revision": "be6582df9a56d19668998aedec8ef5b9"
  },
  {
    "url": "tag/ios/page/2/index.html",
    "revision": "cbb99f5fc7912e3348742bbb36f2c806"
  },
  {
    "url": "tag/ios/page/3/index.html",
    "revision": "5c58dca6c095926869b2bceeb8707a39"
  },
  {
    "url": "tag/ios/page/4/index.html",
    "revision": "0c1e7d9f49a434df88371471ab9431e0"
  },
  {
    "url": "tag/ios/page/5/index.html",
    "revision": "618a2e0ab69523f94e3537599bd19c80"
  },
  {
    "url": "tag/ios/page/6/index.html",
    "revision": "d6aabf89ba1ed2742688fd30fede7416"
  },
  {
    "url": "tag/ios/page/7/index.html",
    "revision": "321a082163e9d9f8a68eba29edb3aa70"
  },
  {
    "url": "tag/ios/page/8/index.html",
    "revision": "c7122f89cc0124dad156198048ad2a69"
  },
  {
    "url": "tag/ios/page/9/index.html",
    "revision": "920baa6111efbc06b09da0814b99779c"
  },
  {
    "url": "tag/json/index.html",
    "revision": "648d95d19786470f67a1a038c6b2112a"
  },
  {
    "url": "tag/plantuml/index.html",
    "revision": "b243e83affae2a7454c1ccb37728972d"
  },
  {
    "url": "tag/python/index.html",
    "revision": "5f34f77ab57b0991140bcf1082b088f1"
  },
  {
    "url": "tag/swift/index.html",
    "revision": "264748865d16e818dea1ce9a8053901c"
  },
  {
    "url": "tag/swift/page/10/index.html",
    "revision": "838156f89408199a0f864aa7e00eb5b3"
  },
  {
    "url": "tag/swift/page/11/index.html",
    "revision": "953bff8daa5b7f7cde080bacdcf361e2"
  },
  {
    "url": "tag/swift/page/12/index.html",
    "revision": "984f00c6b8815eea512c3eecf7cf12c0"
  },
  {
    "url": "tag/swift/page/13/index.html",
    "revision": "2d201042ca21795c8526226f9f487033"
  },
  {
    "url": "tag/swift/page/14/index.html",
    "revision": "9f7798a03b67baf276a164bde215925d"
  },
  {
    "url": "tag/swift/page/2/index.html",
    "revision": "5791934308183b98fb781872a26225d6"
  },
  {
    "url": "tag/swift/page/3/index.html",
    "revision": "4a91db027eccd16ac038a6cb7bce7585"
  },
  {
    "url": "tag/swift/page/4/index.html",
    "revision": "4aa6d3eb25a981e3b1f25116f5910e40"
  },
  {
    "url": "tag/swift/page/5/index.html",
    "revision": "3024fffe8f33556cea0cd2ccc76e6571"
  },
  {
    "url": "tag/swift/page/6/index.html",
    "revision": "93868a727c496ea142526e20fb9a073c"
  },
  {
    "url": "tag/swift/page/7/index.html",
    "revision": "1e933c4128078861639e89396bf75906"
  },
  {
    "url": "tag/swift/page/8/index.html",
    "revision": "7ec674dc5658a54e614d95cfc454aac8"
  },
  {
    "url": "tag/swift/page/9/index.html",
    "revision": "51ee49fd61f17fa5456b3ac002fb6445"
  },
  {
    "url": "tag/swiftnio/index.html",
    "revision": "c07778e4a4e728fed6b7ef57158ebbcc"
  },
  {
    "url": "tag/swiftui/index.html",
    "revision": "fba568ffa8378f8cec90a86f8e1e00aa"
  },
  {
    "url": "tag/swiftui/page/2/index.html",
    "revision": "59b6ebcc33b2db89704db7d59db13a9c"
  },
  {
    "url": "tag/swiftui/page/3/index.html",
    "revision": "09cd474106709c912178cd8db751d99c"
  },
  {
    "url": "tag/swiftui/page/4/index.html",
    "revision": "3569dbf2b1fff98474332f21bc138556"
  },
  {
    "url": "tag/swiftui/page/5/index.html",
    "revision": "5eb97736a442c267073d9eed176fb949"
  },
  {
    "url": "tag/swiftui/page/6/index.html",
    "revision": "8b61fa35bd07bb207d700af87c22ad7c"
  },
  {
    "url": "tag/swiftui/page/7/index.html",
    "revision": "65c7b5b659cf3a18fa2ff8205e1522aa"
  },
  {
    "url": "tag/tips/index.html",
    "revision": "089f0158df6a8e59cd2c675d0fae7520"
  },
  {
    "url": "tag/tools/index.html",
    "revision": "8297bd401db2c1b5246d4d61a5c0016a"
  },
  {
    "url": "tag/tools/page/2/index.html",
    "revision": "ab0ff8c224e5288c76a308763430e45f"
  },
  {
    "url": "tag/vapor/index.html",
    "revision": "c20a6616750e145e6719189cb0d0307e"
  },
  {
    "url": "tag/vapor/page/2/index.html",
    "revision": "55452a5f48f9a4fdf39c00bc70e717cf"
  },
  {
    "url": "tag/vscode/index.html",
    "revision": "2640b1031e4dd3a0bbd7aefd6ad773c4"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "dd515e1723328d06205ff6e19729fd07"
  },
  {
    "url": "tag/yaml/index.html",
    "revision": "b9fd1a4e4d534e0cdd67e28bc09537fd"
  },
  {
    "url": "tag/书单/index.html",
    "revision": "0238a40807b79c5460cd701d26543de4"
  },
  {
    "url": "tag/函数式编程/index.html",
    "revision": "ba12c27d93a6c30daac705aa37e5ebb3"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "3c0f6cbb90ce8ff156f7a6aa0f96b806"
  },
  {
    "url": "tag/基础/page/2/index.html",
    "revision": "ad7512da7906539065e264d9bb2e4eee"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "199ce9aebe59048f4c606c2fb2350444"
  },
  {
    "url": "tag/数据结构与算法/page/2/index.html",
    "revision": "7aedbcbd422a1a3237cc343d529b86fd"
  },
  {
    "url": "tag/设计模式/index.html",
    "revision": "02dd323aebff36e8a1aaeeeb6e8a3e8f"
  },
  {
    "url": "tag/设计模式/page/2/index.html",
    "revision": "94c5f943b4d5f48cbcb4b8074c6015aa"
  },
  {
    "url": "tag/设计模式/page/3/index.html",
    "revision": "2b74873c2b3bff55a15bef499862d41a"
  },
  {
    "url": "timeline/index.html",
    "revision": "76a7fb3fb0ec6ca18beb7f3c922e246f"
  },
  {
    "url": "tools/git/index.html",
    "revision": "6e92997df889673d0819d6e7575320d3"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "dbdbf1a980044d6069654f7f3d04a531"
  },
  {
    "url": "tools/git/t2-git-submodule.html",
    "revision": "b051b708389638607067635658280dbc"
  },
  {
    "url": "tools/html/index.html",
    "revision": "9006c53b464fd4a100f21fb6883935a3"
  },
  {
    "url": "tools/plantuml/index.html",
    "revision": "971c8da9cc230a721f6a402996fd04ac"
  },
  {
    "url": "tools/plantuml/t1-sequence-diagram.html",
    "revision": "821e5af580189168cf824927d460b184"
  },
  {
    "url": "tools/plantuml/t2-class-diagram.html",
    "revision": "13c5160c8565d796560dfe42fee495c9"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "c70fc69249e069c4c05f5c6420796e19"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "8cb88cd2851080aa9704c1570507b479"
  },
  {
    "url": "tools/vuepress/memory-out.html",
    "revision": "90e660b6a80e54091a37e81745f44872"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "992426a71b0dc4076ce57cefc20e0809"
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
