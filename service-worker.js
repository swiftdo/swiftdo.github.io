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
    "revision": "f247fa4097ad3f1e7548e2b6dc0f48de"
  },
  {
    "url": "about/app/index.html",
    "revision": "80186a9a95cf2bf51b0ff6dfb4732798"
  },
  {
    "url": "about/app/t1-protocol.html",
    "revision": "f57615544a7aae0ffad5ac4bb2d28860"
  },
  {
    "url": "about/app/t2-secrect.html",
    "revision": "d46b1d804d698494c2a72336b9fc2072"
  },
  {
    "url": "about/app/t3-miniapps-sec.html",
    "revision": "d42eb3183fc063778222e497cb1b5142"
  },
  {
    "url": "about/index/index.html",
    "revision": "ecef028f9b7f9abe2e245b903e183541"
  },
  {
    "url": "ai/index.html",
    "revision": "e9a1fa4e0e8c0d006a7941f3aa219dbe"
  },
  {
    "url": "ai/t1-gzj.html",
    "revision": "45ebf9961e5ea02fe98d1b91d84d3479"
  },
  {
    "url": "algorithms/index.html",
    "revision": "56306d7c29057e80b146b4749f45d2a5"
  },
  {
    "url": "algorithms/t1-buble-sort.html",
    "revision": "c5c1b4c049d450302d731d64062231ce"
  },
  {
    "url": "algorithms/t2-selection-sort.html",
    "revision": "24029c73cd845c11604307f9ce8d104a"
  },
  {
    "url": "algorithms/t3-insertion-sort.html",
    "revision": "e7850cdf4287facffce2682cfa9dea73"
  },
  {
    "url": "algorithms/t4-shell-sort.html",
    "revision": "d31093045c56656356a76b5ec9050a71"
  },
  {
    "url": "algorithms/t5-quick-sort.html",
    "revision": "e743842da08631b5fd79f18209b61e26"
  },
  {
    "url": "algorithms/t6-heap-sort.html",
    "revision": "3edd1cd8f7a12b4aa3495ade06d04d0a"
  },
  {
    "url": "algorithms/t7-merge-sort.html",
    "revision": "0fa8f29f6e9a1fc4f55d74273bbb46e5"
  },
  {
    "url": "algorithms/t8-radix-sort.html",
    "revision": "8b8a6f9bf102f5a4228427b04cd2bb2a"
  },
  {
    "url": "algorithms/t9-count-sort.html",
    "revision": "facb71e15f17a6bc1f27286019d240be"
  },
  {
    "url": "algorithms/u1-bucket-sort.html",
    "revision": "44499eea800f83b26c4cc08f2faadf32"
  },
  {
    "url": "assets/css/0.styles.21b631a1.css",
    "revision": "542202f3c4565452e9df2d4342b351e9"
  },
  {
    "url": "assets/fonts/iconfont.938fa69e.woff",
    "revision": "938fa69ea89bccb0f20d643cc5f07cbe"
  },
  {
    "url": "assets/fonts/iconfont.ecabaf00.ttf",
    "revision": "ecabaf00c2c5be9907d524bb21a0f0dc"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/js/1.09331013.js",
    "revision": "24fa4fed398e42df42632d7252ff57f0"
  },
  {
    "url": "assets/js/10.2a7727dc.js",
    "revision": "849736007c9820cc4ef6cf6c1f562972"
  },
  {
    "url": "assets/js/100.d9e8d7f7.js",
    "revision": "d9b876d22de3112628e72b43cebd9ec7"
  },
  {
    "url": "assets/js/101.f835813a.js",
    "revision": "11a53a8c50ec5efe1dea4138fc24094d"
  },
  {
    "url": "assets/js/102.629c6bf9.js",
    "revision": "94c993ded37f9928b305cd3bab8806cd"
  },
  {
    "url": "assets/js/103.4a175a29.js",
    "revision": "c34db4e5831bfbe73f3c12a27e210589"
  },
  {
    "url": "assets/js/104.348a74bd.js",
    "revision": "e82ffbc74e809311e473ef4d79e49807"
  },
  {
    "url": "assets/js/105.0c26851b.js",
    "revision": "1a88b7bcd62b2456c4c04df71830fae7"
  },
  {
    "url": "assets/js/106.27902184.js",
    "revision": "48b8a2679d00db65440c9303922a8402"
  },
  {
    "url": "assets/js/107.f91be472.js",
    "revision": "ef46e6412587284b7c6da92aacd70c61"
  },
  {
    "url": "assets/js/108.06d95523.js",
    "revision": "836446c636dac225e1cde3fd4d65ed5c"
  },
  {
    "url": "assets/js/109.8fd28a8f.js",
    "revision": "02f0236d249b84fbcdbf5a58d6ec4109"
  },
  {
    "url": "assets/js/110.fe698113.js",
    "revision": "ff2b77532bc06689d742b1a7e28c8d13"
  },
  {
    "url": "assets/js/111.513c10af.js",
    "revision": "434aa85036be1ff0d4561a664a9be34c"
  },
  {
    "url": "assets/js/112.e07df9e9.js",
    "revision": "b08ceadbaf0f1a2c4656f2ac25c0efa9"
  },
  {
    "url": "assets/js/113.b6e3ca05.js",
    "revision": "c82e5849f7de3a50aab6d1b06171cbe1"
  },
  {
    "url": "assets/js/114.5268b3c5.js",
    "revision": "5b5a6604e78d5274f37ca731fdddf6d6"
  },
  {
    "url": "assets/js/115.20f50b5d.js",
    "revision": "41fb416feac40a44c81a7bf9175089c6"
  },
  {
    "url": "assets/js/116.99d1dc74.js",
    "revision": "e1e6f10d71085b373365d393d3b4fc24"
  },
  {
    "url": "assets/js/117.e9537e85.js",
    "revision": "cb59a81c2cc6e641b05c4f581b6fecf1"
  },
  {
    "url": "assets/js/118.bf37f761.js",
    "revision": "d47fa7d904c5150af78a1db3504d7c34"
  },
  {
    "url": "assets/js/119.cc17a234.js",
    "revision": "b00b49e57b83c261e9e03baf722905ca"
  },
  {
    "url": "assets/js/120.35ba83b7.js",
    "revision": "33dcfab972c136134e3345fa91aef2b4"
  },
  {
    "url": "assets/js/121.d0d1feac.js",
    "revision": "4b42e21a3ef56a6fa6fbc6794de0b5df"
  },
  {
    "url": "assets/js/122.b3eda220.js",
    "revision": "b752fea4e496bc42b532ce8ef70ec649"
  },
  {
    "url": "assets/js/123.9ed712e9.js",
    "revision": "252800faca9bad709d30ca198538e321"
  },
  {
    "url": "assets/js/124.6b531731.js",
    "revision": "987cf6413365fdce8e87a6e23b065191"
  },
  {
    "url": "assets/js/125.fa272bf4.js",
    "revision": "2dab0dd1575e4f7b4ca1707b4770babb"
  },
  {
    "url": "assets/js/126.9e55d59f.js",
    "revision": "e3b7469eb8dd65e5b939b363e74b37f3"
  },
  {
    "url": "assets/js/127.8797d52e.js",
    "revision": "6c7acaef215b8289f29c292c82b43c2e"
  },
  {
    "url": "assets/js/128.9b430adc.js",
    "revision": "30bd76beeb08be7a5f146fabf51affb5"
  },
  {
    "url": "assets/js/129.acd17f1a.js",
    "revision": "8cacd22f16c4c1ad5453b96980a5fd15"
  },
  {
    "url": "assets/js/130.0c2a3c6a.js",
    "revision": "63e01b0f7c53a544bb6b4ab3826a5458"
  },
  {
    "url": "assets/js/131.fb171b2c.js",
    "revision": "ea880e173a0542daf8badb7e0c1dc370"
  },
  {
    "url": "assets/js/132.ff925618.js",
    "revision": "04ec2f21fa7adc5d38ca683bd147bc1e"
  },
  {
    "url": "assets/js/133.0aad5b65.js",
    "revision": "14e8283d31844e132a7124bb99e9b6c1"
  },
  {
    "url": "assets/js/134.15a95c8e.js",
    "revision": "6b59338c64ff3fa9f9fedcda360a2bda"
  },
  {
    "url": "assets/js/135.5ad993c8.js",
    "revision": "7941b2da0a00288209cb08175fe287df"
  },
  {
    "url": "assets/js/136.43386b99.js",
    "revision": "2c09d530d74a5f311149bf32ee37a745"
  },
  {
    "url": "assets/js/137.f0db6906.js",
    "revision": "19666f37d13a6de90e936fba4ea779dd"
  },
  {
    "url": "assets/js/138.21c6da79.js",
    "revision": "4a2ff918d3dd8e2161aa39bab403b5f4"
  },
  {
    "url": "assets/js/139.8b7653eb.js",
    "revision": "1fadc243565457de7b704804cf890f6e"
  },
  {
    "url": "assets/js/14.179ec236.js",
    "revision": "af80311db93a2e6ac3de809387172070"
  },
  {
    "url": "assets/js/140.f12fa68a.js",
    "revision": "333452365ffd48bc1c2b34aec30d301b"
  },
  {
    "url": "assets/js/141.c92cd573.js",
    "revision": "b06df697fafd59438b57e2f334308ae9"
  },
  {
    "url": "assets/js/142.b9fe402d.js",
    "revision": "6d3b505909e6323ea4e61714939e3d9a"
  },
  {
    "url": "assets/js/143.47796d56.js",
    "revision": "3fbaa7473072aa5479c23367c4161f2a"
  },
  {
    "url": "assets/js/144.59eda7fe.js",
    "revision": "6fc0ba23ede70218cde509bc6eee2d51"
  },
  {
    "url": "assets/js/145.bcd135a8.js",
    "revision": "a1ed78bd0a429353c4c8834abf2ccfa0"
  },
  {
    "url": "assets/js/146.c6d00847.js",
    "revision": "5da6fb3b34acc9ceceff24781f071ef2"
  },
  {
    "url": "assets/js/147.53eec843.js",
    "revision": "aedf3ad16d2b2ee1b8f88630e841f4c3"
  },
  {
    "url": "assets/js/148.13098f47.js",
    "revision": "f1939f7abf483170bc21993b8a4ed519"
  },
  {
    "url": "assets/js/149.18baf1b7.js",
    "revision": "74d569dc15b4a54714dcacd9fdae9fa5"
  },
  {
    "url": "assets/js/15.1892ad64.js",
    "revision": "ed4395ba00a5d9636c08ecc968d36222"
  },
  {
    "url": "assets/js/150.3394eaa1.js",
    "revision": "4f448414a6cb58aaadcb2b5a9a89494e"
  },
  {
    "url": "assets/js/151.cdcc5b5e.js",
    "revision": "7f09e5b4d70cdfb0b68dbe09f0353224"
  },
  {
    "url": "assets/js/152.6a9ba9d6.js",
    "revision": "caa20bc7254c5f03ca562e81f0341bc0"
  },
  {
    "url": "assets/js/153.55ae63d8.js",
    "revision": "cad2021bb2d6cf57f3c35e5676496c92"
  },
  {
    "url": "assets/js/154.fe72b9f1.js",
    "revision": "5abde4c3d031863be699bca3314f31c1"
  },
  {
    "url": "assets/js/155.c73efbd2.js",
    "revision": "b99a3d5bf62f05fb603ca09fe8f146ef"
  },
  {
    "url": "assets/js/156.21cbfb39.js",
    "revision": "fdef762c82fcc4f1e1d17539a9fd87be"
  },
  {
    "url": "assets/js/157.caefae14.js",
    "revision": "3b3961bc235fa2da1d1368b86c34f983"
  },
  {
    "url": "assets/js/158.a5f45e93.js",
    "revision": "962dd923b228ff02bc0de9fcfa7fe400"
  },
  {
    "url": "assets/js/159.f731ba14.js",
    "revision": "972f80a129b2b3584fa63aaa6ab7f90b"
  },
  {
    "url": "assets/js/16.64bc8994.js",
    "revision": "dda06e4c75cb11f66f942e09ba5f21fa"
  },
  {
    "url": "assets/js/160.f04364c0.js",
    "revision": "b68bd112a98d1962b42b59bca5d0bafc"
  },
  {
    "url": "assets/js/161.f8f97188.js",
    "revision": "e896af225e1def8b9e7cab5012373ea0"
  },
  {
    "url": "assets/js/162.605f38f5.js",
    "revision": "7672487d7485a702f53cf8dea94fe253"
  },
  {
    "url": "assets/js/163.2edaa83a.js",
    "revision": "a789932c9800a06079cb5195e33cf912"
  },
  {
    "url": "assets/js/164.983ddddc.js",
    "revision": "fed5c67a83f12e6fdf6bf53d462e77ca"
  },
  {
    "url": "assets/js/165.3fa10229.js",
    "revision": "70d23300d50e18ea5d03b0fac20f0bb2"
  },
  {
    "url": "assets/js/166.9e013db4.js",
    "revision": "6ae7ab6c557aac1e431d7cc0963f7925"
  },
  {
    "url": "assets/js/167.e7c4e4fe.js",
    "revision": "75a6a4d6acf39543dc8138d44e578ce4"
  },
  {
    "url": "assets/js/168.ec65a6a2.js",
    "revision": "c85f3e73a9db8b5b8a89e35f73f8dab9"
  },
  {
    "url": "assets/js/169.b91fdb91.js",
    "revision": "c05c4e4baae8dddaee28e59e14c2e0a1"
  },
  {
    "url": "assets/js/17.934b9510.js",
    "revision": "2d1b5ea74acd068b976a55c77bb6bd04"
  },
  {
    "url": "assets/js/170.8c1b6d5d.js",
    "revision": "1341968e2056f940bacd54821c9d812d"
  },
  {
    "url": "assets/js/171.f2a16b8a.js",
    "revision": "844d34fa6df6bc3aa884d5ba28fb81a0"
  },
  {
    "url": "assets/js/172.0afb4920.js",
    "revision": "743b8f51dc06f748f2a6131402e2f156"
  },
  {
    "url": "assets/js/173.26bf6ef3.js",
    "revision": "e775aaf70fecb4d1395db0d94c6e8070"
  },
  {
    "url": "assets/js/174.fb3aaed4.js",
    "revision": "429c2dc5826404ce481ca7722be97f2c"
  },
  {
    "url": "assets/js/175.45d746cd.js",
    "revision": "9a11ff73b0da2247b6d697eb748915af"
  },
  {
    "url": "assets/js/176.391ed586.js",
    "revision": "6f55d79b5a98f7381bdc92627c542c4a"
  },
  {
    "url": "assets/js/177.7140b430.js",
    "revision": "38740f6060cfc32662de1b372bb3c9db"
  },
  {
    "url": "assets/js/178.2dfd2083.js",
    "revision": "934fe222066966f6bda1cdd2e34d170e"
  },
  {
    "url": "assets/js/179.f835f43c.js",
    "revision": "19958d6ff9b43bfdddba54829a9c2ac7"
  },
  {
    "url": "assets/js/18.67513bdc.js",
    "revision": "2767ea600b29d849bc04d3bc36dfc71e"
  },
  {
    "url": "assets/js/180.94471055.js",
    "revision": "1091d140792cfe6a28d1ad396bcc5c3d"
  },
  {
    "url": "assets/js/181.e3b3b1f6.js",
    "revision": "2227ef996131bea6a19a8a4e80612343"
  },
  {
    "url": "assets/js/182.e22c3900.js",
    "revision": "7c8c262caeca880f1f36512e414b1fe1"
  },
  {
    "url": "assets/js/183.574960d9.js",
    "revision": "74d6b6ed255371d09311b5f543e140f0"
  },
  {
    "url": "assets/js/184.c40ab216.js",
    "revision": "6087380fe16c367956bc7df1a92b4f77"
  },
  {
    "url": "assets/js/185.989097cb.js",
    "revision": "f5580260912674f75f76f831ae7c0409"
  },
  {
    "url": "assets/js/186.942caca4.js",
    "revision": "51851260c1c4dca5ad84d832cf42da69"
  },
  {
    "url": "assets/js/187.fb2b58e0.js",
    "revision": "36cacbb621eecfdeddd066088d82c16d"
  },
  {
    "url": "assets/js/188.77af2894.js",
    "revision": "09aadebea3b0281ba56f431ff8a0b083"
  },
  {
    "url": "assets/js/189.76c168bd.js",
    "revision": "eae97c810629fc8780b618ec10fd238b"
  },
  {
    "url": "assets/js/19.eef0cbb0.js",
    "revision": "99385ddbe35f49f48284b186162734ad"
  },
  {
    "url": "assets/js/190.ebb6556d.js",
    "revision": "54d076e969109f21f98eb2bba59ec44a"
  },
  {
    "url": "assets/js/191.d5af5c8f.js",
    "revision": "eb6275d32484b7c6b417f76cf37931d5"
  },
  {
    "url": "assets/js/192.fd82d2dc.js",
    "revision": "6aa4d7474029c066f0f3bb0e4f89cdcc"
  },
  {
    "url": "assets/js/193.42dc132f.js",
    "revision": "ff586eafa2561b3a85cd600b62cdc9b2"
  },
  {
    "url": "assets/js/194.4f544d92.js",
    "revision": "eb1e5261d117a0dbb06dd9828af670bd"
  },
  {
    "url": "assets/js/195.1a3aac0c.js",
    "revision": "94cbafc39283d734048ed8652c22a737"
  },
  {
    "url": "assets/js/196.bcd134bf.js",
    "revision": "9df153b812bbb76927301e32c713d2dd"
  },
  {
    "url": "assets/js/197.26b41154.js",
    "revision": "960821c1477be79c9719767429fd1a16"
  },
  {
    "url": "assets/js/198.98a379d1.js",
    "revision": "01dfba4df54831400a3e7d6e5b57b7c7"
  },
  {
    "url": "assets/js/199.9b69af51.js",
    "revision": "fa1c294f25b405052b1086c5072a68bf"
  },
  {
    "url": "assets/js/2.333abca7.js",
    "revision": "89f02ff87c7344c526f811e2dd6b76f2"
  },
  {
    "url": "assets/js/20.c112aa3a.js",
    "revision": "150331dbc9e58a4f32eefb96a4f07f61"
  },
  {
    "url": "assets/js/200.3d3298b0.js",
    "revision": "fa975b9120549cb6d95c8e5e4ecd60f7"
  },
  {
    "url": "assets/js/201.efb3f9b8.js",
    "revision": "151d07e5a93d297e55cc1ec95eb643b2"
  },
  {
    "url": "assets/js/202.73407f05.js",
    "revision": "4e007abf8b88efc2d5ca5101cbe1f5b7"
  },
  {
    "url": "assets/js/203.11451388.js",
    "revision": "7320152de777b427be23d375b53db915"
  },
  {
    "url": "assets/js/204.1e1881be.js",
    "revision": "f586c51978769ea801083c495de07d39"
  },
  {
    "url": "assets/js/205.fb761108.js",
    "revision": "a3d0316a25e8c681db11db7df20eba2a"
  },
  {
    "url": "assets/js/206.2ba5f4ec.js",
    "revision": "6c5039b1b51241e8113067b91cdf222a"
  },
  {
    "url": "assets/js/207.bf672c6d.js",
    "revision": "a5ec4df407d3d7654ac8c8bda132291f"
  },
  {
    "url": "assets/js/208.b3b73ed6.js",
    "revision": "105abc03c5a37386a6b9f3ea256a4339"
  },
  {
    "url": "assets/js/209.02a711d0.js",
    "revision": "b1abd8c1cacfb29910902b5e9c2d6933"
  },
  {
    "url": "assets/js/21.048d2081.js",
    "revision": "a259c9d4d37fa3fad898cb978c472f77"
  },
  {
    "url": "assets/js/210.721dd67d.js",
    "revision": "524eadbd9da587ece257237a22ee43d3"
  },
  {
    "url": "assets/js/211.cb40907e.js",
    "revision": "202f116b2193e539bdee1feb7713219b"
  },
  {
    "url": "assets/js/212.b1a2cb86.js",
    "revision": "1d3b73f2d0824cadfef4c2f507cfe335"
  },
  {
    "url": "assets/js/213.b09a8cd3.js",
    "revision": "b1d275da12731a248ac03c796d030474"
  },
  {
    "url": "assets/js/214.a64b0ea4.js",
    "revision": "a95c095a333b102e909273ef776296d2"
  },
  {
    "url": "assets/js/215.d1ddb12f.js",
    "revision": "1e33092d6f1245af509095c0a20cc70f"
  },
  {
    "url": "assets/js/216.1efd61b8.js",
    "revision": "5bfa4d70b64020a2aa806feac2880d67"
  },
  {
    "url": "assets/js/217.7d84dd2e.js",
    "revision": "839f8c1a03899565dc29491f9e5fa52e"
  },
  {
    "url": "assets/js/218.e53f33ef.js",
    "revision": "2e6434ee522e890c0f63595a62b39bcc"
  },
  {
    "url": "assets/js/219.716ec6a5.js",
    "revision": "041e388146e983eace29e675e33f5ca4"
  },
  {
    "url": "assets/js/22.ca3ed97a.js",
    "revision": "21cf7462694cbc40dd93d942c44a07ba"
  },
  {
    "url": "assets/js/220.8a22e871.js",
    "revision": "3f5529ad1b36cdf9482d93c4372fe12e"
  },
  {
    "url": "assets/js/221.2a3072e0.js",
    "revision": "49b0a6d742cf1f7a3a8bc6d8a71c3dbe"
  },
  {
    "url": "assets/js/222.3296980a.js",
    "revision": "e0fa91e7d5885e0d9cdbfcb52cf1f3bc"
  },
  {
    "url": "assets/js/223.0a0bf5b2.js",
    "revision": "652fe9fa627654747fe84a0dc613b647"
  },
  {
    "url": "assets/js/224.0a340782.js",
    "revision": "90de383767b9837e4c2d590e9f62a9bf"
  },
  {
    "url": "assets/js/225.1a648c34.js",
    "revision": "0dc209258b5a57aa438681c43c0dad1d"
  },
  {
    "url": "assets/js/226.daa79601.js",
    "revision": "51abffb1b07501f4a63e4ca5f09ad5b0"
  },
  {
    "url": "assets/js/227.7a821e50.js",
    "revision": "924ee59f2658d2367e3a91b2ad82b73f"
  },
  {
    "url": "assets/js/228.1e6d069d.js",
    "revision": "e72b4a2428f5620d4f231d21130be97a"
  },
  {
    "url": "assets/js/229.d1ef9a7e.js",
    "revision": "b44694b0664dc2a1ed0624ff3a847fa3"
  },
  {
    "url": "assets/js/23.a8bac1a7.js",
    "revision": "3c315d07f0a388f9bcbbdca9c25fb8ee"
  },
  {
    "url": "assets/js/230.8f946978.js",
    "revision": "4cab39e6bc7abaa429697d3689aae41e"
  },
  {
    "url": "assets/js/231.4b0e7ada.js",
    "revision": "3d13bcfbe136acb7ac69095a183396a1"
  },
  {
    "url": "assets/js/232.7c65a609.js",
    "revision": "867bf8fd2c1743b661c68602b50d6064"
  },
  {
    "url": "assets/js/233.7693de52.js",
    "revision": "714e935183d5808902c004d1a828b2a8"
  },
  {
    "url": "assets/js/234.24feea12.js",
    "revision": "b698ed7b73a177e2b18ea4e35565c96e"
  },
  {
    "url": "assets/js/235.369e43db.js",
    "revision": "8db8450a9c1326ebc2f49b6c399229ac"
  },
  {
    "url": "assets/js/236.f7c225f5.js",
    "revision": "aacb7aa89e5c993e2523d55a09e9eb18"
  },
  {
    "url": "assets/js/237.d2569fe9.js",
    "revision": "c30169451249bd9083c776f3a99d995d"
  },
  {
    "url": "assets/js/238.ed2e2f95.js",
    "revision": "d7128702c11015dd239745839e5e8cb8"
  },
  {
    "url": "assets/js/239.644d7b40.js",
    "revision": "c7454a05d44c6be62e3fe654680bc9f2"
  },
  {
    "url": "assets/js/24.126ddf6d.js",
    "revision": "c06c6e1525d6e7b9d484b6bb7a1b2ab0"
  },
  {
    "url": "assets/js/240.06d13e27.js",
    "revision": "19843e0a2b03486aa791ca50f9a31078"
  },
  {
    "url": "assets/js/241.4983ba8e.js",
    "revision": "a83ade887a3ea689327f7031bc59a1ba"
  },
  {
    "url": "assets/js/242.6bdacf19.js",
    "revision": "1ddf23a39d46a6b3b3bc7f3b01527875"
  },
  {
    "url": "assets/js/243.bde4c6bc.js",
    "revision": "a636da3de03d70110f02eaf2fcf17d4e"
  },
  {
    "url": "assets/js/244.b8358607.js",
    "revision": "83789a11522e7edb4b7e7445da4d14ca"
  },
  {
    "url": "assets/js/245.4fcfbf19.js",
    "revision": "da39883cf5140205a2924ddf1f570ef3"
  },
  {
    "url": "assets/js/246.6b61c17e.js",
    "revision": "07732d0709123f7a89413283a98e691f"
  },
  {
    "url": "assets/js/247.c39b8a7e.js",
    "revision": "34cbfbea6eb6b672ab146a0d194ca607"
  },
  {
    "url": "assets/js/248.43c0d509.js",
    "revision": "32db41f1dc7ec09b62e9b06be4e7ff04"
  },
  {
    "url": "assets/js/249.7274d609.js",
    "revision": "03850428915cddb53a654106796794d4"
  },
  {
    "url": "assets/js/25.db08cc9c.js",
    "revision": "9b063ac536939830a95a7ef7317939d5"
  },
  {
    "url": "assets/js/250.ac5a9970.js",
    "revision": "b85d2c931a6d4f06cea246e9d123e2bc"
  },
  {
    "url": "assets/js/251.b5956ede.js",
    "revision": "e721391774b2c8ce3e03bc00de005743"
  },
  {
    "url": "assets/js/252.63bca1eb.js",
    "revision": "36a2bf421183b391b1dc3d6d4baedd82"
  },
  {
    "url": "assets/js/253.e0db9a20.js",
    "revision": "60d8ff6fbff9e8fe9f73c31aa1123171"
  },
  {
    "url": "assets/js/254.294c9d6f.js",
    "revision": "26b88d7a4648bd00ba271b2858d8078b"
  },
  {
    "url": "assets/js/255.89499af8.js",
    "revision": "0857fa8b586571dccef2c49d68319975"
  },
  {
    "url": "assets/js/256.5d98e2c2.js",
    "revision": "01fd3f09ae06dbf098ee4ff156906ffb"
  },
  {
    "url": "assets/js/257.5990e430.js",
    "revision": "2852d027bdbff2884548d29d4a0d877a"
  },
  {
    "url": "assets/js/258.fc0d358c.js",
    "revision": "2411986d2875b097eafaf0e9ed9ed042"
  },
  {
    "url": "assets/js/259.fcd916b0.js",
    "revision": "188658e94597c2176fb55639c632f74a"
  },
  {
    "url": "assets/js/26.9e001bfc.js",
    "revision": "a023e0dad4ca04a2935b91c019cc8eae"
  },
  {
    "url": "assets/js/260.5077302f.js",
    "revision": "0f9bda0921e202900405838b871eee9d"
  },
  {
    "url": "assets/js/261.8f1b9631.js",
    "revision": "188f05ffe94b9e0886bd618c3b577347"
  },
  {
    "url": "assets/js/262.8f51493f.js",
    "revision": "40cebc6eebebbbc922d7b84d0387d405"
  },
  {
    "url": "assets/js/263.0236ba6a.js",
    "revision": "d3a2d1f43e928390bd334f3c1aef3666"
  },
  {
    "url": "assets/js/264.da9136db.js",
    "revision": "e374b408f0a3f01497a66d8d9ca2d015"
  },
  {
    "url": "assets/js/265.f41968b7.js",
    "revision": "ec1c50083bda5ad9ff10c2fdc2a3bdff"
  },
  {
    "url": "assets/js/266.c875a634.js",
    "revision": "b24b109405bff8697ffd44c55848a04f"
  },
  {
    "url": "assets/js/267.be127b7d.js",
    "revision": "c41ba1e3ed32f12f75fbe9b86038230f"
  },
  {
    "url": "assets/js/268.bb0238eb.js",
    "revision": "ceb6e9c64877c0ccf9cc944704a7d053"
  },
  {
    "url": "assets/js/269.5477f0bd.js",
    "revision": "a3e02352f68fcd0b04f57a7e0fd219ce"
  },
  {
    "url": "assets/js/27.8616dfea.js",
    "revision": "dbe04278417faf0ca1545ecd30a9789e"
  },
  {
    "url": "assets/js/270.dd0bd8ee.js",
    "revision": "0070ad2fe4bbc24c7f9800b60c0dc1fa"
  },
  {
    "url": "assets/js/271.e1207446.js",
    "revision": "1c961ca0b1465540827fee65ab4dbbed"
  },
  {
    "url": "assets/js/272.eca6f394.js",
    "revision": "d03a939ce92cd0a5772b04ab2c13c7b5"
  },
  {
    "url": "assets/js/273.add1e0a3.js",
    "revision": "85f1796384844d2c9f739bf84df86ea7"
  },
  {
    "url": "assets/js/274.ff5ab9d3.js",
    "revision": "1276c1d8330e1f02272c1bdc2634826b"
  },
  {
    "url": "assets/js/275.c78103f0.js",
    "revision": "8f8f630f822b3b515040522c7ae01f75"
  },
  {
    "url": "assets/js/276.ebfb57e6.js",
    "revision": "66f0852f46cfebd7deab3f47165a77a7"
  },
  {
    "url": "assets/js/277.5b2d00fb.js",
    "revision": "acca2f69dc85fa6fe507bbc5ffc17863"
  },
  {
    "url": "assets/js/278.20cb7746.js",
    "revision": "d2afc66d3c3dfa287d88333a9eb19466"
  },
  {
    "url": "assets/js/279.937acb5a.js",
    "revision": "b88cb1c9c44d8ebc6fc79884504343eb"
  },
  {
    "url": "assets/js/28.7f9106d6.js",
    "revision": "f8a7c072bee9712f222be8cd0d099604"
  },
  {
    "url": "assets/js/280.fade79a1.js",
    "revision": "d089cd3cce4d7b9c7841a85e9b6128e2"
  },
  {
    "url": "assets/js/281.aa501316.js",
    "revision": "87228009142d95d343fc23f964ce5b8e"
  },
  {
    "url": "assets/js/282.7dadb9bc.js",
    "revision": "b757a29c46ef8a23eeeec67051a5f802"
  },
  {
    "url": "assets/js/283.7c1a7937.js",
    "revision": "ca5a6d88c50caa54fe01ecb71541edb2"
  },
  {
    "url": "assets/js/284.42d8108d.js",
    "revision": "5ba58dae7fd817eebb2c8c221ab11637"
  },
  {
    "url": "assets/js/285.3e888dbd.js",
    "revision": "43e005d41d236655fd29baa0283bc081"
  },
  {
    "url": "assets/js/286.597c759a.js",
    "revision": "5184db49169b6e98e6c99178090221de"
  },
  {
    "url": "assets/js/287.9f110a1d.js",
    "revision": "97b4e29cb58417d90fa4c2910c64184c"
  },
  {
    "url": "assets/js/288.facf10dc.js",
    "revision": "56ee7d8cae8781ca68f6a7fea3d4a698"
  },
  {
    "url": "assets/js/289.a427eed5.js",
    "revision": "db3d8eaa13c901ae367b569b62709019"
  },
  {
    "url": "assets/js/29.a622c1c4.js",
    "revision": "4890d869528f6ea66db37128ebe76fb3"
  },
  {
    "url": "assets/js/290.cc787860.js",
    "revision": "8c3c08f71065f8a00546809bf33ce0c7"
  },
  {
    "url": "assets/js/291.2b6e6f20.js",
    "revision": "1d0ed304d58c028cb66ab7bb9c91aa14"
  },
  {
    "url": "assets/js/292.9d2fc5ad.js",
    "revision": "13cfc7b1d39c142e4a09d374737db530"
  },
  {
    "url": "assets/js/293.17c34a2e.js",
    "revision": "a1ac4f62bec27127d766b832c73b077d"
  },
  {
    "url": "assets/js/294.5631aaa9.js",
    "revision": "7e6deba216e3a2228e31b79c76b192de"
  },
  {
    "url": "assets/js/295.0448b688.js",
    "revision": "c629444c3ae24da3f8bc07ec6844e359"
  },
  {
    "url": "assets/js/296.d9786261.js",
    "revision": "926645e1ede470b3ec008011ea814d3c"
  },
  {
    "url": "assets/js/297.98e2b782.js",
    "revision": "c0a2424aeaeb484550293d67e50102db"
  },
  {
    "url": "assets/js/298.65f07786.js",
    "revision": "09e97fd694635d979fa8018819c879c5"
  },
  {
    "url": "assets/js/299.0fe1c059.js",
    "revision": "2958ceafaddaf787a8a607a61b8b595b"
  },
  {
    "url": "assets/js/3.fe443068.js",
    "revision": "e3881a49d79444eda523b1bfd11b038e"
  },
  {
    "url": "assets/js/30.6c4d25d5.js",
    "revision": "8dedede4842244c7ee84eeec76759477"
  },
  {
    "url": "assets/js/300.1ad7eda3.js",
    "revision": "0da6a929834c28cc80e678b1a9536c5b"
  },
  {
    "url": "assets/js/301.2530e35e.js",
    "revision": "18ad313944cde5ab957c71286041e6f6"
  },
  {
    "url": "assets/js/302.cc1c8814.js",
    "revision": "f76f3f97add1d09f0400fa3585eebd0a"
  },
  {
    "url": "assets/js/303.19cee10c.js",
    "revision": "5d93217517615544095c89033fc0ccfb"
  },
  {
    "url": "assets/js/304.9cb3acdd.js",
    "revision": "963c78660c3809cdd8b64fe1a87e191e"
  },
  {
    "url": "assets/js/305.e2dbabcf.js",
    "revision": "4e6e13c112103bd75f1dec4d5f00c498"
  },
  {
    "url": "assets/js/306.6adffd53.js",
    "revision": "d8c361d6de9ab8cc80ca8b7bf76101e2"
  },
  {
    "url": "assets/js/307.3329fa0b.js",
    "revision": "b261c538ac11d51b78c34299a43d2d1b"
  },
  {
    "url": "assets/js/308.5c99065b.js",
    "revision": "a121c11c0f931c8ecc769e545468b85a"
  },
  {
    "url": "assets/js/309.66731301.js",
    "revision": "60111b1a1a918162c4ddd90c3207f189"
  },
  {
    "url": "assets/js/31.3f271932.js",
    "revision": "7eaa2a04a542060dcd201374a20be63b"
  },
  {
    "url": "assets/js/310.43f7b13b.js",
    "revision": "f18bf633c0c20cbdb87859bffc131064"
  },
  {
    "url": "assets/js/311.c4cea2bc.js",
    "revision": "7507b8a7219c365e4cf016b3d80aaa08"
  },
  {
    "url": "assets/js/312.4d1b6900.js",
    "revision": "4c43bee24e1b7aa0734097966c5c318e"
  },
  {
    "url": "assets/js/313.ed318ced.js",
    "revision": "bec30e8811675526592780dbbe6e4b25"
  },
  {
    "url": "assets/js/314.59e70a86.js",
    "revision": "37988c29d62d8413a487a2e360acda6f"
  },
  {
    "url": "assets/js/315.cbb1b93c.js",
    "revision": "041df890aa12cdbcfc44e022dade88e9"
  },
  {
    "url": "assets/js/316.12bb25e5.js",
    "revision": "f6c13d1aef33e75bdff2ba4d1020e5c3"
  },
  {
    "url": "assets/js/317.b7aacc56.js",
    "revision": "96b3ab2fc64a0489f498f36e6cbe4df5"
  },
  {
    "url": "assets/js/318.9e513cdf.js",
    "revision": "1608b8f3943ee8aa7453127a184d9282"
  },
  {
    "url": "assets/js/319.07a0a7c0.js",
    "revision": "97a0ae19d3daca790e3a6821920dd66c"
  },
  {
    "url": "assets/js/32.e8a00280.js",
    "revision": "3403276d84925414b059cc1a8fc0af79"
  },
  {
    "url": "assets/js/320.690679e5.js",
    "revision": "45da002c4ec4b5ab439b15a4a3dcfb10"
  },
  {
    "url": "assets/js/321.7375f1a5.js",
    "revision": "93d97efda2ab41d3b8ba9dacfa404070"
  },
  {
    "url": "assets/js/322.71e8d6f0.js",
    "revision": "f9a979c2ac9bbb00e2689079adf04eb9"
  },
  {
    "url": "assets/js/323.b759308a.js",
    "revision": "ca7ce3c1cb0090e2e35c1c80b60ad874"
  },
  {
    "url": "assets/js/324.ba951219.js",
    "revision": "655392b9592fd428c4eb646307c5731b"
  },
  {
    "url": "assets/js/325.b3ec7f72.js",
    "revision": "a7a66a40228e442f101c91dc9c894d15"
  },
  {
    "url": "assets/js/326.1f4459df.js",
    "revision": "46ca357175a4e6d7bb975194a8661a43"
  },
  {
    "url": "assets/js/33.df11a54e.js",
    "revision": "035aa7fe6a9cc88bf795d25a1b964a36"
  },
  {
    "url": "assets/js/34.36196d0f.js",
    "revision": "f02695c217ce92884d4902530ef2dcda"
  },
  {
    "url": "assets/js/35.6bed82d1.js",
    "revision": "cd167c7418393ed151e015a6c60a000c"
  },
  {
    "url": "assets/js/36.3277f5f0.js",
    "revision": "771ea099a39dc429df5ab4af30494052"
  },
  {
    "url": "assets/js/37.cce44f1d.js",
    "revision": "5e8b7d8f4c19b4da88de6324d87a9a22"
  },
  {
    "url": "assets/js/38.0e7e17c8.js",
    "revision": "79e678328dcf6b9190e5f0e07e475bdd"
  },
  {
    "url": "assets/js/39.d8604f80.js",
    "revision": "31ca916fa01b1b4c86f0a7f1e848325f"
  },
  {
    "url": "assets/js/4.26becfc9.js",
    "revision": "f14c78128131a066b5034542b9798319"
  },
  {
    "url": "assets/js/40.d8887dab.js",
    "revision": "5c199233d8134852bb7a98cdddfc2d2d"
  },
  {
    "url": "assets/js/41.3d7cc15d.js",
    "revision": "a23e2b9f5afe51f00377b501fea25dd3"
  },
  {
    "url": "assets/js/42.f88ce29f.js",
    "revision": "068ee969861b0f948a30a09aa9798490"
  },
  {
    "url": "assets/js/43.678226ef.js",
    "revision": "f7cd244a0ffae99e6b679a9cc403b0b3"
  },
  {
    "url": "assets/js/44.bde673fc.js",
    "revision": "55c385bc4cdcd06208769eba42128e01"
  },
  {
    "url": "assets/js/45.35c56329.js",
    "revision": "1c6f7dc382d0e233e094cdf587828b45"
  },
  {
    "url": "assets/js/46.71ab8ae8.js",
    "revision": "dda286b52b110a643678c80c2889e26f"
  },
  {
    "url": "assets/js/47.fc0717f1.js",
    "revision": "82fb958c414b1f8dcad72a4ab5dedcee"
  },
  {
    "url": "assets/js/48.44d0411f.js",
    "revision": "7cff24e17a3c00dfa33db4562a5cf2e3"
  },
  {
    "url": "assets/js/49.7acf0eb1.js",
    "revision": "9ebf2ea0f5586f1e8af080fb271a886f"
  },
  {
    "url": "assets/js/5.da4c3ffc.js",
    "revision": "cb0db978e4c2f659f05ccc43267c5935"
  },
  {
    "url": "assets/js/50.700e84d8.js",
    "revision": "9bd018bab0f809df58c70b08e9e5602c"
  },
  {
    "url": "assets/js/51.9586ee6f.js",
    "revision": "184943a74908d4e93ba473a519ff58f8"
  },
  {
    "url": "assets/js/52.c4f4ae07.js",
    "revision": "e30269404965570326f904033403dc8c"
  },
  {
    "url": "assets/js/53.a7326fea.js",
    "revision": "8f482dcfc8d3562cb95f221d47616c2b"
  },
  {
    "url": "assets/js/54.e9b811ff.js",
    "revision": "7f4f35e18d00e60b32acadcf93fd32c6"
  },
  {
    "url": "assets/js/55.2890cd6d.js",
    "revision": "2c7ac47f156bf2a7b42ed66e8aa81b72"
  },
  {
    "url": "assets/js/56.a28d6523.js",
    "revision": "7f8a15f93b8682ba5201d7efcf174ded"
  },
  {
    "url": "assets/js/57.9c9b089d.js",
    "revision": "59e4243ff7354124a819b6817d9ab8ae"
  },
  {
    "url": "assets/js/58.f2a03e75.js",
    "revision": "bc5dc56e44022f248fe9b71ddd2acf79"
  },
  {
    "url": "assets/js/59.50c706a3.js",
    "revision": "b3c1509c3340b3b4185d0063069540ea"
  },
  {
    "url": "assets/js/6.1d628d80.js",
    "revision": "8d5c35ca03a732a5e0dc3fac200b9270"
  },
  {
    "url": "assets/js/60.4d81f2d8.js",
    "revision": "63e9961e853897fa882b33c77f289304"
  },
  {
    "url": "assets/js/61.dbd40088.js",
    "revision": "ade422e68e0d026799a3aa8a6e41a886"
  },
  {
    "url": "assets/js/62.0b106852.js",
    "revision": "1dfd51e31aa3958e6043a1cb3b88d3e7"
  },
  {
    "url": "assets/js/63.28aedb14.js",
    "revision": "4d034fb8a5eaada057f0c2f206fbacfb"
  },
  {
    "url": "assets/js/64.d65aa49e.js",
    "revision": "7a43d194f971f9afb6384bbf4b2784ed"
  },
  {
    "url": "assets/js/65.f1ba5230.js",
    "revision": "dd01fbc54a1ef94c270ac2a4f0496b47"
  },
  {
    "url": "assets/js/66.fb23f1c0.js",
    "revision": "93d017114f0a9b000e47904b6f064156"
  },
  {
    "url": "assets/js/67.0a14a3a9.js",
    "revision": "dd2efdf89369cf1e422a4b5db1f8a3e6"
  },
  {
    "url": "assets/js/68.76f7f452.js",
    "revision": "0bf4bc8aef4b2a295f5e5c50f37966f4"
  },
  {
    "url": "assets/js/69.8944ea35.js",
    "revision": "b6819f03c5eb9eb2c0c144152b5c4e27"
  },
  {
    "url": "assets/js/7.82612638.js",
    "revision": "393df7433c09a7ec0f25b28e7c873225"
  },
  {
    "url": "assets/js/70.b2533106.js",
    "revision": "979311bfd978433ea934e2772a774c53"
  },
  {
    "url": "assets/js/71.75776a94.js",
    "revision": "ce496ff017cb9ef8f0c2be34183c7b30"
  },
  {
    "url": "assets/js/72.e47836fa.js",
    "revision": "5c0bf9117cd415c9fa0d109952a43f04"
  },
  {
    "url": "assets/js/73.1e6df6f9.js",
    "revision": "544caa46ede1642f80d0fdb5acc2c5de"
  },
  {
    "url": "assets/js/74.6b0ccb1b.js",
    "revision": "3890458736aa9d3b9e8ebd66033c9896"
  },
  {
    "url": "assets/js/75.f1db91da.js",
    "revision": "71d79b7ec2cc761b206b142864eb7d17"
  },
  {
    "url": "assets/js/76.251491cc.js",
    "revision": "1b9b7fa2d60b773db298f0725ce826dc"
  },
  {
    "url": "assets/js/77.397fed31.js",
    "revision": "66fc5a874acea2f819460906c80e8cdd"
  },
  {
    "url": "assets/js/78.1fd0ef2e.js",
    "revision": "4c922d636a236c5c8078c6e99dfc7c53"
  },
  {
    "url": "assets/js/79.42b8acaa.js",
    "revision": "994f7cbd5c9daa74ba9b4e4b2556e65b"
  },
  {
    "url": "assets/js/8.0d3f5ec9.js",
    "revision": "987cde0d3fe43517a1b62c2edecb4721"
  },
  {
    "url": "assets/js/80.7cc271e4.js",
    "revision": "e41bb009aeada00b179ce83a73f093a9"
  },
  {
    "url": "assets/js/81.75cbafc7.js",
    "revision": "c8cbf110f459388128ac518736bde352"
  },
  {
    "url": "assets/js/82.c5e6a02e.js",
    "revision": "cdb857162e36b46f22afedebb88aaf4e"
  },
  {
    "url": "assets/js/83.b786cad8.js",
    "revision": "240544284bde2c154eb6e082413262bf"
  },
  {
    "url": "assets/js/84.6bca77ff.js",
    "revision": "0d18a6cbf2c786c4ed243619b4d4c230"
  },
  {
    "url": "assets/js/85.4e36e938.js",
    "revision": "0876ee323182d770afbb0ddab8bc46e4"
  },
  {
    "url": "assets/js/86.8b3ff86a.js",
    "revision": "d46f156f69d297d235f99da92317da2d"
  },
  {
    "url": "assets/js/87.b8aae4e8.js",
    "revision": "04a05eeb3c5f38abb01c2164a7acf64b"
  },
  {
    "url": "assets/js/88.a68e40d5.js",
    "revision": "ec55688a5b857d83ea870b7f4fdcd6ab"
  },
  {
    "url": "assets/js/89.4d87b4dc.js",
    "revision": "88019c2a483fca6c857b635866de6e5d"
  },
  {
    "url": "assets/js/9.0f286391.js",
    "revision": "1352630e0b0a267d3e8a02c10cd81dc6"
  },
  {
    "url": "assets/js/90.62aaf89a.js",
    "revision": "5fe1b1ad02109a713e81935d8ac14bd1"
  },
  {
    "url": "assets/js/91.535e4de7.js",
    "revision": "2155c4d196f0c99e2bdde245b195b551"
  },
  {
    "url": "assets/js/92.01709ba7.js",
    "revision": "1e0a46164f42be102a5ad8442dc0c410"
  },
  {
    "url": "assets/js/93.180d82db.js",
    "revision": "2701de35940f1d8baadcc880ebe9ef7d"
  },
  {
    "url": "assets/js/94.42bdd8d9.js",
    "revision": "4db85d24035e6814e8bde427ac58a763"
  },
  {
    "url": "assets/js/95.7c2121a3.js",
    "revision": "2c6835075e1928dd8da700ca0cab98f7"
  },
  {
    "url": "assets/js/96.3d435dcf.js",
    "revision": "a42f068844c42ea3b54e41d571e3d1ce"
  },
  {
    "url": "assets/js/97.5a241f31.js",
    "revision": "152998902164f784a7914efb71fafefd"
  },
  {
    "url": "assets/js/98.57e2eb4b.js",
    "revision": "4808af7c38ff079e26c44ccd45aaca20"
  },
  {
    "url": "assets/js/99.9669ec75.js",
    "revision": "110c745cf9af51e1a874195157c6a3f6"
  },
  {
    "url": "assets/js/app.4355786b.js",
    "revision": "12a3a44d03e416cd9f3a6ecc4ab27ca1"
  },
  {
    "url": "assets/js/vendors~docsearch.e3370f81.js",
    "revision": "780850f89105536ab88d23525dc96015"
  },
  {
    "url": "assets/js/vendors~flowchart.e9113b49.js",
    "revision": "1f1c2b81ae03e24e0de4379c877abd74"
  },
  {
    "url": "author.jpeg",
    "revision": "7e1bfc6337e85b76f0f6e95859ed93d6"
  },
  {
    "url": "avatargen-sec.html",
    "revision": "6e0610e6063b2d7e7753a9d346a37200"
  },
  {
    "url": "bizipro-sec.html",
    "revision": "6a22511031b7e2be9a88659158cf015c"
  },
  {
    "url": "book/index.html",
    "revision": "01bb7ba923567a332a6f9ac9c5d6f375"
  },
  {
    "url": "book/t-find-books.html",
    "revision": "bb0047ddd6103d48a70a5d62ffe84d51"
  },
  {
    "url": "categories/index.html",
    "revision": "edd522f4a5857212c452eaf0911d77a2"
  },
  {
    "url": "design-patterns/AdapterPattern.html",
    "revision": "7dc1ace23e59827aa4862f26b4e698e7"
  },
  {
    "url": "design-patterns/BridgePattern.html",
    "revision": "d3bc945e866e85bdb7baeff03398db22"
  },
  {
    "url": "design-patterns/BuilderPattern.html",
    "revision": "48e65fcda71a8304fb5a5acc1d7ce486"
  },
  {
    "url": "design-patterns/ChainOfResponsibilityPattern.html",
    "revision": "a9feb5069dc69de52b6da31a3cea4846"
  },
  {
    "url": "design-patterns/ClassReleation.html",
    "revision": "4b841e632a9e27d4b16cdedfb450d56c"
  },
  {
    "url": "design-patterns/CommandPattern.html",
    "revision": "abfd1ee92790bdfe9d8cc61f99432cd4"
  },
  {
    "url": "design-patterns/CompositePattern.html",
    "revision": "e359da2cbadee30dc79c590808938759"
  },
  {
    "url": "design-patterns/DecoratorPattern.html",
    "revision": "e6e1217ca614db6de62531300d7f3cb4"
  },
  {
    "url": "design-patterns/DesignPrinciples.html",
    "revision": "e637d2aff77a309d28dc24d56b71839f"
  },
  {
    "url": "design-patterns/FacadePattern.html",
    "revision": "f282da9b0edf34c4353095ee764605bb"
  },
  {
    "url": "design-patterns/FactoryPattern.html",
    "revision": "813aff1dfa1585d6acddb1c981abcfbc"
  },
  {
    "url": "design-patterns/FilterCriteriaPattern.html",
    "revision": "e6ec5c198bc1c3772df6225e7c9404c4"
  },
  {
    "url": "design-patterns/FlyweightPattern.html",
    "revision": "82b2cddeb0550eed809542f49488b01a"
  },
  {
    "url": "design-patterns/index.html",
    "revision": "edb61b50ae7541406b88c82902b698be"
  },
  {
    "url": "design-patterns/InterpreterPattern.html",
    "revision": "d6758144e18ac76fbc939efd3d4b63b4"
  },
  {
    "url": "design-patterns/IteratorPattern.html",
    "revision": "32d336d9bd7b923d398e5101b89795c5"
  },
  {
    "url": "design-patterns/MediatorPattern.html",
    "revision": "4a03a6d17ed0fcbae91f14d1cc404da8"
  },
  {
    "url": "design-patterns/MementoPattern.html",
    "revision": "2d7559b4363ebc8af014bb052ce915a4"
  },
  {
    "url": "design-patterns/NullObjectPattern.html",
    "revision": "32c1967a96aad348ac94fe9a713ac94d"
  },
  {
    "url": "design-patterns/ObserverPattern.html",
    "revision": "cc7f143319a9bf9a3fa01466b3b4a8ff"
  },
  {
    "url": "design-patterns/principle/CARP.html",
    "revision": "84f8e7a556ebcf10ea0a5beda637f87e"
  },
  {
    "url": "design-patterns/principle/DIP.html",
    "revision": "9e873cb4db0b68da756ec7178b2af9d6"
  },
  {
    "url": "design-patterns/principle/ISP.html",
    "revision": "ab792f5f349a3ae96c00be024a9d3972"
  },
  {
    "url": "design-patterns/principle/LOD.html",
    "revision": "6dbb80c29987357536cd784be33d0643"
  },
  {
    "url": "design-patterns/principle/LSP.html",
    "revision": "18a37325b548d554dae9381d9a4ab56f"
  },
  {
    "url": "design-patterns/principle/OCP.html",
    "revision": "d356ffd9e3fb92db2d0a21b6dd0bc6c5"
  },
  {
    "url": "design-patterns/principle/SRP.html",
    "revision": "c3f7b563f84317f9de41b96460391a62"
  },
  {
    "url": "design-patterns/PrototypePattern.html",
    "revision": "1fd10f4e3929ba6ccebff7490248ff00"
  },
  {
    "url": "design-patterns/ProxyPattern.html",
    "revision": "de66ec96658259180a2c91727609859f"
  },
  {
    "url": "design-patterns/SingletonPattern.html",
    "revision": "d13424c540aaca22bc14865c6e7167ed"
  },
  {
    "url": "design-patterns/StatePattern.html",
    "revision": "05fd26a009a973490d882551237dcf1c"
  },
  {
    "url": "design-patterns/StrategyPattern.html",
    "revision": "71ff9bc68a2d064caf5c12a9f2291eb3"
  },
  {
    "url": "design-patterns/TemplatePattern.html",
    "revision": "1f4622bfbd9936e2558fc6c52791bbf7"
  },
  {
    "url": "design-patterns/VisitorPattern.html",
    "revision": "95696fc3d60d301b026ff87ef0be3e75"
  },
  {
    "url": "figma/figma-install-chinese-font.html",
    "revision": "fe895609b4e6526d928a6b2a005e5ba9"
  },
  {
    "url": "figma/index.html",
    "revision": "582dc94ecbf6f1b84dd894dc12ead62d"
  },
  {
    "url": "flutter/flutter-color.html",
    "revision": "bdf39de63fb88561db4d12145be34f46"
  },
  {
    "url": "flutter/flutter-deps.html",
    "revision": "10fb35a345297b4e1de968dcc012c8f4"
  },
  {
    "url": "flutter/flutter-dialog.html",
    "revision": "78d4c5e7a90b6dcec2a9b1fe4adf4cb2"
  },
  {
    "url": "flutter/flutter-isolate.html",
    "revision": "de2d91dfddcf9bf4c7b95599503638d2"
  },
  {
    "url": "flutter/flutter-repaintBoundary.html",
    "revision": "7dae867f86fdbb5674d677a72bccdc11"
  },
  {
    "url": "flutter/flutter-screenshoot1.html",
    "revision": "4a9ba990d756c324bc431326403cf252"
  },
  {
    "url": "flutter/flutter-screenshoot2.html",
    "revision": "e15883a3e6c69717f1a471160e12945a"
  },
  {
    "url": "flutter/flutter-screenshoot3.html",
    "revision": "b6f91483c0ec3227fdaec6455a39ed4b"
  },
  {
    "url": "flutter/flutter-vscode-config.html",
    "revision": "e218a8f5112873fa208374d393fd71cc"
  },
  {
    "url": "flutter/flutter-web-launch-page.html",
    "revision": "a4d75ca97f23f44c8f8452ca5004acea"
  },
  {
    "url": "flutter/github-actions-build-flutter-android.html",
    "revision": "490a2e3a093eb815b589c112fd96b441"
  },
  {
    "url": "flutter/github-actions-build-flutter-ios.html",
    "revision": "fe80773714a9e544ecffebe295dfdf0d"
  },
  {
    "url": "flutter/index.html",
    "revision": "b2b725a47a38d7a3cbf44b9c57015220"
  },
  {
    "url": "flutter/point.html",
    "revision": "6bbc9a316b75fb12d3e212d71c97e39c"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "3fd0dda2ab8d54b5a0feaed3fda88c63"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "2c2e23bd919f7cdcaa6ba2481e0b96ee"
  },
  {
    "url": "flutter/t3-messages.html",
    "revision": "0bdeadc026b32373807287f9e7d28302"
  },
  {
    "url": "flutter/t3-mixin.html",
    "revision": "6d82c39c729bbcc0b3425b937a2a5ef7"
  },
  {
    "url": "flutter/t4-lifecycle.html",
    "revision": "2c4bb7911e1100c34c5b229dd4932150"
  },
  {
    "url": "flutter/t5-flutter-web-deploy.html",
    "revision": "87a1d86f32e05dcd8f1ea18597280756"
  },
  {
    "url": "flutter/t6-docker-web-deploy.html",
    "revision": "d3c8f10a6d569e3a2a9bf53cb5280e80"
  },
  {
    "url": "flutter/t7-fvm.html",
    "revision": "6c0ce444eef5877baf8888786f1e500b"
  },
  {
    "url": "flutter/t8-const.html",
    "revision": "45c14958da5fd7ea9be4b5f6abb5e3c7"
  },
  {
    "url": "flutter/t9-logs.html",
    "revision": "f22107bd6a2574a7c2e1ebd170b4ef9a"
  },
  {
    "url": "flutter/u10-fvm-flutter2.html",
    "revision": "c0ed8e7988df4f322402b8faa83db30e"
  },
  {
    "url": "flutter/u11-flutter-render.html",
    "revision": "28cd8ffa30f07d88df98e1a619cb8394"
  },
  {
    "url": "flutter/u12-flutter-create-w.html",
    "revision": "db1957bc959473893c467dbe3ec8e139"
  },
  {
    "url": "flutter/u12-flutter-web-01.html",
    "revision": "78974320e9fffc05cfea255616da7440"
  },
  {
    "url": "flutter/u12-flutter-web-02.html",
    "revision": "57baca461ecbb8c8e1664bec68e419bd"
  },
  {
    "url": "flutter/u13-sliverappbar.html",
    "revision": "d21259615b38f786e37bf54d11cd166d"
  },
  {
    "url": "flutter/u14-navbar-color.html",
    "revision": "368698e38a9ef1c23fa515d513c1649d"
  },
  {
    "url": "flutter/u15-custom-nabar.html",
    "revision": "50e5616c8082d114bbf756f315bd02fa"
  },
  {
    "url": "flutter/u16-shape.html",
    "revision": "a939fc82713d2b51ab2d1ca451f57996"
  },
  {
    "url": "flutter/y1-statubar.html",
    "revision": "4ddc6fe5d598251ac4cdf593069c4892"
  },
  {
    "url": "haskell/1-install.html",
    "revision": "40bffcf1680bc722b24dcf94d3d2f24c"
  },
  {
    "url": "haskell/2-vscode.html",
    "revision": "8247f7ec28898f03337da8dfbe3a8e00"
  },
  {
    "url": "haskell/3-pktool.html",
    "revision": "7b94ee01b35361cd492f256815e588fd"
  },
  {
    "url": "haskell/4-digui.html",
    "revision": "30192a1d509e35c564387fcf872c6ff2"
  },
  {
    "url": "haskell/index.html",
    "revision": "8a4d7b9d92995c48f944b2cb0bce426b"
  },
  {
    "url": "idiary-sec.html",
    "revision": "6ae2360ad11e3a0489def2b52119431e"
  },
  {
    "url": "imgs/15537793973712.gif",
    "revision": "2bdd6b162c403d376c56c02e8a5560af"
  },
  {
    "url": "imgs/15539988528666.jpg",
    "revision": "d652f655d90ae8671b0f55e4b529010f"
  },
  {
    "url": "imgs/15541716797540.jpg",
    "revision": "d14d132fb12aa068089a645f79db00d1"
  },
  {
    "url": "imgs/16169324651038.jpg",
    "revision": "ccb94d557b576993a9fbb6a3f5885f56"
  },
  {
    "url": "imgs/16169408042714.jpg",
    "revision": "c222be6b0173dfb36db8ca697765fe83"
  },
  {
    "url": "imgs/20161009190728886.gif",
    "revision": "88283198de95d47b786be4564af82c67"
  },
  {
    "url": "imgs/2019-09-02-754476-6bf41f1ec1fdb8b4.gif",
    "revision": "8df4df86ec233284e2131136f1e12f4c"
  },
  {
    "url": "imgs/2019-09-02-754476-b927ae5439d0ed31.gif",
    "revision": "2b73fb493cf39730eafd1407970a0cd0"
  },
  {
    "url": "imgs/2020-08-13-15973278472676.png",
    "revision": "98c2d0167fc6099a5619d4656f76c45d"
  },
  {
    "url": "imgs/2020-08-13-15973279241071.png",
    "revision": "6a36596e0898e5aa246283ea5ee9ec39"
  },
  {
    "url": "imgs/2020-08-13-15973280208551.png",
    "revision": "bc3f02996e2271476f4dd0cb053b1612"
  },
  {
    "url": "imgs/2020-08-13-15973281187683.png",
    "revision": "118b8c6d58182697a78f51b0a151a099"
  },
  {
    "url": "imgs/2020-08-13-15973281769421.png",
    "revision": "b8afc67158e771e9cfc6a2794e2739de"
  },
  {
    "url": "imgs/2020-08-13-15973291177791.png",
    "revision": "8827a95585d4c14023cbd7e973891bd7"
  },
  {
    "url": "imgs/2020-08-13-15973293124182.png",
    "revision": "eb30797e61fc56d759d98bdcec49b20d"
  },
  {
    "url": "imgs/2020-08-13-15973299080013.png",
    "revision": "10008f4cd3729186d8e360e177ef5951"
  },
  {
    "url": "imgs/2020-08-13-15973299739169.png",
    "revision": "6f1a561e49a2e7dc14bb799ad6b00f64"
  },
  {
    "url": "imgs/2020-08-13-15973300049311.png",
    "revision": "0e716bc7ba5a4ca6fafdcb1304e6b650"
  },
  {
    "url": "imgs/2020-08-13-15973300294232.png",
    "revision": "82042b2e0d024a5fefbc105fe303f596"
  },
  {
    "url": "imgs/2020-08-13-15973300616706.png",
    "revision": "8ef73236fe2170f99014286c9a982675"
  },
  {
    "url": "imgs/2020-08-13-15973301035635.png",
    "revision": "afe39f1c55e9d0bcb55fff69896e2e46"
  },
  {
    "url": "imgs/2020-08-13-15973301409192.png",
    "revision": "610ee415540eda271c899276373705c7"
  },
  {
    "url": "imgs/2020-08-13-15973301718336.png",
    "revision": "cd448964fa6277d7e35ae021be49f10e"
  },
  {
    "url": "imgs/2020-08-13-15973302119128.png",
    "revision": "3f3f26260c96f9a562be79df0ac0c630"
  },
  {
    "url": "imgs/2020-08-13-15973302447126.png",
    "revision": "dbecf93ba1c60d2000caa7429373c6a5"
  },
  {
    "url": "imgs/2020-08-13-15973302742671.png",
    "revision": "3d4b874f8d16e850c7e0353261215c7d"
  },
  {
    "url": "imgs/2020-08-13-15973303008769.png",
    "revision": "3e8aaa48aff9f676a210e33cc0ff4b6b"
  },
  {
    "url": "imgs/2020-08-13-15973303294906.png",
    "revision": "ff4f1ebd2b89da7de743772eaca0902b"
  },
  {
    "url": "imgs/2020-08-14-15974187854474.png",
    "revision": "d58e47bfb45e03c42c94e7d4f14ca38a"
  },
  {
    "url": "imgs/2020-08-14-15974188214620.png",
    "revision": "d1dc0e25153234f52698bf7526ff7625"
  },
  {
    "url": "imgs/2020-08-14-15974188693718.png",
    "revision": "67aab7a3fd985b1e3976a7865a81f006"
  },
  {
    "url": "imgs/2020-08-14-15974189206263.png",
    "revision": "3957b54ab7aa0703a1d867e9aeaac032"
  },
  {
    "url": "imgs/2020-08-14-15974189493112.png",
    "revision": "0798edda271a00227f0f994740abfbbc"
  },
  {
    "url": "imgs/2020-08-14-15974189965277.png",
    "revision": "75328252871b7a43719dd879ac859d47"
  },
  {
    "url": "imgs/2020-08-14-15974190358164.png",
    "revision": "42310636bb4f7d6e032612a07f43090a"
  },
  {
    "url": "imgs/2020-08-14-15974190933068.png",
    "revision": "10601d36b8629007d03630402153191d"
  },
  {
    "url": "imgs/2020-08-14-15974191392409.png",
    "revision": "2dce394c7d1aa505a416f42004b88aa3"
  },
  {
    "url": "imgs/2020-08-14-15974191604605.png",
    "revision": "b6d547f446f0f9e9ade663d858cc83ba"
  },
  {
    "url": "imgs/2020-08-14-15974191942389.png",
    "revision": "f476f99d6f3d8d39c53f2399ee49436d"
  },
  {
    "url": "imgs/2020-08-14-15974192214948.png",
    "revision": "c1a99ac92f92bf26acd49f048dd1aa47"
  },
  {
    "url": "imgs/2020-08-16-15975445617852.jpg",
    "revision": "4fd2f0edfef3cd00d8f1cef0fc039933"
  },
  {
    "url": "imgs/2020-08-16-15975446080116.jpg",
    "revision": "04e3aad18f609a0ec4b31a9d7e86bfba"
  },
  {
    "url": "imgs/2020-08-16-15975446358965.jpg",
    "revision": "5d9defbba8ef62c0773206e85d6cfaef"
  },
  {
    "url": "imgs/2020-08-16-15975446528591.jpg",
    "revision": "20b84ad9c7355d92c074acba363655d1"
  },
  {
    "url": "imgs/2020-08-16-15975446681583.jpg",
    "revision": "918164fffff8a6d97a41043ed3890cd8"
  },
  {
    "url": "imgs/2020-08-16-15975531702215.jpg",
    "revision": "6f02a0f4a6e43ae4a6be7ebe0b66c298"
  },
  {
    "url": "imgs/2020-08-18-15976709376100.png",
    "revision": "21879e1339b49307c8535766959bc62e"
  },
  {
    "url": "imgs/2020-08-18-15976709875237.png",
    "revision": "bb29f41e301b712be8e22b31dea2cdf7"
  },
  {
    "url": "imgs/2020-08-18-15976710797789.png",
    "revision": "62944612643cb10b854eb710a65a09b1"
  },
  {
    "url": "imgs/2020-08-18-15976716964326.png",
    "revision": "4fc4594e96aeeef6ae531cdf6adc7696"
  },
  {
    "url": "imgs/2020-08-18-15976718317947.png",
    "revision": "cd798dac94c9c658e5e46f7d1f7b740b"
  },
  {
    "url": "imgs/2020-08-18-15976719160953.png",
    "revision": "0af6ed1cea87e5c78e052bc1380263ee"
  },
  {
    "url": "imgs/2020-08-18-15976721957315.png",
    "revision": "4ecfa440d7a8e3c137ba08b97b349298"
  },
  {
    "url": "imgs/2020-08-18-15976723503279.png",
    "revision": "3d15efed994a7bc7a922fd6c547454d1"
  },
  {
    "url": "imgs/2020-08-18-15976725106733.png",
    "revision": "945ef76627cd411a6c7d1861a4db446f"
  },
  {
    "url": "imgs/2020-08-18-15976726838660.png",
    "revision": "2f98019fc95344de464523a69c250ac8"
  },
  {
    "url": "imgs/2020-08-18-15976727264205.png",
    "revision": "4353c30312154f39ef6ff658576714a5"
  },
  {
    "url": "imgs/2020-08-18-15976728360028.png",
    "revision": "2f685f80aa9e6e8e5aa2e7c7829545cf"
  },
  {
    "url": "imgs/2020-08-18-15976728999199.png",
    "revision": "8df4b456857faf49dbf1ac97753876ca"
  },
  {
    "url": "imgs/2020-08-18-15976729313175.png",
    "revision": "fd47680a83f8a9ab3d34bdd91f3d2774"
  },
  {
    "url": "imgs/2020-08-18-15976729986487.png",
    "revision": "119bb3a2dc0450789af3cb18ab8cea07"
  },
  {
    "url": "imgs/2020-08-18-15976730379323.png",
    "revision": "6e0547e0580f6f7537362dd83c0e2f3f"
  },
  {
    "url": "imgs/2020-08-21-15980148999452.jpg",
    "revision": "4d60053712e849ba1875d5fa536e743e"
  },
  {
    "url": "imgs/2020-08-21-15980163815241.jpg",
    "revision": "400f0af52d69c069fda59702411b7910"
  },
  {
    "url": "imgs/68747470733a2f2f75706c6f61642d696d616765732e6a69616e7368752e696f2f75706c6f61645f696d616765732f313637383133352d623734303439396637633931323362612e6769663f696d6167654d6f6772322f6175746f2d6f7269656e742f7374726970.gif",
    "revision": "71c6487b116d8e71f91ee276e2d4a4fd"
  },
  {
    "url": "imgs/754476-026141fa68c25ddf.gif",
    "revision": "9541d116b9ad191437cb0f9acce7baf6"
  },
  {
    "url": "imgs/754476-06a4090ebc2f5655.gif",
    "revision": "44be35da53ae9ee564ce444542a43d10"
  },
  {
    "url": "imgs/754476-ac3bda064926d092.gif",
    "revision": "71c0f1c0ceb0e053c423426e7f343602"
  },
  {
    "url": "imgs/754476-b4e3e40e93224bf3.gif",
    "revision": "be81c151f38d8923fe1ede31ac530ac4"
  },
  {
    "url": "imgs/wechat-logo.png",
    "revision": "50e0389a5a0e64e2adb3d32d98508d43"
  },
  {
    "url": "imgs/xcode_launch_env.png",
    "revision": "c7f8697ae25d7739cb1fa6b3ea10ead0"
  },
  {
    "url": "index.html",
    "revision": "838cf329327dc9c2e8c1ff456cd5348e"
  },
  {
    "url": "java/index.html",
    "revision": "c7a2750d5667dd9ce2ef76103db31439"
  },
  {
    "url": "java/java-@FunctionalInterface-Lambda.html",
    "revision": "a4e95a38a8a5940cd75f42e64ec51bc1"
  },
  {
    "url": "java/String[]-List<String>.html",
    "revision": "1fb9d71647f338bcfecfdfb168690308"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "ops/allow-white.html",
    "revision": "26514660c7cad9f1ebc37f178659a604"
  },
  {
    "url": "ops/iptables-firewall.html",
    "revision": "0fa218337b53fca238521aea914a2678"
  },
  {
    "url": "panda-sec.html",
    "revision": "85473f65ce3e2298ffdcc24d9b463a3a"
  },
  {
    "url": "python/1-file-map.html",
    "revision": "dda2564c34358f9423b37afb4263e5af"
  },
  {
    "url": "python/2-mongo-random.html",
    "revision": "3b7e45cdaa841fe2387a5a12216d5ba3"
  },
  {
    "url": "python/3-page-upload.html",
    "revision": "2d6a4a1edba09c7012452a1b86f18865"
  },
  {
    "url": "python/4-bt-flask.html",
    "revision": "d4c1dc35a7c4041255e8370fd6ca7f67"
  },
  {
    "url": "python/5-django-templates.html",
    "revision": "c7612838a05edd26e5e914e863f57481"
  },
  {
    "url": "python/index.html",
    "revision": "df1ac02bb140afa9632d9882eba04a61"
  },
  {
    "url": "python/poetry.html",
    "revision": "2a97874710201614d5beaae1d44e6086"
  },
  {
    "url": "python/pyenv.html",
    "revision": "0e57506e9f9f7e1321e36df1e1981fee"
  },
  {
    "url": "python/python-ase.html",
    "revision": "2937233032bf0563be3973c91772de72"
  },
  {
    "url": "python/python-decorator.html",
    "revision": "ad7bad9d5f6d56a1f7f3bfce8f651af2"
  },
  {
    "url": "python/python-develop-env.html",
    "revision": "a61fca371ed886f3028597b178f80747"
  },
  {
    "url": "python/python-file.html",
    "revision": "9beb406835a335e82aa67405db13d5c2"
  },
  {
    "url": "python/python-function.html",
    "revision": "0b823368035c89921361adbd5e2ca17c"
  },
  {
    "url": "python/python-generator.html",
    "revision": "4e2733fca00445a539b1eb3e8406169f"
  },
  {
    "url": "python/python-iterator.html",
    "revision": "26893aedac4336fd3b0ed6857eab0854"
  },
  {
    "url": "python/python-module.html",
    "revision": "104176fe431a3960665144bc4b77cc00"
  },
  {
    "url": "python/python-string.html",
    "revision": "73fbe92b2e5f1008ba9b8dcc0bbc48a3"
  },
  {
    "url": "read/head-first-oop.html",
    "revision": "a657d43eb9230e25dd18b00f09f0889c"
  },
  {
    "url": "read/index.html",
    "revision": "b5e6f15bb548a752b551d14c696bb3b1"
  },
  {
    "url": "swift/better/autoclosure.html",
    "revision": "b6e89199d3c739cb67dd14cd3662c6e5"
  },
  {
    "url": "swift/better/available.html",
    "revision": "8698d2ca7dd66abe57898f92f71ec77a"
  },
  {
    "url": "swift/better/chain.html",
    "revision": "9127d5b2fd0f138418b2de1f872b16f2"
  },
  {
    "url": "swift/better/copy-in-copy-out.html",
    "revision": "31639dfdcc710ba4b25b87b9365322a8"
  },
  {
    "url": "swift/better/Copy-On-Write.html",
    "revision": "90d4a9f2453e6d1a892f1332317652e0"
  },
  {
    "url": "swift/better/di.html",
    "revision": "fc4f8be9eca6dfc9aadb6cfc5d7cd02b"
  },
  {
    "url": "swift/better/index.html",
    "revision": "73fd72d9bd352eca0c282d545bc0f5f9"
  },
  {
    "url": "swift/better/last.html",
    "revision": "97ee3e3cc8ba6c08b0e7a447e113988f"
  },
  {
    "url": "swift/better/lazy.html",
    "revision": "8238dff3462a73664ed62a1a407baea3"
  },
  {
    "url": "swift/better/protocol.html",
    "revision": "373ea284d37d5165d9fc3d4309eb91fd"
  },
  {
    "url": "swift/better/value-semantics-2.html",
    "revision": "c0b107e91e78b8a623fad3a99f4911dd"
  },
  {
    "url": "swift/better/value-semantics.html",
    "revision": "d9a16eaf0afe09855374c1c705ce95e7"
  },
  {
    "url": "swift/fp/index.html",
    "revision": "c4f42015e3fb6a2b96cfa5a92266548a"
  },
  {
    "url": "swift/fp/t1-fp.html",
    "revision": "03b980f9bd8ef497ba99291ce058b2f7"
  },
  {
    "url": "swift/fp/t2-lens.html",
    "revision": "4952fd72b5c901392ee9a41496355c6c"
  },
  {
    "url": "swift/fp/t3-json1.html",
    "revision": "a0dcebefe28ad013a56aa03cee210428"
  },
  {
    "url": "swift/fp/t3-json2.html",
    "revision": "4437d6cff8182b076dc454de7271b18b"
  },
  {
    "url": "swift/fp/t3-json3.html",
    "revision": "efff29ee01a66713b75c676aef2baba1"
  },
  {
    "url": "swift/fp/t4-length.html",
    "revision": "54a79e9af42ede1598044a271811bb9c"
  },
  {
    "url": "swift/ios/index.html",
    "revision": "f2f7bacc58b3026ddf4ff667b9a05774"
  },
  {
    "url": "swift/ios/ios-build-cers.html",
    "revision": "04733e855a40b92ffab5db9699783a61"
  },
  {
    "url": "swift/ios/ios-webkit.html",
    "revision": "5d343c46e0595b07c5e05224a126062d"
  },
  {
    "url": "swift/ios/pod-wechat.html",
    "revision": "de40e0b2370bc947c054ecf8cab0e041"
  },
  {
    "url": "swift/ios/t1-pod-webp.html",
    "revision": "a4c3f7c3660d05cdbf0a5355a50479b5"
  },
  {
    "url": "swift/ios/t2-youhua.html",
    "revision": "4f218def496f3c34ce129b19e9141d58"
  },
  {
    "url": "swift/ios/widgetkit-1.html",
    "revision": "cc7f9daec60da74072b90a144dfdfd1a"
  },
  {
    "url": "swift/ios/widgetkit-2.html",
    "revision": "c8434601543d48b1a34ec8a7c8716bc7"
  },
  {
    "url": "swift/ios/XCFramework.html",
    "revision": "61fbb0ef76fe78b123532617724e660f"
  },
  {
    "url": "swift/spm/adding-package-dependencies-to-your-app.html",
    "revision": "f9dbc07f0af6b6abe0fc74a592be0af5"
  },
  {
    "url": "swift/spm/building-swift-packages-or-apps-that-use-them-in-continuous-integration-workflows.html",
    "revision": "40a78bf16c05a8c7583ee101fe5b7b3a"
  },
  {
    "url": "swift/spm/bundling-resources-with-a-swift-package.html",
    "revision": "0e8c42287f3644b62f2f21ed9648c570"
  },
  {
    "url": "swift/spm/creating-a-standalone-swift-package-with-xcode.html",
    "revision": "5b15221ca973ced00ef1c7dfdb77a1c3"
  },
  {
    "url": "swift/spm/developing-a-swift-package-in-tandem-with-an-app.html",
    "revision": "2b03196114ee9c55f9b668b9aef3d9af"
  },
  {
    "url": "swift/spm/distributing-binary-frameworks-as-swift-packages.html",
    "revision": "10024dab2932bedb18a6c29bd0f74d6e"
  },
  {
    "url": "swift/spm/editing-a-package-dependency-as-a-local-package.html",
    "revision": "2b497e2aa9374f0c56c2cd7764932e5a"
  },
  {
    "url": "swift/spm/identifying-binary-dependencies.html",
    "revision": "6221b3e6ef1773741f4c699424519d68"
  },
  {
    "url": "swift/spm/index.html",
    "revision": "1625211f4f822ab23f339cc50c5b5338"
  },
  {
    "url": "swift/spm/localizing-package-resources.html",
    "revision": "120e0c19907bcfc0543c34cc1d8c606b"
  },
  {
    "url": "swift/spm/organizing-your-code-with-local-packages.html",
    "revision": "1190cca0a0bb254612d8cde1f673c743"
  },
  {
    "url": "swift/spm/publishing-a-swift-package-with-xcode.html",
    "revision": "76d5f34b4fe10b3ffc725c7ed4c7eadc"
  },
  {
    "url": "swift/swiftui/ActionSheet.html",
    "revision": "97385f5534b63f4a94ced64da226aaf1"
  },
  {
    "url": "swift/swiftui/Alert.html",
    "revision": "7aace670f3e198eaabc050967bab4fdb"
  },
  {
    "url": "swift/swiftui/AnyGesture.html",
    "revision": "01efdedc1543e615fdb942f2b0bfc905"
  },
  {
    "url": "swift/swiftui/Bindings.html",
    "revision": "357dd6bd13fc2da9199c2d83e1f36247"
  },
  {
    "url": "swift/swiftui/Button.html",
    "revision": "e840c957eade28a9e0ac52f7174f17c8"
  },
  {
    "url": "swift/swiftui/DatePicker.html",
    "revision": "531319c856470d985d2be6f1ee334a07"
  },
  {
    "url": "swift/swiftui/DragGesture.html",
    "revision": "a0571610ad23bfa88f5dc2d126a9666c"
  },
  {
    "url": "swift/swiftui/DynamicNavigationDestinationLink.html",
    "revision": "c6eb42bf4781f7fa045890e1345e4fd7"
  },
  {
    "url": "swift/swiftui/EditButton.html",
    "revision": "3744b8820a456769a70b3e0f63675525"
  },
  {
    "url": "swift/swiftui/Environment.html",
    "revision": "69e1046ebfa5e01c218d7b0f65aaa51e"
  },
  {
    "url": "swift/swiftui/EnvironmentObject.html",
    "revision": "12b91f3a46938832f582bf5dec6a5e26"
  },
  {
    "url": "swift/swiftui/EnvironmentValues.html",
    "revision": "27694e19aa212044615792d8f46c1e90"
  },
  {
    "url": "swift/swiftui/ExclusiveGesture.html",
    "revision": "a5d9eb3b82414b1511684cee86abdd44"
  },
  {
    "url": "swift/swiftui/ForEach.html",
    "revision": "efc0c10f66f979a9fb44081213095ca0"
  },
  {
    "url": "swift/swiftui/Form.html",
    "revision": "9d5e3b6352ead6825a4b460235150e5f"
  },
  {
    "url": "swift/swiftui/GeometryReader.html",
    "revision": "00b88deecd0a953cb474261cd908a8a8"
  },
  {
    "url": "swift/swiftui/Group.html",
    "revision": "2de08658378abecf22ccbca4b747fc2f"
  },
  {
    "url": "swift/swiftui/GroupBox.html",
    "revision": "71aec13c2667cf8bcaab918cf43df873"
  },
  {
    "url": "swift/swiftui/HSplitView.html",
    "revision": "22f556823688a68624a898d4c2844b17"
  },
  {
    "url": "swift/swiftui/HStack.html",
    "revision": "b751efb80378bb10a78bdbdba6119bb1"
  },
  {
    "url": "swift/swiftui/Image.html",
    "revision": "d6017d65f77ccf778814704c8b7e7a32"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "7086624f9c95d72a8ce430014b03820f"
  },
  {
    "url": "swift/swiftui/ItemBasedPopUpButton.html",
    "revision": "82fe2c0010c5f7e212e687330efa8009"
  },
  {
    "url": "swift/swiftui/List.html",
    "revision": "72f40b096131bbbadc594ad252a3af11"
  },
  {
    "url": "swift/swiftui/LocalizedStringKey.html",
    "revision": "b1ebc8a77ec3b5308ff66503b4810667"
  },
  {
    "url": "swift/swiftui/LongPressGesture.html",
    "revision": "2c4cc927a23856d704b86f73c17b3cbb"
  },
  {
    "url": "swift/swiftui/MagnificationGesture.html",
    "revision": "14f5920b10777df66ccdca47352be633"
  },
  {
    "url": "swift/swiftui/Modal.html",
    "revision": "667bf9d4a728bb64564f0a2326a6b031"
  },
  {
    "url": "swift/swiftui/NavigationButton.html",
    "revision": "4023d9baa65aea4ecc7d4c1c2fd942c3"
  },
  {
    "url": "swift/swiftui/NavigationView.html",
    "revision": "5fb43adbfd306a3b9b3998b4599ce784"
  },
  {
    "url": "swift/swiftui/ObjectBinding.html",
    "revision": "379e19d3276b9c0aa77a31c00b8f07b6"
  },
  {
    "url": "swift/swiftui/PasteButton.html",
    "revision": "ea501173ba07b21e7c53e951392e4d84"
  },
  {
    "url": "swift/swiftui/Picker.html",
    "revision": "4478eccf4dc7eee709fefedae4cbb513"
  },
  {
    "url": "swift/swiftui/Popover.html",
    "revision": "8c73881a0524c10f6aa2bc852406e076"
  },
  {
    "url": "swift/swiftui/PreferenceKey.html",
    "revision": "41c5d93ec708a2f3c91af0850c8f16e0"
  },
  {
    "url": "swift/swiftui/PresentationButton.html",
    "revision": "8b06b1fca71c47e4f1abd1cee81348bb"
  },
  {
    "url": "swift/swiftui/Principle01.html",
    "revision": "1516c3710a77eabeb0e7228bc89bef4d"
  },
  {
    "url": "swift/swiftui/Principle02.html",
    "revision": "2900e0c1ca68920151d82add0220628e"
  },
  {
    "url": "swift/swiftui/Principle03.html",
    "revision": "3677ca8f2a4a4ad2a03ffecf2dab9c96"
  },
  {
    "url": "swift/swiftui/Principle04.html",
    "revision": "b2285b32940054b08b9a0d26944adb94"
  },
  {
    "url": "swift/swiftui/Principle05.html",
    "revision": "710427b825edc1d00865d343a9bba8d0"
  },
  {
    "url": "swift/swiftui/Principle06.html",
    "revision": "483d9d56d979cc253439ae587ea8f37c"
  },
  {
    "url": "swift/swiftui/PullDownButton.html",
    "revision": "085c0ce3ef54346c18a3d5140deb1685"
  },
  {
    "url": "swift/swiftui/result-builders.html",
    "revision": "1fad8efc3f7552a490eb5de4f46d65d0"
  },
  {
    "url": "swift/swiftui/RotationGesture.html",
    "revision": "f4ea16513fac19307cdad03eaa021dc5"
  },
  {
    "url": "swift/swiftui/ScrollView.html",
    "revision": "712c0cdb3e52e6072e39b186a1186037"
  },
  {
    "url": "swift/swiftui/Section.html",
    "revision": "674e885970319689d7959638da341997"
  },
  {
    "url": "swift/swiftui/SecureField.html",
    "revision": "52be4dabe1dfe3e75fb06774ce5793c4"
  },
  {
    "url": "swift/swiftui/SegmentedControl.html",
    "revision": "ed80135912e038a20fff92ef611529c9"
  },
  {
    "url": "swift/swiftui/SequenceGesture.html",
    "revision": "c4b2b4c18f54ebea94ff4ab7a4625719"
  },
  {
    "url": "swift/swiftui/Sheet.html",
    "revision": "63449d82ff4ebe931db000e46aab8a13"
  },
  {
    "url": "swift/swiftui/SimultaneousGesture.html",
    "revision": "50091f9a3061df2751f31b79d1dba84e"
  },
  {
    "url": "swift/swiftui/Slider.html",
    "revision": "9f9ace74ddeaf63f54fd34ca02d1f744"
  },
  {
    "url": "swift/swiftui/Stacks.html",
    "revision": "0625fd3fa69166a1e2957e3c251db217"
  },
  {
    "url": "swift/swiftui/State.html",
    "revision": "8dbb22892ddd1db4841fbffca02eb512"
  },
  {
    "url": "swift/swiftui/Stepper.html",
    "revision": "dfc58c26c0dc3850a65a7103fd211ef5"
  },
  {
    "url": "swift/swiftui/Strideable.html",
    "revision": "fca0b0857269fb2cc398ecfc2943d7bc"
  },
  {
    "url": "swift/swiftui/TabView.html",
    "revision": "50c23d28b05633636096fb5cec2e4b48"
  },
  {
    "url": "swift/swiftui/TapGesture.html",
    "revision": "3a37eebe25823165f7e4daa44c7cc642"
  },
  {
    "url": "swift/swiftui/Text.html",
    "revision": "f9b2b583d32c64925e92f0005cb0e518"
  },
  {
    "url": "swift/swiftui/TextField.html",
    "revision": "181bb54379f017dc917d6385b793e311"
  },
  {
    "url": "swift/swiftui/Toggle.html",
    "revision": "e92720b0b1de9cd78c9cbab089b3dfe2"
  },
  {
    "url": "swift/swiftui/Transaction.html",
    "revision": "9e0ca7287fde5b645bb771d005adec6d"
  },
  {
    "url": "swift/swiftui/UIViewController.html",
    "revision": "7e3b355221f2b6dad6c905e0412ff777"
  },
  {
    "url": "swift/swiftui/ViewModifier.html",
    "revision": "9aa93976b4747262c525e83190c2d73c"
  },
  {
    "url": "swift/swiftui/VSplitView.html",
    "revision": "e471dda89213936b6ecfa277f7054cf1"
  },
  {
    "url": "swift/swiftui/VStack.html",
    "revision": "25a3e07ad7b0cd28753a556e8c083548"
  },
  {
    "url": "swift/swiftui/WebImage.html",
    "revision": "f61c72e6ae2afde612c0ae2abd92decd"
  },
  {
    "url": "swift/swiftui/WebView.html",
    "revision": "1068543d5fff670d1d9deab7d101b8b0"
  },
  {
    "url": "swift/swiftui/ZStack.html",
    "revision": "67fde0099e7091c5416e9541fd75d26a"
  },
  {
    "url": "swift/tips/index.html",
    "revision": "e24828422dfb76493f7864402a577dd1"
  },
  {
    "url": "swift/tips/property-wrpappers.html",
    "revision": "3ca8caebab6c273a1b6061defce544be"
  },
  {
    "url": "swift/tips/structured-concurrency.html",
    "revision": "438a4637784f8c0f2f29cdd24387cb6b"
  },
  {
    "url": "swift/ubuntu/demo.html",
    "revision": "04346bdaa54777f223092454441fa1b7"
  },
  {
    "url": "swift/ubuntu/index.html",
    "revision": "23028cb61c205b2f0179b307df9d1870"
  },
  {
    "url": "swift/ubuntu/spm.html",
    "revision": "489908b0236e92b742069ce8fde6f6e4"
  },
  {
    "url": "swift/ubuntu/swiftenv.html",
    "revision": "d3acecc35c1d8d22faf9d5735002e744"
  },
  {
    "url": "swift/ubuntu/vscode.html",
    "revision": "123f120a55566ea395adcb6906176b2c"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "f9b0004d5ae4040af9b9cd8f676a6276"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "6a557e452e8d10fd58235734f34497e2"
  },
  {
    "url": "swift/vapor/t10-docker-k8s-1.html",
    "revision": "008ea61e6b0d92db9d8b8ab5ed805926"
  },
  {
    "url": "swift/vapor/t10-docker-k8s-2.html",
    "revision": "f4f3ce706a3c52249997e1868826db5c"
  },
  {
    "url": "swift/vapor/t10-docker-k8s-3.html",
    "revision": "7a72584fc3171213bc27984f684546ce"
  },
  {
    "url": "swift/vapor/t10-docker-k8s-4.html",
    "revision": "87749f9e2dc5f915f0e6cfd2e5e550b5"
  },
  {
    "url": "swift/vapor/t10-docker-k8s-5.html",
    "revision": "775f5162f80893353a17519e5b36a44f"
  },
  {
    "url": "swift/vapor/t10-docker-k8s-6.html",
    "revision": "1531f55d5b79c98f3bcbdd71d59adbfa"
  },
  {
    "url": "swift/vapor/t10-docker-k8s-7.html",
    "revision": "179d03035664e562f6253a2af09ad778"
  },
  {
    "url": "swift/vapor/t10-docker-k8s-8.html",
    "revision": "ca0e3335373a601046462520d4a43f8c"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "ed0545089e75507a7797bf479af91c6e"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "4c2a689799c2f00b4476a422bb1596ee"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "2081bc2b027b761dc8ace5f397c83c74"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "a0bc20156eeb3738812771cfccd88d32"
  },
  {
    "url": "swift/vapor/t6-say-oldbirds.html",
    "revision": "6b131e3705df6cd7d046d884ae5e1829"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "f4d5df92a74a98e79189d3b8223c235d"
  },
  {
    "url": "swift/vapor/u-11-auth.html",
    "revision": "bc33c52a2f61e1244b1ef41a0948a918"
  },
  {
    "url": "swift/vapor/u-12-permission.html",
    "revision": "9dced62aea4a87734087d7faf549107e"
  },
  {
    "url": "swift/vapor/v-20-read-code.html",
    "revision": "2912dc240d7613ba0a249d13f2f62c68"
  },
  {
    "url": "swift/vapor/v-21-io.html",
    "revision": "8f3fbe89362371f6ea4fe3fd0c192a64"
  },
  {
    "url": "swift/vapor/v-22-bio2.html",
    "revision": "a43febe8294f1f0d9349d5ee09a4c147"
  },
  {
    "url": "swift/vapor/v-23-swiftnio-do-text.html",
    "revision": "94cc5f4478dce12b860abfcf83187962"
  },
  {
    "url": "swift/vapor/v-24-swift-zhan-package.html",
    "revision": "8dae24e26225365e4d35eda823d29948"
  },
  {
    "url": "swift/vapor/v-25-swiftnio-do-serisize.html",
    "revision": "3253e6ccf41fd2287a433f7ad9e06d23"
  },
  {
    "url": "swift/vapor/v-26-swfitnio-grpc-1.html",
    "revision": "1914126192fcd4c8e3c7a0396199ffcb"
  },
  {
    "url": "swift/vapor/xcode-env-setup.html",
    "revision": "39768c53c8ad6caac6300d36c1377c73"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/ai/index.html",
    "revision": "4d4750eb0fc7d03212378ea29f1dd3c1"
  },
  {
    "url": "tag/centos/index.html",
    "revision": "2fd196df7d283e5b590984a99f200635"
  },
  {
    "url": "tag/django/index.html",
    "revision": "e1f339b9025fcf5d1f0852baa376b9b4"
  },
  {
    "url": "tag/docker/index.html",
    "revision": "d5a72cf07e4971643574f9fc40c7c720"
  },
  {
    "url": "tag/flask/index.html",
    "revision": "c313865bf873a301706d9f4c34ccdf3b"
  },
  {
    "url": "tag/flowchart/index.html",
    "revision": "47f30e236e21727fbf1fcd1c18d574bb"
  },
  {
    "url": "tag/flutter/index.html",
    "revision": "a10ec0dc49e4a07d8939d62630f7e3af"
  },
  {
    "url": "tag/flutter/page/2/index.html",
    "revision": "a004115154f9780d8db77b63756151ca"
  },
  {
    "url": "tag/flutter/page/3/index.html",
    "revision": "6239785ee2e7c4e5a7051966592e5705"
  },
  {
    "url": "tag/flutter/page/4/index.html",
    "revision": "504047044c25a73fbe3ca9727ee1eba1"
  },
  {
    "url": "tag/git/index.html",
    "revision": "e79dde615b59c1216734162685580a36"
  },
  {
    "url": "tag/github/index.html",
    "revision": "85fa057a20b72648c10c7f83b33d1ae2"
  },
  {
    "url": "tag/haskell/index.html",
    "revision": "153c5dd0a08ec7c2290fe40e1bec4b8f"
  },
  {
    "url": "tag/html/index.html",
    "revision": "ce3446198210e6cdacad517d434acff3"
  },
  {
    "url": "tag/index.html",
    "revision": "f5e71db38831eda83a65b2f0625e7023"
  },
  {
    "url": "tag/ios/index.html",
    "revision": "956c2e122c407312fed5a6c10c85bfc4"
  },
  {
    "url": "tag/ios/page/10/index.html",
    "revision": "1da4cbed994604629470154b849b5a65"
  },
  {
    "url": "tag/ios/page/2/index.html",
    "revision": "65e1dc4514aaafc6bd527287711e6afd"
  },
  {
    "url": "tag/ios/page/3/index.html",
    "revision": "f9f696ed339e38bfb5d70d23cc4b1da3"
  },
  {
    "url": "tag/ios/page/4/index.html",
    "revision": "57de8c43f3246c0e0fbbab1dd959e4cd"
  },
  {
    "url": "tag/ios/page/5/index.html",
    "revision": "1d7804efb373b873b6e2714e9edf3dcf"
  },
  {
    "url": "tag/ios/page/6/index.html",
    "revision": "7457b916cbff4f6242f09b5f8e8ec570"
  },
  {
    "url": "tag/ios/page/7/index.html",
    "revision": "7d51c01180bfd110c182907b5988493b"
  },
  {
    "url": "tag/ios/page/8/index.html",
    "revision": "f2d278dbc0c1c6d89cdee36b6799468c"
  },
  {
    "url": "tag/ios/page/9/index.html",
    "revision": "6f6abb11e56ed87205adc89f54b9cb0c"
  },
  {
    "url": "tag/java/index.html",
    "revision": "bb1dcf793f4f265529127d3a3286597a"
  },
  {
    "url": "tag/json/index.html",
    "revision": "71d28b1c62aee59af4992020cea8225c"
  },
  {
    "url": "tag/k8s/index.html",
    "revision": "3f540726562ab61fe6cfdcbeaf0e51cb"
  },
  {
    "url": "tag/layui/index.html",
    "revision": "eb794b6bd046d8c3155df3fe4cf93a2e"
  },
  {
    "url": "tag/plantuml/index.html",
    "revision": "1d1f0150764b4528321094e560e20d7e"
  },
  {
    "url": "tag/pod/index.html",
    "revision": "37524ee56f7e25fa39c4bcf4f94882a0"
  },
  {
    "url": "tag/poetry/index.html",
    "revision": "f813c4b4bf63c849c0c11547e27fd09c"
  },
  {
    "url": "tag/python/index.html",
    "revision": "abfc5ce86a8b5f3d03fe75fe41e6ccfe"
  },
  {
    "url": "tag/python/page/2/index.html",
    "revision": "0656df3e8626752562267b1c3c51756d"
  },
  {
    "url": "tag/read/index.html",
    "revision": "ab97f38d5ded4178322e73c20b5d6b1b"
  },
  {
    "url": "tag/spm/index.html",
    "revision": "b112161cbe743c5fa096639dee835cf4"
  },
  {
    "url": "tag/swift/index.html",
    "revision": "befab1657d8032ffb18d21716f5c2ea6"
  },
  {
    "url": "tag/swift/page/10/index.html",
    "revision": "337af7771860c567167287abc19a7522"
  },
  {
    "url": "tag/swift/page/11/index.html",
    "revision": "be9aab4ad970ee6b754d4be0baf50449"
  },
  {
    "url": "tag/swift/page/12/index.html",
    "revision": "03673feb118161d07e13fce718a13f15"
  },
  {
    "url": "tag/swift/page/13/index.html",
    "revision": "371fa69b23330cba6f53bdf7d142136d"
  },
  {
    "url": "tag/swift/page/14/index.html",
    "revision": "9cfebd5ff763403c63032220a8049b04"
  },
  {
    "url": "tag/swift/page/2/index.html",
    "revision": "7074fc4ce186496b84cd086b05a0c27c"
  },
  {
    "url": "tag/swift/page/3/index.html",
    "revision": "2cf2eef44fecdcb2f094edfbc97e201f"
  },
  {
    "url": "tag/swift/page/4/index.html",
    "revision": "9e587079a37035d1a6c3c00f57148aab"
  },
  {
    "url": "tag/swift/page/5/index.html",
    "revision": "e61a3b4ead5aefe3453756837155b77b"
  },
  {
    "url": "tag/swift/page/6/index.html",
    "revision": "63acbdc40da5bdf574adef91eed766a7"
  },
  {
    "url": "tag/swift/page/7/index.html",
    "revision": "09dcce63725c34be96d7d85edc4da534"
  },
  {
    "url": "tag/swift/page/8/index.html",
    "revision": "72581b4ae09c4aff3e590568bc7bd005"
  },
  {
    "url": "tag/swift/page/9/index.html",
    "revision": "806f460fccf730f17f4f3e5c65f83522"
  },
  {
    "url": "tag/swiftenv/index.html",
    "revision": "3cd5b2fc1b5a32af12361ba2a7aae4ea"
  },
  {
    "url": "tag/swiftnio/index.html",
    "revision": "7169a2012f866e0777f24cab902f1516"
  },
  {
    "url": "tag/swiftui/index.html",
    "revision": "5d5547bac3540d3d25943169f2cad604"
  },
  {
    "url": "tag/swiftui/page/2/index.html",
    "revision": "fc33169cd9814d0173aedbfd0336787c"
  },
  {
    "url": "tag/swiftui/page/3/index.html",
    "revision": "e7b2be46ed221dd55b10af0f0d76e0da"
  },
  {
    "url": "tag/swiftui/page/4/index.html",
    "revision": "e0a934f847689f9eaad02fd0c351a858"
  },
  {
    "url": "tag/swiftui/page/5/index.html",
    "revision": "ee3f743e9b4387381ab1ad84057fce97"
  },
  {
    "url": "tag/swiftui/page/6/index.html",
    "revision": "95aa9fa4724cf99afcce977b7d59e01c"
  },
  {
    "url": "tag/swiftui/page/7/index.html",
    "revision": "1a4c19a3250cb7032e22097ebcbf2181"
  },
  {
    "url": "tag/tips/index.html",
    "revision": "3f986eca27574b4b4eb61c4e8fdaa748"
  },
  {
    "url": "tag/tools/index.html",
    "revision": "16788106c132e0e9ba8907138bba5c0c"
  },
  {
    "url": "tag/tools/page/2/index.html",
    "revision": "a23d2a1efc0ec0ba0b18074f73c2bb36"
  },
  {
    "url": "tag/tools/page/3/index.html",
    "revision": "680e3bb6b40fc810c7f80751348b11cb"
  },
  {
    "url": "tag/ubuntu/index.html",
    "revision": "a260ca2139425aed5c6bb5e24c4ffb28"
  },
  {
    "url": "tag/vapor/index.html",
    "revision": "2810dd522e92c94f9db0af4f89103f10"
  },
  {
    "url": "tag/vapor/page/2/index.html",
    "revision": "8ed94ff5534c92b552529c8fed61eb69"
  },
  {
    "url": "tag/vapor/page/3/index.html",
    "revision": "e7330d88cac3d54c16656d7e17295f7f"
  },
  {
    "url": "tag/vapor/page/4/index.html",
    "revision": "21cab612726b501be68d17dabf9e15fe"
  },
  {
    "url": "tag/VituralBox/index.html",
    "revision": "61514177c49ee11ab6537dbf2b44ff66"
  },
  {
    "url": "tag/vscode/index.html",
    "revision": "b6705ca6a0e9916b9bd756a02aac18d3"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "00d777e927f543bde6160f4e208ebd50"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "72d469cb0a5a3a8f7bb310a1123d9645"
  },
  {
    "url": "tag/webkit/index.html",
    "revision": "2a6ef1d4a2dcd0467d8e8e79a2d30ec1"
  },
  {
    "url": "tag/widgetkit/index.html",
    "revision": "c0893f3ab492030e7b7849465996044f"
  },
  {
    "url": "tag/xm-select/index.html",
    "revision": "a4132c57ce3bba10cd827be8d6be040a"
  },
  {
    "url": "tag/yaml/index.html",
    "revision": "d43de7342f4112ceba32629c3a3422e6"
  },
  {
    "url": "tag/书单/index.html",
    "revision": "b5dece7ddc0d985c9d9fef444c2afbeb"
  },
  {
    "url": "tag/函数式编程/index.html",
    "revision": "6d587952f54ae2f67e349fea045c751b"
  },
  {
    "url": "tag/加密/解密/index.html",
    "revision": "b81d7ab2d0a1929f68c749a6d7575195"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "018fa2d5268d5f19be9e16eaccf79f6e"
  },
  {
    "url": "tag/基础/page/2/index.html",
    "revision": "6e6ea55b901c7b78c96c12a0b63f6cbb"
  },
  {
    "url": "tag/打包/index.html",
    "revision": "a64ce350e4e80717aef717381874a638"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "870cc69205f3b0e45f6c4561b9c4ae1e"
  },
  {
    "url": "tag/数据结构与算法/page/2/index.html",
    "revision": "604e131fc75a204774eac9182931b7e3"
  },
  {
    "url": "tag/笔记/index.html",
    "revision": "aef28055df20a0b378df689e4cb7a146"
  },
  {
    "url": "tag/阅读/index.html",
    "revision": "e281a9e0ec0c0c00bc87d7c5185f9ad9"
  },
  {
    "url": "timeline/index.html",
    "revision": "33ed3d46c812794f46ceb66152da2b98"
  },
  {
    "url": "tools/docsify.html",
    "revision": "fffb5915550a2d3c0e1cb7272a0cf168"
  },
  {
    "url": "tools/flowchart/index.html",
    "revision": "adc6ada4bbe3bd81571bc523cffc9e79"
  },
  {
    "url": "tools/git/git-branch-mapping.html",
    "revision": "1e195731f796615dbb685a67a06f61d6"
  },
  {
    "url": "tools/git/git-reset.html",
    "revision": "5787cd652ebe86c493fe2c0ec6f767a4"
  },
  {
    "url": "tools/git/index.html",
    "revision": "7a0501a5e112e66e0583cd165bb814b2"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "cca3cfe7b3f6186fd5566169853be4c8"
  },
  {
    "url": "tools/git/t2-git-submodule.html",
    "revision": "87a0283fba128cafd4c71c8392ac1232"
  },
  {
    "url": "tools/html/css-equal-distribution-layout.html",
    "revision": "01577d5daf5a7af72bbf85c15e96cb0d"
  },
  {
    "url": "tools/html/index.html",
    "revision": "27a36f4a7daf62a671e53688af4f6c4b"
  },
  {
    "url": "tools/html/js-vant-vue-callable.html",
    "revision": "7eed844db70b7b6dc97b7cfac870dd37"
  },
  {
    "url": "tools/html/xm-select-use.html",
    "revision": "c73d1db9f097e14aca585e25f1f60b56"
  },
  {
    "url": "tools/note/index.html",
    "revision": "0834d1d3013e27ac8516d91619210ea5"
  },
  {
    "url": "tools/note/vitualbox-increase-space.html",
    "revision": "b40867b69859439da58d8c09723ab53a"
  },
  {
    "url": "tools/plantuml/index.html",
    "revision": "40100825b0189d4620dc0ca7b86eae63"
  },
  {
    "url": "tools/plantuml/t1-sequence-diagram.html",
    "revision": "2b8c2b6e7a26472b6d1af5fbf1ad3bfe"
  },
  {
    "url": "tools/plantuml/t2-class-diagram.html",
    "revision": "d5372c67bdd0c3a08a9c875ac09bef14"
  },
  {
    "url": "tools/vuepress/deploy-github-action.html",
    "revision": "de33fd548739af7530a7f1af3e594908"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "54f547bbfc89267fe718f5c59f25b3dc"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "b85a35891f58585c376f0897f49a357c"
  },
  {
    "url": "tools/vuepress/memory-out.html",
    "revision": "20f88c64e6fb175f613c4be08d504ab2"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "43bd73678a2e520db8df2a7f5a767c9b"
  },
  {
    "url": "vapor-zh.jpeg",
    "revision": "d1ed04e40811559da80fc6465413e372"
  },
  {
    "url": "vue/index.html",
    "revision": "1370f1bd293e653516abea4dc44c87dd"
  },
  {
    "url": "vue/vue-component.html",
    "revision": "5a75d8ba22dc12087a24001f6cec0d69"
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
