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
    "revision": "2045828a3cf1b550302c3fbb5277f72f"
  },
  {
    "url": "about/app/index.html",
    "revision": "360810fca0d193c9522912f65e6b610b"
  },
  {
    "url": "about/app/t1-protocol.html",
    "revision": "f51489bac173627a19346fdd9f0e253e"
  },
  {
    "url": "about/app/t2-secrect.html",
    "revision": "b056097059728e3319135c20f89b2977"
  },
  {
    "url": "about/app/t3-miniapps-sec.html",
    "revision": "ce00fdb3e92c3e10c727ea4371e32eb4"
  },
  {
    "url": "about/index/index.html",
    "revision": "60f5787bacac5f69cff24590b47153e5"
  },
  {
    "url": "ai/index.html",
    "revision": "86381ca856ff98b38ab3639684411556"
  },
  {
    "url": "ai/t1-gzj.html",
    "revision": "82ec76cd7d1e6a32366d60fb35dbb56b"
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
    "url": "assets/js/100.ca8c3610.js",
    "revision": "2d551bbc7300b8ead38cdf647bdc6a57"
  },
  {
    "url": "assets/js/101.e0df4dae.js",
    "revision": "c1180e60610de381171995a1bfe2336b"
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
    "url": "assets/js/104.e76eddee.js",
    "revision": "d310cf8fd6a8356f6a2ff4300133967c"
  },
  {
    "url": "assets/js/105.15f8ffce.js",
    "revision": "f3fc89b403219a77c33a186d73647a40"
  },
  {
    "url": "assets/js/106.e17dede7.js",
    "revision": "6498993d9f0229012fb49b03df85720f"
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
    "url": "assets/js/109.5622bb3f.js",
    "revision": "c8ece226aca1c7269c779735a179a1b5"
  },
  {
    "url": "assets/js/11.7df7bfb6.js",
    "revision": "d4f9488528383e31d58059bcc6041eca"
  },
  {
    "url": "assets/js/110.3040f0a5.js",
    "revision": "7b6d2695e969b1dcf41b044079fe400b"
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
    "url": "assets/js/115.1de71db5.js",
    "revision": "9e43832b23b1a8826c3098f340aadb4e"
  },
  {
    "url": "assets/js/116.245031f9.js",
    "revision": "318c11c1566a6db05c9c216737a214e6"
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
    "url": "assets/js/12.a6edbc22.js",
    "revision": "d80e88e3a98475be4677c85e2d7a052e"
  },
  {
    "url": "assets/js/120.990041a7.js",
    "revision": "8b4a409683771ee038db17462cc60f0b"
  },
  {
    "url": "assets/js/121.8e609c9d.js",
    "revision": "6c550589b00cdb79d8bb00514e0140fd"
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
    "url": "assets/js/127.ee81596f.js",
    "revision": "4b43248fff27dd6d60c5b529f81c1414"
  },
  {
    "url": "assets/js/128.60bfddd4.js",
    "revision": "9d3562dbc5bc8167b61eb446a7c2edb7"
  },
  {
    "url": "assets/js/129.38c6f4cd.js",
    "revision": "4d1d0e38df710ef035cbffa5ddbc7ac1"
  },
  {
    "url": "assets/js/13.dae06c64.js",
    "revision": "7f8c1b4114a92194c42d146b009774b1"
  },
  {
    "url": "assets/js/130.2732a6da.js",
    "revision": "3820f8098fe11f68a2a0d7fc1fb9bb25"
  },
  {
    "url": "assets/js/131.fd13b0fe.js",
    "revision": "03ddf48c077f83630b10d26b66b777fa"
  },
  {
    "url": "assets/js/132.c452005c.js",
    "revision": "cc5a6ccec0b8e13cc18fc892a3159905"
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
    "url": "assets/js/135.3cdbab1c.js",
    "revision": "48bd9065bef7bce995bc0ba51022f8e5"
  },
  {
    "url": "assets/js/136.2691404a.js",
    "revision": "0611f8bee17af3dcc2782df41df0759b"
  },
  {
    "url": "assets/js/137.a96545fe.js",
    "revision": "a38aa0df960a63a16ccc77da77131abe"
  },
  {
    "url": "assets/js/138.579a20e2.js",
    "revision": "17d4ca9bf9d982e731ca1487379a2a6e"
  },
  {
    "url": "assets/js/139.abd54a79.js",
    "revision": "65279c5ceb1071a73d0e95bc18c3a09c"
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
    "url": "assets/js/143.5b84df44.js",
    "revision": "5e2b8b69aa10bdc6d68bca2dded62912"
  },
  {
    "url": "assets/js/144.774eb382.js",
    "revision": "ed0fdbc1a96048e6f2ebfffbaa603336"
  },
  {
    "url": "assets/js/145.b333dc85.js",
    "revision": "397e600f22569b3f616ed3b6b72ae49e"
  },
  {
    "url": "assets/js/146.5383d61a.js",
    "revision": "8f1abb6b2cec1bc712053ee4e700d649"
  },
  {
    "url": "assets/js/147.5c8a6d34.js",
    "revision": "3a8fb796f46895b1793c2c9aa67b609a"
  },
  {
    "url": "assets/js/148.b2d22435.js",
    "revision": "12a5fdd086e361a0cd4eb1589244e427"
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
    "url": "assets/js/154.b4996770.js",
    "revision": "182af1d894ae4adbd63f65e276ab860e"
  },
  {
    "url": "assets/js/155.2d96bf11.js",
    "revision": "3a377b7f73e783bb957b32db60f061ba"
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
    "url": "assets/js/16.d4f8a177.js",
    "revision": "64354d46c8bcc3e557ca5c7eaa5b3ae0"
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
    "url": "assets/js/163.bf3a48d0.js",
    "revision": "347a803c6d55c8ad15de833edc000421"
  },
  {
    "url": "assets/js/164.9e60e9f3.js",
    "revision": "049855a68364f90c3744b61b39730368"
  },
  {
    "url": "assets/js/165.729f2c7c.js",
    "revision": "946f40fa6b9149f17356b93283918b56"
  },
  {
    "url": "assets/js/166.cd2b7241.js",
    "revision": "708882fa909a40665f551160e807e7ac"
  },
  {
    "url": "assets/js/167.7ff155fb.js",
    "revision": "8b6885e5d1e1f8e1d7fdc4fb12f402f9"
  },
  {
    "url": "assets/js/168.73f70488.js",
    "revision": "f3bc90ba4198f3b612bb877c2906d6ad"
  },
  {
    "url": "assets/js/169.3d872f66.js",
    "revision": "566c4106a2795230e4f5076c2f66a251"
  },
  {
    "url": "assets/js/17.eeeddeee.js",
    "revision": "ea91f4986ade0ea0c212f766912ce4c4"
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
    "url": "assets/js/172.09a5a38e.js",
    "revision": "c31fbb5ae275a8d268efcb0b050b5e4e"
  },
  {
    "url": "assets/js/173.8a95d07d.js",
    "revision": "730dfd48885e33c11349901a457f9485"
  },
  {
    "url": "assets/js/174.dd31d730.js",
    "revision": "6b8e50b9311bf39d61b00047ab3d7399"
  },
  {
    "url": "assets/js/175.04b1c249.js",
    "revision": "b61fdadfc3da9a27d177b90acc0557cd"
  },
  {
    "url": "assets/js/176.284d579c.js",
    "revision": "f6859b9e49e377fe76fc4eaf52d55395"
  },
  {
    "url": "assets/js/177.45316b27.js",
    "revision": "16cff3aacef67fc4b5d9884b963e8e1c"
  },
  {
    "url": "assets/js/178.56856211.js",
    "revision": "a5e9028dff66223986083265ee2e9d3d"
  },
  {
    "url": "assets/js/179.ad52eafa.js",
    "revision": "4d3571c5f9a20e74c9372ddf23d186e7"
  },
  {
    "url": "assets/js/18.8ab0e1f0.js",
    "revision": "ac7f9b7bf87c9b34e474ddbf8b403d95"
  },
  {
    "url": "assets/js/180.dfa716a2.js",
    "revision": "a73579f6d37aa531b999db7633232436"
  },
  {
    "url": "assets/js/181.e90fa7f5.js",
    "revision": "0c5540917d02976e2750418855ab8f40"
  },
  {
    "url": "assets/js/182.01bb4f87.js",
    "revision": "9f3373ae6666e5723989db8621391264"
  },
  {
    "url": "assets/js/183.9c5a7c4f.js",
    "revision": "d3b903b382f7fd502cb32e119e8eb0b4"
  },
  {
    "url": "assets/js/184.0553d61d.js",
    "revision": "a08a3b268450fe9c3a244eef0bb8ed12"
  },
  {
    "url": "assets/js/185.0c468488.js",
    "revision": "aba45105eb72c59bb2c582b83d1dd2f0"
  },
  {
    "url": "assets/js/186.52e0dc41.js",
    "revision": "7a096dea80e0e45cc5fd3b5fb16daad8"
  },
  {
    "url": "assets/js/187.c7953eed.js",
    "revision": "ba99f8508a324bd968793fa14e512d1b"
  },
  {
    "url": "assets/js/188.8b51e83d.js",
    "revision": "69d11271fe14924d4065fb8ff3126986"
  },
  {
    "url": "assets/js/189.c92b9ac2.js",
    "revision": "78e02fb24d31547c7d9b161d39635fcf"
  },
  {
    "url": "assets/js/19.8e1b1269.js",
    "revision": "b46d2dec9292a7ff98ae338e740c45ce"
  },
  {
    "url": "assets/js/190.bb020870.js",
    "revision": "6d5f66addb9901cae648bced32ced3c6"
  },
  {
    "url": "assets/js/191.1ea8e4f1.js",
    "revision": "5dfb5ded474e7b35fe3eafac3c9c78f5"
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
    "url": "assets/js/194.a8797a18.js",
    "revision": "3d315040971d1572ba83ac7e3fe6aa18"
  },
  {
    "url": "assets/js/195.e371cb46.js",
    "revision": "ae87bf74cfa670fa147db5c90d988113"
  },
  {
    "url": "assets/js/196.bca540ef.js",
    "revision": "97ee0373d86c87504da8ed60235b8c4b"
  },
  {
    "url": "assets/js/197.a0e72271.js",
    "revision": "23d69d3103646d795ce0b8d0973e28ce"
  },
  {
    "url": "assets/js/198.0b0fb034.js",
    "revision": "400f28f01acad67b60c5e4338e5861ce"
  },
  {
    "url": "assets/js/199.9ea9ffc4.js",
    "revision": "8c1dcddae5c5c4717155c22d585df9bb"
  },
  {
    "url": "assets/js/20.a1bde2a5.js",
    "revision": "cf202be16fae863c0a91217e279eb5bd"
  },
  {
    "url": "assets/js/200.bc4c05b3.js",
    "revision": "98dd4e263ce9707e0d22d0c9a0d1ada9"
  },
  {
    "url": "assets/js/201.d247716b.js",
    "revision": "f1fca412f029e79235d57c01862fcb20"
  },
  {
    "url": "assets/js/202.4826f6f5.js",
    "revision": "62f000622e207f5fab183ab26fe54abb"
  },
  {
    "url": "assets/js/203.3717f914.js",
    "revision": "c3d9fee738796805e3186835a9872e7d"
  },
  {
    "url": "assets/js/204.26c278ef.js",
    "revision": "5351923fa0c1aed06513be2fbd46d376"
  },
  {
    "url": "assets/js/205.f313bcea.js",
    "revision": "6d45c472ef34d738c5e44791b3bbd083"
  },
  {
    "url": "assets/js/206.d8a85d97.js",
    "revision": "fd15738c07261e6e79f1245a9b7176c1"
  },
  {
    "url": "assets/js/207.45ced772.js",
    "revision": "ece5b4c04fd446ab3f6e621da077ea16"
  },
  {
    "url": "assets/js/208.0f715622.js",
    "revision": "71e7a46a456d9651e1062d1b52d5c7b3"
  },
  {
    "url": "assets/js/209.16e08976.js",
    "revision": "6d62a7d062ce1e95b9c5fcba6f78b5b1"
  },
  {
    "url": "assets/js/21.648dc923.js",
    "revision": "a3ac571dfe21b2fc1d3e23e963dd83ba"
  },
  {
    "url": "assets/js/210.d0116468.js",
    "revision": "685864f912e7fb42de1d683e435b60ec"
  },
  {
    "url": "assets/js/211.caae218d.js",
    "revision": "698db57487e90ac83edf50ca75d3bbfe"
  },
  {
    "url": "assets/js/212.673dbb4c.js",
    "revision": "d504d6759e7f482606c35eeff2fa5fdb"
  },
  {
    "url": "assets/js/213.f8c94606.js",
    "revision": "8df82d95e81e02bdf4e0ed76eb2942ca"
  },
  {
    "url": "assets/js/214.444fe8b6.js",
    "revision": "ea505db82a68395910dc0a64209e27eb"
  },
  {
    "url": "assets/js/215.5fc79c90.js",
    "revision": "76a79f9e4b675946aafaa77e1e82627e"
  },
  {
    "url": "assets/js/216.bfe1c182.js",
    "revision": "9cf2c35e83b91cf74a7fb4a2368b30c3"
  },
  {
    "url": "assets/js/217.49c66008.js",
    "revision": "4220ad5c6d0cc43b86f15cca2126abc2"
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
    "url": "assets/js/22.904be68b.js",
    "revision": "cee57ab95b0e28c368abc6eaed3e7e41"
  },
  {
    "url": "assets/js/220.bb970b83.js",
    "revision": "be4fefad2a1a74b69e136576e7b2c0f5"
  },
  {
    "url": "assets/js/221.48f270ef.js",
    "revision": "642eed5b1e654f5f5d2461b02a524e41"
  },
  {
    "url": "assets/js/222.b1658494.js",
    "revision": "260e6b257c51bbe385293ed709c49d85"
  },
  {
    "url": "assets/js/223.cda90a54.js",
    "revision": "df044a569898918e7204cbedb63196b8"
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
    "url": "assets/js/25.41359b65.js",
    "revision": "db8f9316ae2b7beca21dd0151d50a75a"
  },
  {
    "url": "assets/js/26.5099a8af.js",
    "revision": "1abfebe0bf882fd69a2487c567558e4f"
  },
  {
    "url": "assets/js/27.a087bf61.js",
    "revision": "fe1d90da43b62c2b1b97f1d5be93e1b0"
  },
  {
    "url": "assets/js/28.03f74411.js",
    "revision": "84d618b02dbe4f108a87d454e2bfd785"
  },
  {
    "url": "assets/js/29.cbea7ff0.js",
    "revision": "71706d1865841267c76538ce0dd10207"
  },
  {
    "url": "assets/js/3.03b8f943.js",
    "revision": "737a431cc8030315950311ca7b95026a"
  },
  {
    "url": "assets/js/30.2062fa1a.js",
    "revision": "55b61062e6633518f43dba8e34352b20"
  },
  {
    "url": "assets/js/31.a8145ddd.js",
    "revision": "3e9acb0d2b0d73c8406081a2ead7e58e"
  },
  {
    "url": "assets/js/32.40da5fef.js",
    "revision": "5cba1a12bc66b9bc479f135bedc5b317"
  },
  {
    "url": "assets/js/33.388c6230.js",
    "revision": "5c340363b8b1b7885de92956c62b54dc"
  },
  {
    "url": "assets/js/34.43ec4464.js",
    "revision": "013901eacd8760167783c00f81f52755"
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
    "url": "assets/js/37.8062e551.js",
    "revision": "065ee42b117b3945f6020bdad96de0f7"
  },
  {
    "url": "assets/js/38.9d8d2f93.js",
    "revision": "bbd3d790bd27bfe4d309286fdd5949b4"
  },
  {
    "url": "assets/js/39.c60f1332.js",
    "revision": "11df79cfae25297ce437f975e2360fab"
  },
  {
    "url": "assets/js/4.ec8238cb.js",
    "revision": "107d56e1f2f07697778f23d95805bcd5"
  },
  {
    "url": "assets/js/40.0f4c246c.js",
    "revision": "2fe3dfcf882ed107561a7dda03e8395a"
  },
  {
    "url": "assets/js/41.56528ebb.js",
    "revision": "585cbb4d5d5d05b4365a0f3151551e69"
  },
  {
    "url": "assets/js/42.91a71cfa.js",
    "revision": "1306f5836a821933f7e8cbc9192d3a75"
  },
  {
    "url": "assets/js/43.f76e6a42.js",
    "revision": "bebd60fef137b2a3230a5d09999eeb64"
  },
  {
    "url": "assets/js/44.c1b05484.js",
    "revision": "6e1188aa64af8dde30cc95571927560f"
  },
  {
    "url": "assets/js/45.f6f56f70.js",
    "revision": "7a2c6c020cdc4dc8ab2fb9b49636d557"
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
    "url": "assets/js/48.6147eec7.js",
    "revision": "b45c999a1b643e45a815e72b0ecacc16"
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
    "url": "assets/js/51.427c43e6.js",
    "revision": "43405a97a5aeae7a6ca38602e18bfb78"
  },
  {
    "url": "assets/js/52.abc8f2c4.js",
    "revision": "189d83f1b6d303cbe3dbf6d25db02d81"
  },
  {
    "url": "assets/js/53.0fe89005.js",
    "revision": "940519aa9763076a15a7c967ab7e5b4b"
  },
  {
    "url": "assets/js/54.19cc3736.js",
    "revision": "45452b115966d6f32d225203d8bd2435"
  },
  {
    "url": "assets/js/55.d4e6c173.js",
    "revision": "440fcfa3e84ef447c7f904d67f5d31fc"
  },
  {
    "url": "assets/js/56.b728b768.js",
    "revision": "2e843e7c65b7e51ed28faaec8b25b492"
  },
  {
    "url": "assets/js/57.60edecb3.js",
    "revision": "16517ccda327a4948ee9b73b3f8aeca5"
  },
  {
    "url": "assets/js/58.125bca71.js",
    "revision": "987960cbfc92c6510fd0fb373490a180"
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
    "url": "assets/js/60.43063fd2.js",
    "revision": "89fec651e1aaa7943ee00fb1a4df58cf"
  },
  {
    "url": "assets/js/61.81345526.js",
    "revision": "dc9d23d17a346824afaa8325e0b56df0"
  },
  {
    "url": "assets/js/62.4f1224e8.js",
    "revision": "203b92a28d965541ec28090486152e1b"
  },
  {
    "url": "assets/js/63.7b7e651d.js",
    "revision": "dba5b31494bd9446e876986474ec339b"
  },
  {
    "url": "assets/js/64.04c2f5b8.js",
    "revision": "54b623e74f2918935841da97e705e04a"
  },
  {
    "url": "assets/js/65.ff06b778.js",
    "revision": "110da5b5e33f31ec17328086fa04c781"
  },
  {
    "url": "assets/js/66.a00b9f71.js",
    "revision": "ead2f6672c29055ce3903d0e46c02618"
  },
  {
    "url": "assets/js/67.1aa440d3.js",
    "revision": "c7045dc1b10246e5b4842efc889d7f09"
  },
  {
    "url": "assets/js/68.2d0a74cb.js",
    "revision": "46f033cc9ce6ebc4726ad4c5fe4922fe"
  },
  {
    "url": "assets/js/69.1c8ea074.js",
    "revision": "94b7f68135867c658122aacf4806dbbd"
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
    "url": "assets/js/71.3b8f516d.js",
    "revision": "b57758681efb36d8047507f64b249b3b"
  },
  {
    "url": "assets/js/72.e52c8463.js",
    "revision": "5383183f05a2ff5d7673d458d5b359be"
  },
  {
    "url": "assets/js/73.497cf87c.js",
    "revision": "89d01908df139552d8fa8b6eb24d4e05"
  },
  {
    "url": "assets/js/74.2aa57466.js",
    "revision": "a012cf0c9fabc2eb4ef4394f053ee5d4"
  },
  {
    "url": "assets/js/75.9b269e69.js",
    "revision": "433b5e90bca9e7c66497d57a2f5123cb"
  },
  {
    "url": "assets/js/76.28493260.js",
    "revision": "7d48a96813d6cdc577c998e27a49f94d"
  },
  {
    "url": "assets/js/77.6b2e973c.js",
    "revision": "2091e8e7dbd8d0b1ddd6dff36344ea05"
  },
  {
    "url": "assets/js/78.fdd2b0ab.js",
    "revision": "530c5f2edfba9b8a7c1b1dd885f20ffb"
  },
  {
    "url": "assets/js/79.7abb0a76.js",
    "revision": "b919e2f5f39daaaf009b94ec8d7086d8"
  },
  {
    "url": "assets/js/8.ce438359.js",
    "revision": "e158dacd50c21aee1a1f3be27bc33cad"
  },
  {
    "url": "assets/js/80.ed77a603.js",
    "revision": "d71050d29091262136864d319309f477"
  },
  {
    "url": "assets/js/81.146e864e.js",
    "revision": "92927d915811d48f285c19902a36353c"
  },
  {
    "url": "assets/js/82.635df817.js",
    "revision": "ff78d32aac795ebd575c71155f2c8139"
  },
  {
    "url": "assets/js/83.4df8e3e0.js",
    "revision": "47bd27af045fb98e9d3e935b225b95b6"
  },
  {
    "url": "assets/js/84.09dc1cb6.js",
    "revision": "bb182f7e41707b65c2bba31f6698af87"
  },
  {
    "url": "assets/js/85.42a41e24.js",
    "revision": "2d5ab90f9ddfccf232b01b9593e823d3"
  },
  {
    "url": "assets/js/86.ae3ffdfc.js",
    "revision": "8675eb56df27e6b1d7b6c203a712dcc2"
  },
  {
    "url": "assets/js/87.0e9d3353.js",
    "revision": "73888e48db3ea26ae283f325834dc45b"
  },
  {
    "url": "assets/js/88.9ac905d6.js",
    "revision": "66e07ecfc7ef269f826c7f9f6354289e"
  },
  {
    "url": "assets/js/89.2e1cdf2d.js",
    "revision": "53d54dbb328164bd8546514e38e443aa"
  },
  {
    "url": "assets/js/9.146dde97.js",
    "revision": "860f53fb242e1e04e0f5a25d10282810"
  },
  {
    "url": "assets/js/90.8654c7cd.js",
    "revision": "702c0f57c8ed80038502f0f8e94ef19c"
  },
  {
    "url": "assets/js/91.f0c64ba8.js",
    "revision": "1f1cdb1a0961780ceff5c1decae00a5a"
  },
  {
    "url": "assets/js/92.df551a2b.js",
    "revision": "b0d2663bf2fbe0cf7a830fd336411cde"
  },
  {
    "url": "assets/js/93.b336ec28.js",
    "revision": "82c4f53a5bc3d41e73ed26224b950f15"
  },
  {
    "url": "assets/js/94.6c6b0b66.js",
    "revision": "4e86c97ff13264f696644c0a1a7feb0f"
  },
  {
    "url": "assets/js/95.244220ca.js",
    "revision": "10112c044de8f2f28b702f1a5f54c205"
  },
  {
    "url": "assets/js/96.6656d19d.js",
    "revision": "9d21eea5494c3f63e21eda9925ebbba8"
  },
  {
    "url": "assets/js/97.50699a69.js",
    "revision": "8800c3342aa47c1050b3a10c7b474ab9"
  },
  {
    "url": "assets/js/98.f1eae8ad.js",
    "revision": "a35453410a74d686436d5cf0e1a8e85d"
  },
  {
    "url": "assets/js/99.4cfd6ec0.js",
    "revision": "e258bd5dffd3ace1ee08a3d5e0d21aa6"
  },
  {
    "url": "assets/js/app.8f53e136.js",
    "revision": "725cc4ac8320358195515c31c7514c22"
  },
  {
    "url": "author.jpeg",
    "revision": "7e1bfc6337e85b76f0f6e95859ed93d6"
  },
  {
    "url": "basis/algorithms/index.html",
    "revision": "2e19be35eff6f025cad19b9f1fc82ea0"
  },
  {
    "url": "basis/algorithms/t1-buble-sort.html",
    "revision": "ef6a641f65f3ea3b4491642a05642010"
  },
  {
    "url": "basis/algorithms/t2-selection-sort.html",
    "revision": "c01b3b51178e96a9719bafb65f2edbc6"
  },
  {
    "url": "basis/algorithms/t3-insertion-sort.html",
    "revision": "f3558369c8bc0519e6a17c61672d591d"
  },
  {
    "url": "basis/algorithms/t4-shell-sort.html",
    "revision": "45f97f1e98285fd900fc2c51886b5d8c"
  },
  {
    "url": "basis/algorithms/t5-quick-sort.html",
    "revision": "a2c60b00be6f7996e3f5745d8662f434"
  },
  {
    "url": "basis/algorithms/t6-heap-sort.html",
    "revision": "4f3da7b684ca33b37d5208211f99bbfe"
  },
  {
    "url": "basis/algorithms/t7-merge-sort.html",
    "revision": "4cd9e097345728ba78834a389668d9ca"
  },
  {
    "url": "basis/algorithms/t8-radix-sort.html",
    "revision": "e946bce2f4e8b894326cbdcfdd03a413"
  },
  {
    "url": "basis/algorithms/t9-count-sort.html",
    "revision": "770adbd10b4db9024625ff4195f43bc6"
  },
  {
    "url": "basis/algorithms/u1-bucket-sort.html",
    "revision": "83dd8958ecbcd73057864b7c79674934"
  },
  {
    "url": "basis/cmake/01-basic/A-hello-cmake.html",
    "revision": "689e98e6ea6c4a2db73efabaf4a554c4"
  },
  {
    "url": "basis/cmake/01-basic/B-hello-headers.html",
    "revision": "4bfd5ceaf9a3289f88c979d6a6037fca"
  },
  {
    "url": "basis/cmake/01-basic/C-static-library.html",
    "revision": "6a41e5b7b18ce960586dc29832f9770b"
  },
  {
    "url": "basis/cmake/01-basic/D-shared-library.html",
    "revision": "c69115e3fbec9332637931e5be4c9775"
  },
  {
    "url": "basis/cmake/01-basic/E-installing.html",
    "revision": "7ea6449d8ba98ee9aa4479bbf96492c2"
  },
  {
    "url": "basis/cmake/01-basic/F-build-type.html",
    "revision": "5681d11f86f6866bc61f4677049450fe"
  },
  {
    "url": "basis/cmake/01-basic/G-compile-flags.html",
    "revision": "034a0bd3c102337ed8122895dbfb4618"
  },
  {
    "url": "basis/cmake/01-basic/H-third-party-library.html",
    "revision": "f638461f9c6d1b66fa85c1456e56e571"
  },
  {
    "url": "basis/cmake/01-basic/I-compiling-with-clang.html",
    "revision": "79e76b223fd86c4827d461c372d8d9c2"
  },
  {
    "url": "basis/cmake/01-basic/index.html",
    "revision": "1def581884ea45719b816271d6340389"
  },
  {
    "url": "basis/cmake/01-basic/J-building-with-ninja.html",
    "revision": "bb0818697996ac3b7f8f362d26f8b104"
  },
  {
    "url": "basis/cmake/01-basic/K-imported-targets.html",
    "revision": "205aa3e05993e3d555350048bc8f027b"
  },
  {
    "url": "basis/cmake/01-basic/L-cpp-standard.html",
    "revision": "aa6c146e40287a3b833b8980c7d06817"
  },
  {
    "url": "basis/cmake/index.html",
    "revision": "d92d175e1a68a5e6ce62b118e6d08782"
  },
  {
    "url": "basis/design-patterns/AdapterPattern.html",
    "revision": "1ff33c837ab1be7df45232db7afced57"
  },
  {
    "url": "basis/design-patterns/BridgePattern.html",
    "revision": "ce717fb64fa99b85aba34605d5a679c7"
  },
  {
    "url": "basis/design-patterns/BuilderPattern.html",
    "revision": "51acb94f058165005bb5f2dbbde62ef1"
  },
  {
    "url": "basis/design-patterns/ChainOfResponsibilityPattern.html",
    "revision": "0375b1b06b4ed1a80b6afc9eddc498f3"
  },
  {
    "url": "basis/design-patterns/ClassReleation.html",
    "revision": "c251b1935a7fc96641f9a9c01488ec70"
  },
  {
    "url": "basis/design-patterns/CommandPattern.html",
    "revision": "eee1e0f145dd7ecd599c6074adefa5c1"
  },
  {
    "url": "basis/design-patterns/CompositePattern.html",
    "revision": "ac66c5f088b4f8c29816fe217837778a"
  },
  {
    "url": "basis/design-patterns/DecoratorPattern.html",
    "revision": "dd61664d6a77c2461936a150f5b9863b"
  },
  {
    "url": "basis/design-patterns/DesignPrinciples.html",
    "revision": "4b4347f07d0508f867b793ff31b796dd"
  },
  {
    "url": "basis/design-patterns/FacadePattern.html",
    "revision": "18db803cc1a99903d8590176fb946679"
  },
  {
    "url": "basis/design-patterns/FactoryPattern.html",
    "revision": "4e6e784c46da0fa1bbe417ac3992c148"
  },
  {
    "url": "basis/design-patterns/FilterCriteriaPattern.html",
    "revision": "2e614f6c5c7ca0b8eb595693f559be56"
  },
  {
    "url": "basis/design-patterns/FlyweightPattern.html",
    "revision": "d646250bfa4a65784d3d9a14f4f4041b"
  },
  {
    "url": "basis/design-patterns/index.html",
    "revision": "ab65b8db4373010b315828233a7bb2a5"
  },
  {
    "url": "basis/design-patterns/InterpreterPattern.html",
    "revision": "f8e18f9ad023ed60b7fd9fc2af396746"
  },
  {
    "url": "basis/design-patterns/IteratorPattern.html",
    "revision": "e17b343ad410fb1ee4ef11aa1df7e454"
  },
  {
    "url": "basis/design-patterns/MediatorPattern.html",
    "revision": "f450045ed938b79f032c2d152680917d"
  },
  {
    "url": "basis/design-patterns/MementoPattern.html",
    "revision": "475f0f712dd9268e38e7c799c6426a6c"
  },
  {
    "url": "basis/design-patterns/NullObjectPattern.html",
    "revision": "3e86caa7613b113b4d109e8c35004459"
  },
  {
    "url": "basis/design-patterns/ObserverPattern.html",
    "revision": "d490ed8a1e2fa347efb51d1ca810ba37"
  },
  {
    "url": "basis/design-patterns/PrototypePattern.html",
    "revision": "933ca4daceb5fcdb1bcd1eec982437fb"
  },
  {
    "url": "basis/design-patterns/ProxyPattern.html",
    "revision": "543cabc0cdad833682be19f74e1b8007"
  },
  {
    "url": "basis/design-patterns/SingletonPattern.html",
    "revision": "d8d0ebbc178ca587862483f160123289"
  },
  {
    "url": "basis/design-patterns/StatePattern.html",
    "revision": "36de75524ffb35a3502b294125d25917"
  },
  {
    "url": "basis/design-patterns/StrategyPattern.html",
    "revision": "f6075727b6d2edd387c92208240168f5"
  },
  {
    "url": "basis/design-patterns/TemplatePattern.html",
    "revision": "7f099a661f2b6bd51ff906bc0a1ae575"
  },
  {
    "url": "basis/design-patterns/VisitorPattern.html",
    "revision": "b2a8be2152e385f8501de59cceaf0f6a"
  },
  {
    "url": "basis/index/index.html",
    "revision": "4036f1fd6123cc2c01b55b821263d51c"
  },
  {
    "url": "basis/os/index.html",
    "revision": "b21a92a5b8df4c22e636dfe7928b7d1c"
  },
  {
    "url": "book/index.html",
    "revision": "b446467c38528004ef606a8aea602cc0"
  },
  {
    "url": "book/t-find-books.html",
    "revision": "772d7e8d890827b67e98be007c728696"
  },
  {
    "url": "categories/index.html",
    "revision": "c54ffb6f07c1be2703ccba73292336de"
  },
  {
    "url": "figma/index.html",
    "revision": "29bbfae4679e22fa86655560a9dacc90"
  },
  {
    "url": "flutter/index.html",
    "revision": "9f6eff8e8ecc39c7966c69dd66e0ab2b"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "b1e8505cc11848010765f57691c0fd67"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "227ac5f13736e2be130111e048b1a7a3"
  },
  {
    "url": "flutter/t3-messages.html",
    "revision": "e2b41d96e305ed1293b71cc895abb888"
  },
  {
    "url": "flutter/t3-mixin.html",
    "revision": "e7cf42ed118dbc32a00efaca541f5a22"
  },
  {
    "url": "flutter/t4-lifecycle.html",
    "revision": "fb3dd82c5714650214b3cfb00c7361fa"
  },
  {
    "url": "flutter/t5-flutter-web-deploy.html",
    "revision": "89d6b574cd8c1d1ea18aea3c89309539"
  },
  {
    "url": "flutter/t6-docker-web-deploy.html",
    "revision": "98ec5194a589515433a5805353d5ed6f"
  },
  {
    "url": "flutter/t7-fvm.html",
    "revision": "b6ab7c96555c48368462bf654c29d607"
  },
  {
    "url": "flutter/t8-const.html",
    "revision": "a970994f8ac9816779436bfa4e89f658"
  },
  {
    "url": "flutter/t9-logs.html",
    "revision": "bf487a951827c9d2af3ca69ae83afb45"
  },
  {
    "url": "flutter/u10-fvm-flutter2.html",
    "revision": "f1945f0b3a58f7787dd5bfe5fb6e0b24"
  },
  {
    "url": "flutter/u11-flutter-render.html",
    "revision": "d435943980aaf082ed11c8bdb9b1e90d"
  },
  {
    "url": "flutter/u12-flutter-create-w.html",
    "revision": "593b08b591c6ae71ba3e7dcaa8354789"
  },
  {
    "url": "flutter/u12-flutter-web-01.html",
    "revision": "3981e684c45a9f750cf53276ec1fddd5"
  },
  {
    "url": "flutter/u12-flutter-web-02.html",
    "revision": "ac75c26c762d3cba57ac8a301a947da2"
  },
  {
    "url": "flutter/u13-sliverappbar.html",
    "revision": "7ab8951d5017ea7f6f5829e5041f9fda"
  },
  {
    "url": "flutter/u14-navbar-color.html",
    "revision": "d25dd782d25df8137f929fcc1234d4c4"
  },
  {
    "url": "flutter/u15-custom-nabar.html",
    "revision": "1e30724e7b91a955de3e9eb9bb002991"
  },
  {
    "url": "flutter/u16-shape.html",
    "revision": "5f3ec261430e74f04468da0507c520dd"
  },
  {
    "url": "flutter/y1-statubar.html",
    "revision": "f04e3fe86f9a73bf28f05976201b9c20"
  },
  {
    "url": "haskell/1-install.html",
    "revision": "e751175fa51755257e3054f97c516a52"
  },
  {
    "url": "haskell/2-vscode.html",
    "revision": "18c797dbc3c6776dfa77a4208774e8a3"
  },
  {
    "url": "haskell/3-pktool.html",
    "revision": "7d9f599711ab06f7b330338768dec7cc"
  },
  {
    "url": "haskell/4-digui.html",
    "revision": "b7d3375b8b80e4adda72c612a467ece2"
  },
  {
    "url": "haskell/index.html",
    "revision": "9871942b3234a9b0b7b49006c5fef89d"
  },
  {
    "url": "index.html",
    "revision": "5752487a4310a6d6d572d35e0125f8d4"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "python/1-file-map.html",
    "revision": "bac70e4faffb48ee27b2e0aec41ea3d3"
  },
  {
    "url": "python/2-mongo-random.html",
    "revision": "387f34e8cf691e3f2e09142f2bd6440f"
  },
  {
    "url": "python/3-page-upload.html",
    "revision": "9544760c132e0bc545dbf45bbfe03df1"
  },
  {
    "url": "python/4-bt-flask.html",
    "revision": "79de77589fbc6f16c9a7812e610e1347"
  },
  {
    "url": "python/index.html",
    "revision": "c654fc96fc8242d750f6ad43518b25d0"
  },
  {
    "url": "swift/better/autoclosure.html",
    "revision": "56457e55413b1be5e2bb680e2478b179"
  },
  {
    "url": "swift/better/available.html",
    "revision": "4de887751e25d168af0c2872e0076913"
  },
  {
    "url": "swift/better/chain.html",
    "revision": "9c7ede7983894988c9e8529f2507e310"
  },
  {
    "url": "swift/better/copy-in-copy-out.html",
    "revision": "b9b8e89ce7b71d7b0b6e4d68ac5ea754"
  },
  {
    "url": "swift/better/Copy-On-Write.html",
    "revision": "1266a2d8080b709751e44bffc31f561b"
  },
  {
    "url": "swift/better/di.html",
    "revision": "66d5b53a70d103e44afef9c4d433907d"
  },
  {
    "url": "swift/better/last.html",
    "revision": "19311d46a965484ffd1e84beb3bbb044"
  },
  {
    "url": "swift/better/lazy.html",
    "revision": "e1ca59d56caa4f35483590069bde0052"
  },
  {
    "url": "swift/better/protocol.html",
    "revision": "0a57e31f7f71e0e7ec5e6cd8683a6650"
  },
  {
    "url": "swift/fp/index.html",
    "revision": "339309c00822a0b244cb30d5a9f520d0"
  },
  {
    "url": "swift/fp/t1-fp.html",
    "revision": "7c6dd6103c68750af71d1a4fc2a6a13b"
  },
  {
    "url": "swift/fp/t2-lens.html",
    "revision": "f2de005e3d25e0e6f8ed93d092a81b42"
  },
  {
    "url": "swift/fp/t3-json1.html",
    "revision": "6261b538bc2b61edf907b9793b74b853"
  },
  {
    "url": "swift/fp/t3-json2.html",
    "revision": "dcb795e6d88c1e9ed41d87f02b03ce93"
  },
  {
    "url": "swift/fp/t3-json3.html",
    "revision": "b1c9f0e9024feb9656182793a2c62b05"
  },
  {
    "url": "swift/fp/t4-length.html",
    "revision": "369f8f0eed71ca6adcf9cfcff2aedb8a"
  },
  {
    "url": "swift/ios/index.html",
    "revision": "7954e1d7eeff2d5e1571b107341c4bd2"
  },
  {
    "url": "swift/ios/t1-pod-webp.html",
    "revision": "d7e0878bde8c5ec425f282d76c826ec3"
  },
  {
    "url": "swift/ios/t2-youhua.html",
    "revision": "e12b103610e5f4ee47fe675474edf72a"
  },
  {
    "url": "swift/swiftui/ActionSheet.html",
    "revision": "fa1af38ad7d15241b3629c4aa06207bf"
  },
  {
    "url": "swift/swiftui/Alert.html",
    "revision": "78ac767f5de106e77af67f6ae974e210"
  },
  {
    "url": "swift/swiftui/AnyGesture.html",
    "revision": "f2f8e0331ff708545b855cbad6a13e34"
  },
  {
    "url": "swift/swiftui/Bindings.html",
    "revision": "193a1bd925520c73ba825cb654e15554"
  },
  {
    "url": "swift/swiftui/Button.html",
    "revision": "abe434a4ffe491aa3c0354e2ad9ddda1"
  },
  {
    "url": "swift/swiftui/DatePicker.html",
    "revision": "b2eb96b9f70dce831b09f38ad503b997"
  },
  {
    "url": "swift/swiftui/DragGesture.html",
    "revision": "0248c30249e1cca5923c3aee7dae709e"
  },
  {
    "url": "swift/swiftui/DynamicNavigationDestinationLink.html",
    "revision": "128997ea5f7a3d243662aabd2a495b56"
  },
  {
    "url": "swift/swiftui/EditButton.html",
    "revision": "151f0c105fcaa025fff1077788386289"
  },
  {
    "url": "swift/swiftui/Environment.html",
    "revision": "9cb57bce2f16baeb2e8ad85f05ac68da"
  },
  {
    "url": "swift/swiftui/EnvironmentObject.html",
    "revision": "b380376ac0b6297f5697a2de04dbbd0b"
  },
  {
    "url": "swift/swiftui/EnvironmentValues.html",
    "revision": "2b9c81ff3109a15364d087933506b796"
  },
  {
    "url": "swift/swiftui/ExclusiveGesture.html",
    "revision": "de3555efac0be379ff2abef9d604494e"
  },
  {
    "url": "swift/swiftui/ForEach.html",
    "revision": "3f04c5e4ad16fc6ac6a0ad4bdd2b0a8a"
  },
  {
    "url": "swift/swiftui/Form.html",
    "revision": "f2e91ea9a75d80c987b6316b58991625"
  },
  {
    "url": "swift/swiftui/GeometryReader.html",
    "revision": "3f3f33582951402b15d47b546535d4eb"
  },
  {
    "url": "swift/swiftui/Group.html",
    "revision": "85b04c8908f36a02cfc105386e528b76"
  },
  {
    "url": "swift/swiftui/GroupBox.html",
    "revision": "deb2d19174b0babcdfbd5d4f8c9e5c08"
  },
  {
    "url": "swift/swiftui/HSplitView.html",
    "revision": "26ed1602e3d2810442ecd54b1e655fe0"
  },
  {
    "url": "swift/swiftui/HStack.html",
    "revision": "4ece25aef5a23b57bee00af8dd0cc729"
  },
  {
    "url": "swift/swiftui/Image.html",
    "revision": "ba01b3bf1f22bba17b111957639d48f8"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "89e44a0cea7f55f488be5b0238cf1be8"
  },
  {
    "url": "swift/swiftui/ItemBasedPopUpButton.html",
    "revision": "6e55cb8f85880a6cc0f862f1f96f492f"
  },
  {
    "url": "swift/swiftui/List.html",
    "revision": "ae25c264da9ef92721d444fe4194efb7"
  },
  {
    "url": "swift/swiftui/LocalizedStringKey.html",
    "revision": "981644a3d52371cfa97a1aab128bdd35"
  },
  {
    "url": "swift/swiftui/LongPressGesture.html",
    "revision": "cce360987da643b6f6d1bd8d2f74dd5b"
  },
  {
    "url": "swift/swiftui/MagnificationGesture.html",
    "revision": "5ffb370e544098322a36af49687e1074"
  },
  {
    "url": "swift/swiftui/Modal.html",
    "revision": "57586f1cab3f38b168715976e8bc1ed4"
  },
  {
    "url": "swift/swiftui/NavigationButton.html",
    "revision": "7d37b0fa6f8ac84810d0d59e545d8514"
  },
  {
    "url": "swift/swiftui/NavigationView.html",
    "revision": "2fcf567283c9ba9d4441a241c873ec27"
  },
  {
    "url": "swift/swiftui/ObjectBinding.html",
    "revision": "b80aa15ea44cc84d89e4de91c24ad563"
  },
  {
    "url": "swift/swiftui/PasteButton.html",
    "revision": "0344b2b4f60cba1cd7a77349691b65aa"
  },
  {
    "url": "swift/swiftui/Picker.html",
    "revision": "4a249328f041f6b9b92b79294ee45683"
  },
  {
    "url": "swift/swiftui/Popover.html",
    "revision": "05853ba1f0156078fa8ecd12e36b2a41"
  },
  {
    "url": "swift/swiftui/PreferenceKey.html",
    "revision": "f8d60d465805e7e9ccacbe1b6efa1731"
  },
  {
    "url": "swift/swiftui/PresentationButton.html",
    "revision": "5710373773bc5cf3e766f544b65bfcc7"
  },
  {
    "url": "swift/swiftui/Principle01.html",
    "revision": "21e544918de705a2e769de8657843c4a"
  },
  {
    "url": "swift/swiftui/Principle02.html",
    "revision": "f7dde4e1409bd770afa352d105d9f2b0"
  },
  {
    "url": "swift/swiftui/Principle03.html",
    "revision": "42bf664875acef652e00a4090c4e0b51"
  },
  {
    "url": "swift/swiftui/Principle04.html",
    "revision": "2e7836cb378ce2b4ee8cdf9dd7283751"
  },
  {
    "url": "swift/swiftui/Principle05.html",
    "revision": "4c901eecbd8980fadca8462baa5cc8ce"
  },
  {
    "url": "swift/swiftui/Principle06.html",
    "revision": "2a086a92da7fa25d95e0f0559aec7e5a"
  },
  {
    "url": "swift/swiftui/PullDownButton.html",
    "revision": "731f5a4a5cf0b00af118066d40e92a80"
  },
  {
    "url": "swift/swiftui/RotationGesture.html",
    "revision": "e922ff31d900e87014dfefe29b33f20f"
  },
  {
    "url": "swift/swiftui/ScrollView.html",
    "revision": "29656d737b88b7c5d992e0bbb1539f51"
  },
  {
    "url": "swift/swiftui/Section.html",
    "revision": "393f873d1dae8d29dbd702e8665267d8"
  },
  {
    "url": "swift/swiftui/SecureField.html",
    "revision": "605e7d206c070546b11859f0cc17d344"
  },
  {
    "url": "swift/swiftui/SegmentedControl.html",
    "revision": "0ed75450363d06b433fa1aa77c81ac8a"
  },
  {
    "url": "swift/swiftui/SequenceGesture.html",
    "revision": "aad5808d2ecddb7056195dc5fd1a7752"
  },
  {
    "url": "swift/swiftui/Sheet.html",
    "revision": "5c4cac045773c81fafa13524ddcc6530"
  },
  {
    "url": "swift/swiftui/SimultaneousGesture.html",
    "revision": "2ddf5af15771288ed02d30728a94a5ed"
  },
  {
    "url": "swift/swiftui/Slider.html",
    "revision": "5a61c273684e99a973189a20e4183f89"
  },
  {
    "url": "swift/swiftui/Stacks.html",
    "revision": "c911ecf1e0dc3343d4d2c7145c2a89a5"
  },
  {
    "url": "swift/swiftui/State.html",
    "revision": "4ecc8f53ba90ccb5d4f3d8013e614071"
  },
  {
    "url": "swift/swiftui/Stepper.html",
    "revision": "452b37ca0781eeba51f719f103480df9"
  },
  {
    "url": "swift/swiftui/Strideable.html",
    "revision": "3ff73e4c674b0a3fc4b12520e4520074"
  },
  {
    "url": "swift/swiftui/TabView.html",
    "revision": "1089e5db27c74e91e2974c46fa421f06"
  },
  {
    "url": "swift/swiftui/TapGesture.html",
    "revision": "629422217728cda70a23d6868022bd91"
  },
  {
    "url": "swift/swiftui/Text.html",
    "revision": "d63b757bcae7c0eff6b9d01984c35f44"
  },
  {
    "url": "swift/swiftui/TextField.html",
    "revision": "3dc1628db10ff910bd9d105a090a89a0"
  },
  {
    "url": "swift/swiftui/Toggle.html",
    "revision": "a86da1858d6c6def3bed929caaca9d83"
  },
  {
    "url": "swift/swiftui/Transaction.html",
    "revision": "1081725326d337a86aa9c27c570060f9"
  },
  {
    "url": "swift/swiftui/UIViewController.html",
    "revision": "2861f48cb71b41efec1fbb401ca75a01"
  },
  {
    "url": "swift/swiftui/ViewModifier.html",
    "revision": "c136820cfe1f466c1aa7fc671a1b339b"
  },
  {
    "url": "swift/swiftui/VSplitView.html",
    "revision": "4005bdd0aa501da28f8e9762968fc76e"
  },
  {
    "url": "swift/swiftui/VStack.html",
    "revision": "f25097e77c0a665515525366d994efb9"
  },
  {
    "url": "swift/swiftui/WebImage.html",
    "revision": "cccf7ece59b5c0524d189c35b09c332e"
  },
  {
    "url": "swift/swiftui/WebView.html",
    "revision": "05c2d7dccb1301a4e68b8720435da93d"
  },
  {
    "url": "swift/swiftui/ZStack.html",
    "revision": "633c42aafadea0dc1b38d747c917814d"
  },
  {
    "url": "swift/tips/index.html",
    "revision": "65a2491cc068a85baf33f32cc85d6caf"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "afd509178002373fba5ec51a13f9ef43"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "286cba5b9cf475adc1ba2b83d242bb2f"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "18d0397d24155552a7acee8b7ff3238b"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "9ee1706e7e75ef8dffb865ee02b66a9a"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "38d32173a4f9f1a14c75410c762937f5"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "f12e29c023b9626298c7b4bc0de358bc"
  },
  {
    "url": "swift/vapor/t6-say-oldbirds.html",
    "revision": "fa4995db800d9b9138184ad3c48092d4"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "9b1f92a504c281f0f21892108d3c911a"
  },
  {
    "url": "swift/vapor/u-11-auth.html",
    "revision": "84eb44acbde35109fa4adea8c7e1dde1"
  },
  {
    "url": "swift/vapor/u-12-permission.html",
    "revision": "ad08638b4837766e2064c2d1a9ee2ff8"
  },
  {
    "url": "swift/vapor/v-20-read-code.html",
    "revision": "dcc5cb2df1f25dc22bc3e88d25af0b96"
  },
  {
    "url": "swift/vapor/v-21-io.html",
    "revision": "198845a1957b699bdf7a7b785cd4e275"
  },
  {
    "url": "swift/vapor/v-22-bio2.html",
    "revision": "126b4aca0a62793e295ddf8d47902a54"
  },
  {
    "url": "swift/vapor/v-23-swiftnio-do-text.html",
    "revision": "e6c665a5234618827b8e20cc507deb3e"
  },
  {
    "url": "swift/vapor/v-24-swift-zhan-package.html",
    "revision": "2c1e8fb76548e98179792b566ebc5980"
  },
  {
    "url": "swift/vapor/v-25-swiftnio-do-serisize.html",
    "revision": "2c7f033490b37e9ce1bc12d6cafb4356"
  },
  {
    "url": "swift/vapor/v-26-swfitnio-grpc-1.html",
    "revision": "877b2faebc9e2978d6e21ca1dae4ceb3"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/ai/index.html",
    "revision": "d4c95800ce47a01cf8a9530a4e077f71"
  },
  {
    "url": "tag/flask/index.html",
    "revision": "507761d4defb2c3296882616a51fd953"
  },
  {
    "url": "tag/flutter/index.html",
    "revision": "b85e95f56a3527d941287fda1f9f3053"
  },
  {
    "url": "tag/flutter/page/2/index.html",
    "revision": "6324c550a80596204eaabbdc3af4a1e7"
  },
  {
    "url": "tag/flutter/page/3/index.html",
    "revision": "d3032bfc4cbd870956c17d690269dc00"
  },
  {
    "url": "tag/git/index.html",
    "revision": "f004908b56e90b6c3db7dcc58b3b433e"
  },
  {
    "url": "tag/haskell/index.html",
    "revision": "97d7aa15cc3ead85d0149eeb3c699528"
  },
  {
    "url": "tag/html/index.html",
    "revision": "420f1c57a3c3a4c134dcb6e1c4d614a2"
  },
  {
    "url": "tag/index.html",
    "revision": "be3a8be3a9c439a60819767cef85742d"
  },
  {
    "url": "tag/ios/index.html",
    "revision": "79d146695dc819fa8e7661272189ab97"
  },
  {
    "url": "tag/ios/page/2/index.html",
    "revision": "f025f733e1f553a7301db2d5daa454df"
  },
  {
    "url": "tag/ios/page/3/index.html",
    "revision": "f4798c8a4ee4ada1f315055d4dc08ed4"
  },
  {
    "url": "tag/ios/page/4/index.html",
    "revision": "f05f03c75735fc8395e0c0a237cf03b8"
  },
  {
    "url": "tag/ios/page/5/index.html",
    "revision": "594a5572f89490db9fedba190a4a6ba2"
  },
  {
    "url": "tag/ios/page/6/index.html",
    "revision": "1c5fddf2df2ca604faafc675a591dbfd"
  },
  {
    "url": "tag/ios/page/7/index.html",
    "revision": "2e3d40500b12034a8b46e60326699ac8"
  },
  {
    "url": "tag/ios/page/8/index.html",
    "revision": "0094a390a2d2c420f5b85e88497131ba"
  },
  {
    "url": "tag/ios/page/9/index.html",
    "revision": "3dde6f2dc9c5cc76a6a4e1bbcf7c0a9f"
  },
  {
    "url": "tag/json/index.html",
    "revision": "43237d45d9bf5a03604ee20a02a9dbc4"
  },
  {
    "url": "tag/plantuml/index.html",
    "revision": "6a14fe49c6cf93b24bee4bef2765dbc2"
  },
  {
    "url": "tag/python/index.html",
    "revision": "24e1c2a719632fe9ddd0ea99a8675f08"
  },
  {
    "url": "tag/swift/index.html",
    "revision": "48790fa0932d7bd2b33fc2f30d7a0626"
  },
  {
    "url": "tag/swift/page/10/index.html",
    "revision": "7927dc280219093970c237247ecb478b"
  },
  {
    "url": "tag/swift/page/11/index.html",
    "revision": "dc48c544bc7fa4ff49747f3fe5134787"
  },
  {
    "url": "tag/swift/page/12/index.html",
    "revision": "45e04adada64d2ed8214e723b7896812"
  },
  {
    "url": "tag/swift/page/13/index.html",
    "revision": "31064cefab3a78be9685397663541cb0"
  },
  {
    "url": "tag/swift/page/14/index.html",
    "revision": "af15383822dbfe0872734cbc805fe73e"
  },
  {
    "url": "tag/swift/page/2/index.html",
    "revision": "3d12c919a6ffe9eb4a6fd2d40b05e770"
  },
  {
    "url": "tag/swift/page/3/index.html",
    "revision": "7e487b30c60203f360157f881e3d13f6"
  },
  {
    "url": "tag/swift/page/4/index.html",
    "revision": "68cf2ac06e89255b14c258de13d6f84b"
  },
  {
    "url": "tag/swift/page/5/index.html",
    "revision": "3ce5c5cd6f83cae947127b3fdf23abd8"
  },
  {
    "url": "tag/swift/page/6/index.html",
    "revision": "c5960a471482fc919d2c52bb53803bf9"
  },
  {
    "url": "tag/swift/page/7/index.html",
    "revision": "b60b18d7ded0793901afba0c0d4c55e8"
  },
  {
    "url": "tag/swift/page/8/index.html",
    "revision": "86e374e99881c3a03637b31de237ec91"
  },
  {
    "url": "tag/swift/page/9/index.html",
    "revision": "78f46d426122ff27a24f362e9002657b"
  },
  {
    "url": "tag/swiftnio/index.html",
    "revision": "a95ec2317cdd1df2ac7dfedaa0bc64fe"
  },
  {
    "url": "tag/swiftui/index.html",
    "revision": "ec7969d5266fba491249cf4dea56c6ff"
  },
  {
    "url": "tag/swiftui/page/2/index.html",
    "revision": "9efa95656f4449b2a3b3904d9f353464"
  },
  {
    "url": "tag/swiftui/page/3/index.html",
    "revision": "a22eb0e65a4c78dc4e9cf5512b04b1cc"
  },
  {
    "url": "tag/swiftui/page/4/index.html",
    "revision": "4cc0748ea3cdb4604588ac7cc1546a52"
  },
  {
    "url": "tag/swiftui/page/5/index.html",
    "revision": "f4189f324fccbee0c0124f68d054a3e9"
  },
  {
    "url": "tag/swiftui/page/6/index.html",
    "revision": "050dfc79b28da9524ebf6dfbe396402b"
  },
  {
    "url": "tag/swiftui/page/7/index.html",
    "revision": "cdea3049b0a9c12f2d035927fb8a9486"
  },
  {
    "url": "tag/tips/index.html",
    "revision": "36d6913a07c51b4ce9f933c0b5286c2d"
  },
  {
    "url": "tag/tools/index.html",
    "revision": "1937340f8163ace5156c3caa32152b68"
  },
  {
    "url": "tag/tools/page/2/index.html",
    "revision": "f6492c164dab6289e0344ec403e0510e"
  },
  {
    "url": "tag/vapor/index.html",
    "revision": "2a68ee89f023304ad89fafef6dec6448"
  },
  {
    "url": "tag/vapor/page/2/index.html",
    "revision": "fd7843330fc3a18be46c11583c2a38a5"
  },
  {
    "url": "tag/vscode/index.html",
    "revision": "83b136e2a9cb6ff631694e6b5753dc0e"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "09e4587d2adedcb65644da57b7156113"
  },
  {
    "url": "tag/yaml/index.html",
    "revision": "59c4437740865f2a8655e648613743f0"
  },
  {
    "url": "tag/书单/index.html",
    "revision": "f304168a59519db486d410e9fe8bef6b"
  },
  {
    "url": "tag/函数式编程/index.html",
    "revision": "bb341ee9711380f979b9fbd385a08ac5"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "04dc913bdddc28f8f365ba9edd25c8e6"
  },
  {
    "url": "tag/基础/page/2/index.html",
    "revision": "f3aa7a297d5627e247a6a1a811dd1176"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "86992ce09c4a7fe16c3d03424e185c44"
  },
  {
    "url": "tag/数据结构与算法/page/2/index.html",
    "revision": "9f9596efa153fb2dc2d3d60c10fa8015"
  },
  {
    "url": "tag/设计模式/index.html",
    "revision": "2fe9b13943cf7b2bc471563766e951db"
  },
  {
    "url": "tag/设计模式/page/2/index.html",
    "revision": "65a6d0ebc1f11d4b19c064449602f192"
  },
  {
    "url": "tag/设计模式/page/3/index.html",
    "revision": "cd7d33820ea3ffcc43d3471b6bc65976"
  },
  {
    "url": "timeline/index.html",
    "revision": "7ccb5bf43e0c05e1a4a93e66372122af"
  },
  {
    "url": "tools/git/index.html",
    "revision": "68ad5cac38a223ea9dedf1f7d09d00b9"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "52cec7f687be3e4e2757e287ae098efd"
  },
  {
    "url": "tools/git/t2-git-submodule.html",
    "revision": "b2f01bea874f781eb0fe51c74887842f"
  },
  {
    "url": "tools/html/index.html",
    "revision": "c81834a266abb387bc83ef12195ff4b3"
  },
  {
    "url": "tools/plantuml/index.html",
    "revision": "aa79563b2785928d4b643e50c94bb073"
  },
  {
    "url": "tools/plantuml/t1-sequence-diagram.html",
    "revision": "09f62543e49833818ad1e73dc6f1bf18"
  },
  {
    "url": "tools/plantuml/t2-class-diagram.html",
    "revision": "79d78bfb0c839820de8a8f61aab59717"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "7a2c1248633d6e7c5ac60dacb84dbef9"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "aed13ef45304489f5e07da51ca28c7f5"
  },
  {
    "url": "tools/vuepress/memory-out.html",
    "revision": "b231ea9980e96a0884e1f0e06d0ff9ce"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "f726ec19e31567766f7e5e9ba6dd1edb"
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
