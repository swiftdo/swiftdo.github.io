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
    "revision": "f1e0a1753baeca9f02d0af36446c5193"
  },
  {
    "url": "about/app/index.html",
    "revision": "da9d5c3de54dbc1099670f7e5241b1d6"
  },
  {
    "url": "about/app/t1-protocol.html",
    "revision": "ff9debbdf79e661d5c8c7e9b9172a84c"
  },
  {
    "url": "about/app/t2-secrect.html",
    "revision": "3edebadde37a54dcc465b15884d0999f"
  },
  {
    "url": "about/app/t3-miniapps-sec.html",
    "revision": "87c27264d2c6a3a27663da223c4891b2"
  },
  {
    "url": "about/index/index.html",
    "revision": "a2079f444c813654194f43aab4eb1b05"
  },
  {
    "url": "ai/index.html",
    "revision": "fc98a1a728f23626e2940c3e2038c361"
  },
  {
    "url": "ai/t1-gzj.html",
    "revision": "c12c12dffa593cefbb3f02464fbe92e1"
  },
  {
    "url": "assets/css/0.styles.fcc7cf36.css",
    "revision": "cb60c0741bdb572b24ae68dca91c2571"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/js/1.74d78a72.js",
    "revision": "3abe0baf4b628d34a3810cc5abd8a0a7"
  },
  {
    "url": "assets/js/10.a7f46a2d.js",
    "revision": "c92cf5ea327802888cf9197c9c16d918"
  },
  {
    "url": "assets/js/100.54f385e4.js",
    "revision": "ce395e7f09bfd536e341be449f712d65"
  },
  {
    "url": "assets/js/101.5d335a09.js",
    "revision": "12d719b931d72b9225e39d4bc2815a20"
  },
  {
    "url": "assets/js/102.7ad678e5.js",
    "revision": "74e542acc1af3561a6d53a135ced9680"
  },
  {
    "url": "assets/js/103.3e051c0e.js",
    "revision": "37b0cd709d4e0a001709fccc206ebe64"
  },
  {
    "url": "assets/js/104.c31c8e82.js",
    "revision": "9152c1f14eb51e07532dc5f87db1c63c"
  },
  {
    "url": "assets/js/105.4f389343.js",
    "revision": "7381a956bb5fd4c0ffe6030bf73a5d07"
  },
  {
    "url": "assets/js/106.7e0eeb99.js",
    "revision": "e0f33d2de2bb5185583150dfbf2c6d5a"
  },
  {
    "url": "assets/js/107.8ff11259.js",
    "revision": "62d502e467a5466eeeef01143fc5971b"
  },
  {
    "url": "assets/js/108.f11fffa9.js",
    "revision": "7bf955f36ae94bfa3633b1dff9610829"
  },
  {
    "url": "assets/js/109.4fb11234.js",
    "revision": "7264b2d45da45c82458426cdb7f8db66"
  },
  {
    "url": "assets/js/11.9442356f.js",
    "revision": "c63fb51d0b73425258c3e851ce1dfd1f"
  },
  {
    "url": "assets/js/110.05424742.js",
    "revision": "b503a49e7b6d8f2af4715d14733ad1d6"
  },
  {
    "url": "assets/js/111.99c8bd01.js",
    "revision": "d93bd87069b635a42912748459795333"
  },
  {
    "url": "assets/js/112.f444b85b.js",
    "revision": "4743109078dc71a2dc2b0e05203c2d8d"
  },
  {
    "url": "assets/js/113.69312b38.js",
    "revision": "82fd4db535510d9ff39874f2f2a997a7"
  },
  {
    "url": "assets/js/114.77c0d4d0.js",
    "revision": "bf8477b9259f317034fea166bd7249c9"
  },
  {
    "url": "assets/js/115.5e5ef61a.js",
    "revision": "5a16dd7ff03894721abd5c12ae09ce83"
  },
  {
    "url": "assets/js/116.9cdc491e.js",
    "revision": "30e49203c3215bf049bd919acdadc91e"
  },
  {
    "url": "assets/js/117.00185d94.js",
    "revision": "5f5bf9afd344601f4c86e530ec76ea4d"
  },
  {
    "url": "assets/js/118.fa34b132.js",
    "revision": "8812a31b2ac7630977bdb10ff3cf3974"
  },
  {
    "url": "assets/js/119.55ad616c.js",
    "revision": "087e4109d28240a5787962f9863d969d"
  },
  {
    "url": "assets/js/12.d44bf03c.js",
    "revision": "76f3c76aaa771c7caebcac89603c975c"
  },
  {
    "url": "assets/js/120.85896853.js",
    "revision": "196bfddeee7b770801af7b843017d090"
  },
  {
    "url": "assets/js/121.65cf9437.js",
    "revision": "547932fcf8fcc73087ffb030b15125e1"
  },
  {
    "url": "assets/js/122.4f69abc8.js",
    "revision": "a4514db345abd5320b10638cd13241e2"
  },
  {
    "url": "assets/js/123.0d6e983c.js",
    "revision": "7a4e616458255a4a83b975811d1063db"
  },
  {
    "url": "assets/js/124.67a9e23d.js",
    "revision": "9e8a75545f5cd1b076c9d329ee1ff75c"
  },
  {
    "url": "assets/js/125.35bc88d8.js",
    "revision": "d90e32b625c277fa7c09479025e7d63b"
  },
  {
    "url": "assets/js/126.e52706f7.js",
    "revision": "d89708c7e98f8069187ef073843651ba"
  },
  {
    "url": "assets/js/127.5e7d5627.js",
    "revision": "79c9d81551966915e2e0b13066362732"
  },
  {
    "url": "assets/js/128.4fb207d2.js",
    "revision": "396d47aa021a6405245621aabf836089"
  },
  {
    "url": "assets/js/129.86f4c290.js",
    "revision": "f80bc45c583407e6bce81d9aee76ada3"
  },
  {
    "url": "assets/js/13.37b4e409.js",
    "revision": "0d8dbf24d975daa148cd23cb73ac6d82"
  },
  {
    "url": "assets/js/130.8b75d56c.js",
    "revision": "3eb372434020644cf86a48c66c65ade3"
  },
  {
    "url": "assets/js/131.4e685f0e.js",
    "revision": "0df5303aa6bc76be07670ef8a18cc172"
  },
  {
    "url": "assets/js/132.02ce207c.js",
    "revision": "abe05eac3bc6a07285fda498213a5ccb"
  },
  {
    "url": "assets/js/133.b02f1c56.js",
    "revision": "9f593cf52a0bf9638c6630cba5ff3e93"
  },
  {
    "url": "assets/js/134.dcc66b05.js",
    "revision": "3470fffe6ab60f81b0c7caab09444517"
  },
  {
    "url": "assets/js/135.79319732.js",
    "revision": "f8296023fefa5c2b8be7c7c6bab03215"
  },
  {
    "url": "assets/js/136.55989775.js",
    "revision": "8731a7976dbf754e3d3685180b8cf253"
  },
  {
    "url": "assets/js/137.4e6604ba.js",
    "revision": "45b055119e5117ff36343b3767d63c62"
  },
  {
    "url": "assets/js/138.6d4842fe.js",
    "revision": "bc257743ee629a92a9f9457b5b09a869"
  },
  {
    "url": "assets/js/139.ed63b8b4.js",
    "revision": "1bd5d8e53827e427f324db2c983229c6"
  },
  {
    "url": "assets/js/14.bbb770b8.js",
    "revision": "65f0f77d3ecf5bb7f3b0ee62d6596a1c"
  },
  {
    "url": "assets/js/15.8fef25b9.js",
    "revision": "590266b039effecf37f6a0110ec3bfbf"
  },
  {
    "url": "assets/js/16.f89849c9.js",
    "revision": "23693783f3355ecf4db7a506504e15f1"
  },
  {
    "url": "assets/js/17.12cea87b.js",
    "revision": "6fcc657469e57453ad0e9a647b72cb0b"
  },
  {
    "url": "assets/js/18.1736faec.js",
    "revision": "377e7c50dd84f74a4ec01fa04e1d6aad"
  },
  {
    "url": "assets/js/19.c87e256f.js",
    "revision": "de9b442b63e0d275cfe1fe60dfe35e64"
  },
  {
    "url": "assets/js/20.8d93a411.js",
    "revision": "b208555257c4e6839b3eee461090c2b2"
  },
  {
    "url": "assets/js/21.29f0a307.js",
    "revision": "ba023177649a558e72993b0d8e88e9f6"
  },
  {
    "url": "assets/js/22.e9e0472f.js",
    "revision": "3f886781040445b2ef9fe330cea1b147"
  },
  {
    "url": "assets/js/23.91a4c8fa.js",
    "revision": "3394c21e3fae89027000f8d9ed65ced8"
  },
  {
    "url": "assets/js/24.c674e2e1.js",
    "revision": "46c72e64584e4421b84e195610eaf85d"
  },
  {
    "url": "assets/js/25.d7199ead.js",
    "revision": "ca97a9754f9a54eebf772c95855ff6ff"
  },
  {
    "url": "assets/js/26.9b223ae1.js",
    "revision": "7392355af61f204e4b2edf4ed97088d8"
  },
  {
    "url": "assets/js/27.263ca047.js",
    "revision": "da34fa8fc63dd42aee8cf648c0ea28c3"
  },
  {
    "url": "assets/js/28.052622f8.js",
    "revision": "e78de3fbeab8bd23cf4fa6bf29ece086"
  },
  {
    "url": "assets/js/29.e2080783.js",
    "revision": "d014607d6e2f0682b80900ea3592ca9f"
  },
  {
    "url": "assets/js/3.8c9a9626.js",
    "revision": "fdc4148355875950fc0ebd2428a436ee"
  },
  {
    "url": "assets/js/30.1421ae8d.js",
    "revision": "322d5212beff73ad502492c1e3ab946a"
  },
  {
    "url": "assets/js/31.cd6758bc.js",
    "revision": "d1a061f77ab7ff2337018be4630d49d7"
  },
  {
    "url": "assets/js/32.60534ab5.js",
    "revision": "e515f31065f500c2219bb52451fd8539"
  },
  {
    "url": "assets/js/33.eccf569f.js",
    "revision": "fd818223efe47f2845477eb1f4148bc8"
  },
  {
    "url": "assets/js/34.75832252.js",
    "revision": "156a954491999489caed963c5f3d13fc"
  },
  {
    "url": "assets/js/35.43bead9f.js",
    "revision": "cd57561867fb05efbe3422fc20321cd0"
  },
  {
    "url": "assets/js/36.898079a7.js",
    "revision": "ac7547433995eab25fd14be972b15742"
  },
  {
    "url": "assets/js/37.50755570.js",
    "revision": "ea8e736162f1a05908860370c41e7e52"
  },
  {
    "url": "assets/js/38.f55b201e.js",
    "revision": "d18e46e57950f77094d6dfcc269ad508"
  },
  {
    "url": "assets/js/39.f9a31bca.js",
    "revision": "88b50da59806fa949985866385322d86"
  },
  {
    "url": "assets/js/4.8dc33334.js",
    "revision": "b30f2dff30f8e3346547b937ebc7c28e"
  },
  {
    "url": "assets/js/40.3f6932ee.js",
    "revision": "436955126c1ab54cc3d1b1dbdce025e7"
  },
  {
    "url": "assets/js/41.27b9acc5.js",
    "revision": "50a0cb5347f4700082e3df190eeb22c5"
  },
  {
    "url": "assets/js/42.f02bc052.js",
    "revision": "3e021e4857140a1c9275e0a574149d79"
  },
  {
    "url": "assets/js/43.a5cfbc16.js",
    "revision": "72f5b553fc72f2a705b4f01fdf38c315"
  },
  {
    "url": "assets/js/44.165c4c2e.js",
    "revision": "874fce4d4f94ef453d2bebf265eac208"
  },
  {
    "url": "assets/js/45.328e6a6d.js",
    "revision": "011fa63fee0918211c3226042efdfb42"
  },
  {
    "url": "assets/js/46.93b1c5a5.js",
    "revision": "f427a79669fbb6f0d4109beccb783fba"
  },
  {
    "url": "assets/js/47.dff36465.js",
    "revision": "6b408ef77725e1629de8ada5f3d790c7"
  },
  {
    "url": "assets/js/48.2b135e2f.js",
    "revision": "4828403a993bf2e75e671cbdd7f05cdc"
  },
  {
    "url": "assets/js/49.258e0b97.js",
    "revision": "edbf34a5de49756438985652324e44d2"
  },
  {
    "url": "assets/js/5.2696a9c7.js",
    "revision": "74d948d1542f5d838138c527749d4436"
  },
  {
    "url": "assets/js/50.033dd99e.js",
    "revision": "9f744ba525d754cfd056082a17efdcd4"
  },
  {
    "url": "assets/js/51.f03a49f9.js",
    "revision": "adfd0a3c8d017e5766fe6ddaa04cb028"
  },
  {
    "url": "assets/js/52.2b1111ef.js",
    "revision": "3d22204b6c35ba05adf8980c5aa2567b"
  },
  {
    "url": "assets/js/53.aefb21d2.js",
    "revision": "b479fcfdb3991d0f456415afdac65f1f"
  },
  {
    "url": "assets/js/54.e1fbf6b3.js",
    "revision": "00f3fad1700dcd9242a4b3b3a48c01f8"
  },
  {
    "url": "assets/js/55.d8df2c25.js",
    "revision": "3dde59492056ec36910b30be7818d972"
  },
  {
    "url": "assets/js/56.e55f54dc.js",
    "revision": "fd3f9ed505ceba07908b72bc0dbf8600"
  },
  {
    "url": "assets/js/57.862344d4.js",
    "revision": "3452d9d43295606727eb1ef5b0696817"
  },
  {
    "url": "assets/js/58.899e64cf.js",
    "revision": "fd3fb6132dd50aae85fe5f58ba319adc"
  },
  {
    "url": "assets/js/59.7e727c9f.js",
    "revision": "0a9bbc5ce1dd941f7c0930d86e865a5a"
  },
  {
    "url": "assets/js/6.71f32179.js",
    "revision": "838d5273ad78002f558c07e7803eb84c"
  },
  {
    "url": "assets/js/60.a7bc2974.js",
    "revision": "63f5b9638e92a5624fa77dc00b04f9a9"
  },
  {
    "url": "assets/js/61.97b4e5e9.js",
    "revision": "5bc072fa0d01532cb2d1edeceef0948d"
  },
  {
    "url": "assets/js/62.0ec3e2f0.js",
    "revision": "22f961ea955e15c2adfc2bf455f2e498"
  },
  {
    "url": "assets/js/63.786c15d0.js",
    "revision": "44a6b8e8b44324a895226c3b50d327c5"
  },
  {
    "url": "assets/js/64.84a31725.js",
    "revision": "958950cc98e9d3663f5c8ebd78e8d4b9"
  },
  {
    "url": "assets/js/65.5772b8b4.js",
    "revision": "d9272f5303fef5220f06933a71d7f72e"
  },
  {
    "url": "assets/js/66.175dcc46.js",
    "revision": "1e16da9ee900d94414ed4598e93841e5"
  },
  {
    "url": "assets/js/67.b816b088.js",
    "revision": "cbbb12968aeb4a494699a10505771011"
  },
  {
    "url": "assets/js/68.48e4e8e7.js",
    "revision": "b19742d577afadbef8f03bc90a469962"
  },
  {
    "url": "assets/js/69.dcb05039.js",
    "revision": "face85a58852c24cbc6958a5bc258fa1"
  },
  {
    "url": "assets/js/7.a42e95c5.js",
    "revision": "87b8bd955a990e4a5333bb0a6dc7f944"
  },
  {
    "url": "assets/js/70.8789e3f4.js",
    "revision": "0ee0cf6c91c1c32b93fac42eb0c9dd21"
  },
  {
    "url": "assets/js/71.7bf1b46b.js",
    "revision": "35bbf05e2d5b7e751a82023e0621dde2"
  },
  {
    "url": "assets/js/72.599a5098.js",
    "revision": "6a84aac906c6ca8095c23bc58576c3f2"
  },
  {
    "url": "assets/js/73.f10c6937.js",
    "revision": "973b63d40d218c1a38376ce2d4142947"
  },
  {
    "url": "assets/js/74.d8fbd081.js",
    "revision": "965de3120c82ce1c63ff2fe646bc6da8"
  },
  {
    "url": "assets/js/75.17034431.js",
    "revision": "4b869a35c71532dd0db63c346489138f"
  },
  {
    "url": "assets/js/76.770fa07d.js",
    "revision": "d2c29442cf223fc1ae16ec886a68fa3a"
  },
  {
    "url": "assets/js/77.5ea41a6a.js",
    "revision": "7284df7b57aa692960f7b9e56120d2ca"
  },
  {
    "url": "assets/js/78.61dd93df.js",
    "revision": "c2cc2a21552fc6e205ecaf949369bdff"
  },
  {
    "url": "assets/js/79.6f057c53.js",
    "revision": "a3542d4473085cfcda52613861c59dea"
  },
  {
    "url": "assets/js/8.ef31f639.js",
    "revision": "f18ea98bf9111006aa63fbd3b75de756"
  },
  {
    "url": "assets/js/80.f5a01158.js",
    "revision": "879f214c22f7e177cac0ff6e125b7ba9"
  },
  {
    "url": "assets/js/81.0c0b8302.js",
    "revision": "b655d3e0c51b192cef3b858cedc8e23c"
  },
  {
    "url": "assets/js/82.d18b0020.js",
    "revision": "54ff0aa3249b8dc7512351aa376a1af8"
  },
  {
    "url": "assets/js/83.111d0e32.js",
    "revision": "d88ea14338ec1bf82cbdfe7fb2a0a323"
  },
  {
    "url": "assets/js/84.300fd826.js",
    "revision": "7eae6489445229519980e8bc806f57d0"
  },
  {
    "url": "assets/js/85.96cbfab2.js",
    "revision": "fa01417c19995822a45d6cd9cb05fe8a"
  },
  {
    "url": "assets/js/86.9b5fa65b.js",
    "revision": "834ee00a623a75e5470dad38ca1d4726"
  },
  {
    "url": "assets/js/87.341947ca.js",
    "revision": "e531547273a6c6e2bc880b3d9f68d4fc"
  },
  {
    "url": "assets/js/88.bd3866ac.js",
    "revision": "61a5b0602f2b58989b8b1c17080bafa7"
  },
  {
    "url": "assets/js/89.17c9ea6f.js",
    "revision": "4b9da2a474829bad3973357a8f8eb148"
  },
  {
    "url": "assets/js/9.c11680d7.js",
    "revision": "0a0eeaf6d5c4ed41ccdcccca6fae1f72"
  },
  {
    "url": "assets/js/90.4c1c2644.js",
    "revision": "20799d3de49f487c1448fa99001f252d"
  },
  {
    "url": "assets/js/91.e402de07.js",
    "revision": "7fab5c395c64ba0920d972e1b2c6b323"
  },
  {
    "url": "assets/js/92.aca11a76.js",
    "revision": "a35d0a07fab12b6cd2d2f648767c138d"
  },
  {
    "url": "assets/js/93.411d44dd.js",
    "revision": "7b26bbdce7aad76ab3a85ca317c8ba86"
  },
  {
    "url": "assets/js/94.457eb6d0.js",
    "revision": "f688906905aae461e5c5e3d5d370235e"
  },
  {
    "url": "assets/js/95.0c01c8ed.js",
    "revision": "2d45a830c0a68f1199c94c04830838e5"
  },
  {
    "url": "assets/js/96.c5e8a066.js",
    "revision": "b40ee53b107c865666593752676fe4fc"
  },
  {
    "url": "assets/js/97.ca4b288f.js",
    "revision": "5576c9061e283195d40e0e01d49bc8c9"
  },
  {
    "url": "assets/js/98.63b97a76.js",
    "revision": "200a44b208f7f68c59ad00ecf457a9b4"
  },
  {
    "url": "assets/js/99.90c067bb.js",
    "revision": "c919f98889e17b2ff1fecf9f02bfca12"
  },
  {
    "url": "assets/js/app.cf37fb40.js",
    "revision": "c72f2ce8a801e3fdc9856bb708e74ed2"
  },
  {
    "url": "author.jpeg",
    "revision": "7e1bfc6337e85b76f0f6e95859ed93d6"
  },
  {
    "url": "basis/algorithms/index.html",
    "revision": "5a75d057fd8cbff36025c9c35c289767"
  },
  {
    "url": "basis/algorithms/t1-buble-sort.html",
    "revision": "a3367452b937ed6fb1bbd1dcf3d099fe"
  },
  {
    "url": "basis/algorithms/t2-selection-sort.html",
    "revision": "8bc6bbb9066eb772b112797344d07dcb"
  },
  {
    "url": "basis/algorithms/t3-insertion-sort.html",
    "revision": "5892e97763ef1ed1c52a1eb6d56e45a4"
  },
  {
    "url": "basis/algorithms/t4-shell-sort.html",
    "revision": "dde723277904c2f406503e3bf141ab86"
  },
  {
    "url": "basis/algorithms/t5-quick-sort.html",
    "revision": "4906a86f606eb5b7696c792e89486d6a"
  },
  {
    "url": "basis/algorithms/t6-heap-sort.html",
    "revision": "db80ce870b40950e6319c8bcaf5bca50"
  },
  {
    "url": "basis/algorithms/t7-merge-sort.html",
    "revision": "5613d7808ad2b5856ccd5de94552759e"
  },
  {
    "url": "basis/algorithms/t8-radix-sort.html",
    "revision": "d1b15c5372a8b2948f8b281ab9e65538"
  },
  {
    "url": "basis/algorithms/t9-count-sort.html",
    "revision": "c8580e195e9e030c741f393eab95c413"
  },
  {
    "url": "basis/algorithms/u1-bucket-sort.html",
    "revision": "40f5f001e7a48dd782233191581c0dc0"
  },
  {
    "url": "basis/design/0. Class Releation.html",
    "revision": "f5a93fc35b4f5899e9c5e59f1aa4b9de"
  },
  {
    "url": "basis/design/0.1 Design Principles.html",
    "revision": "15bc0aeeab6846e5c2cfa0e51936deb2"
  },
  {
    "url": "basis/design/1. Factory Pattern.html",
    "revision": "c69efee6eedeb3448584b918f8bbd3d5"
  },
  {
    "url": "basis/design/10. Facade Pattern.html",
    "revision": "a02a4026955d11db792781ea9252a93b"
  },
  {
    "url": "basis/design/11. Flyweight Pattern.html",
    "revision": "e4790f233692a475fb355c0cff53529a"
  },
  {
    "url": "basis/design/12. Proxy Pattern.html",
    "revision": "51e6e023a01400a0dd46459c1d796d41"
  },
  {
    "url": "basis/design/13. Chain of Responsibility Pattern.html",
    "revision": "e9a343d189106993a8f0b62b769b334d"
  },
  {
    "url": "basis/design/14. Command Pattern.html",
    "revision": "b3c02700221b4f0c7295bcdd4be3f0d5"
  },
  {
    "url": "basis/design/15. Interpreter Pattern.html",
    "revision": "898be204c8c0a00b5e4ee2465dd08732"
  },
  {
    "url": "basis/design/16. Iterator Pattern.html",
    "revision": "3e3358f3abeb51ae9eb580451d9ad60a"
  },
  {
    "url": "basis/design/17. Mediator Pattern.html",
    "revision": "b6de86a43e82fd0ccf201c3cee2dfe6d"
  },
  {
    "url": "basis/design/18. Memento Pattern.html",
    "revision": "11f132c07678c6c320b8abc98ceb3c7c"
  },
  {
    "url": "basis/design/19. Observer Pattern.html",
    "revision": "0994a00cd651fb768ddefd520d64bb09"
  },
  {
    "url": "basis/design/2. Builder Pattern.html",
    "revision": "7f000d920946ec87105ecfd107ec19e0"
  },
  {
    "url": "basis/design/20. State Pattern.html",
    "revision": "098c21ce5b7bbe5394909ce089858042"
  },
  {
    "url": "basis/design/21. Null Object Pattern.html",
    "revision": "d3e5f8ead89511a9ef8e75730352da2f"
  },
  {
    "url": "basis/design/22. Strategy Pattern.html",
    "revision": "2a45f9f81e2dd3af5eefb066861cc933"
  },
  {
    "url": "basis/design/23. Template Pattern.html",
    "revision": "952957fd8e8cc2e9ac8895033c377eaf"
  },
  {
    "url": "basis/design/24. Visitor Pattern.html",
    "revision": "e736d7bab536b77bfa8064ee00cbf3df"
  },
  {
    "url": "basis/design/3. Prototype Pattern.html",
    "revision": "53f4befef3960d5f5480549059f9c8e3"
  },
  {
    "url": "basis/design/4.Singleton Pattern.html",
    "revision": "5e2a3220fc7b2bac0fa2a1372ca3b777"
  },
  {
    "url": "basis/design/5. Adapter Pattern.html",
    "revision": "72a3fd95316ae464731a2deaecd4a302"
  },
  {
    "url": "basis/design/6. Bridge Pattern.html",
    "revision": "cfba23fba2ef774732896ff49752f385"
  },
  {
    "url": "basis/design/7. Filter、Criteria Pattern.html",
    "revision": "ff7ddec0fada3401e215dd34d593bf2f"
  },
  {
    "url": "basis/design/8. Composite Pattern.html",
    "revision": "1c1de2ae28470058125943dbea6caf48"
  },
  {
    "url": "basis/design/9. Decorator Pattern.html",
    "revision": "61fac1acd5600ca25ac0f976637a76a0"
  },
  {
    "url": "basis/design/index.html",
    "revision": "5b6311289e5b3b0024bc2cf60943b9dd"
  },
  {
    "url": "basis/index/index.html",
    "revision": "5a38581bb09c0c6e9bd93517a146af9f"
  },
  {
    "url": "basis/os/index.html",
    "revision": "7cef6cfa5228a3fe807a31776b8374e1"
  },
  {
    "url": "book/index.html",
    "revision": "ef1b7198afbb51a74c31e7b27061558f"
  },
  {
    "url": "book/t-find-books.html",
    "revision": "51f24fb3e1d4a666e6e566488770c1d7"
  },
  {
    "url": "categories/index.html",
    "revision": "795a66608e8089a72f5ee86dd037bec0"
  },
  {
    "url": "figma/index.html",
    "revision": "c2ca7a8058c28adc222938d2bcbbd14d"
  },
  {
    "url": "flutter/index.html",
    "revision": "9c2ff67da95d32216b09a9963d57b298"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "ed76983ac363271ca1b9df1a25ad9501"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "549208eeb124ec0205680a021d13f2ad"
  },
  {
    "url": "flutter/t3-messages.html",
    "revision": "c7f64ef14b59deb1546b28c530f50d07"
  },
  {
    "url": "flutter/t3-mixin.html",
    "revision": "3591fa8c1408f66a53f321df86b68b01"
  },
  {
    "url": "flutter/t4-lifecycle.html",
    "revision": "ecde9e9c45e09791b39021c0242f0958"
  },
  {
    "url": "flutter/t5-flutter-web-deploy.html",
    "revision": "7ad218a64b777f5635506e67e561109f"
  },
  {
    "url": "flutter/t6-docker-web-deploy.html",
    "revision": "16f360464974872f0645e35aefff700c"
  },
  {
    "url": "flutter/t7-fvm.html",
    "revision": "806b54f031752f4972e5c97486651086"
  },
  {
    "url": "flutter/t8-const.html",
    "revision": "33f84558a04db054e90e5673d052e85c"
  },
  {
    "url": "flutter/t9-logs.html",
    "revision": "6c20156f60be0decf3196d81ec77418b"
  },
  {
    "url": "flutter/u10-fvm-flutter2.html",
    "revision": "ff298d915bdd92a83fd13fe999d415c1"
  },
  {
    "url": "flutter/u11-flutter-render.html",
    "revision": "21285872703aa3d0babba9244068b9cb"
  },
  {
    "url": "flutter/u12-flutter-create-w.html",
    "revision": "ce79d5236ab38cc3d94d61ff03f537dd"
  },
  {
    "url": "flutter/u12-flutter-web-01.html",
    "revision": "efa51ec7d026b4957db941543bfd5119"
  },
  {
    "url": "flutter/u12-flutter-web-02.html",
    "revision": "178cb57ebf6ee3e86557bc330a7a2f05"
  },
  {
    "url": "flutter/u13-sliverappbar.html",
    "revision": "db600a4cd603557e58b20cddd1519b02"
  },
  {
    "url": "flutter/u14-navbar-color.html",
    "revision": "3ba982aec39f6d173c8609d6dac997c6"
  },
  {
    "url": "flutter/u15-custom-nabar.html",
    "revision": "59c66f79abb59e2265ec11e57547ca10"
  },
  {
    "url": "flutter/u16-shape.html",
    "revision": "460b08703156dd7854c5a157f19fc60e"
  },
  {
    "url": "haskell/1-install.html",
    "revision": "b081405f275280c35322305e30900d6d"
  },
  {
    "url": "haskell/2-vscode.html",
    "revision": "53a87ff21bea38cf68db387ac63706cc"
  },
  {
    "url": "haskell/3-pktool.html",
    "revision": "f5c81e332b02fccf8db76bb3eab51f8d"
  },
  {
    "url": "haskell/4-digui.html",
    "revision": "c3611af38256013712ec6c0605a1fdba"
  },
  {
    "url": "haskell/index.html",
    "revision": "6d5bb93d81e4088dc1089dbc4b8ac4a0"
  },
  {
    "url": "index.html",
    "revision": "bac342b59040832350de70bb95b67fc3"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "python/1-file-map.html",
    "revision": "48ae98b4ba918abb959b5ae0ed6f3e71"
  },
  {
    "url": "python/index.html",
    "revision": "a4d789a4d28f9bd44f326eefc125ae90"
  },
  {
    "url": "swift/fp/index.html",
    "revision": "05e0e11a635b200008095cc9e9067f7c"
  },
  {
    "url": "swift/fp/t1-fp.html",
    "revision": "b7ed2052558dce370df75197c9bf1432"
  },
  {
    "url": "swift/fp/t2-lens.html",
    "revision": "fa7dadb732e6240f3db51125d76faffb"
  },
  {
    "url": "swift/fp/t3-json1.html",
    "revision": "8cff9f8a4a64a30ef2bbe1287aeec3a7"
  },
  {
    "url": "swift/fp/t3-json2.html",
    "revision": "17a5a780e4a8319127063f930ac75239"
  },
  {
    "url": "swift/fp/t3-json3.html",
    "revision": "8f4407b6e3f5532727ed2eaf9a02269d"
  },
  {
    "url": "swift/fp/t4-length.html",
    "revision": "6840c01a0be2532633b25f3c10ea13a4"
  },
  {
    "url": "swift/ios/index.html",
    "revision": "6eb05c2889ec8e675c02abf384836d43"
  },
  {
    "url": "swift/ios/t1-pod-webp.html",
    "revision": "51fc4138f79a00055d1914e7aab88b5c"
  },
  {
    "url": "swift/ios/t2-youhua.html",
    "revision": "51a3ee4501e090a3139c5de6a31211b9"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "f9dc18856b11284eb44cc0e7f3294481"
  },
  {
    "url": "swift/swiftui/t1-principle.html",
    "revision": "af1cf38974baba8d3ad759107436db96"
  },
  {
    "url": "swift/swiftui/t1.0-propertywrapper.html",
    "revision": "5bd6dd7fa512034c917b72e58dd81587"
  },
  {
    "url": "swift/swiftui/t1.1-functionBuilder.html",
    "revision": "4e14ef27ae686aa7f368e51cb9925997"
  },
  {
    "url": "swift/swiftui/t1.2-propertys.html",
    "revision": "8b8e6f8b04327b7d73d3a876f4850eab"
  },
  {
    "url": "swift/swiftui/t2-views_control.html",
    "revision": "e6ac9ccc755320851c8dbdafcc413fcf"
  },
  {
    "url": "swift/swiftui/t3-layout_presentation.html",
    "revision": "74b61734b6e56bad31241efca6a41392"
  },
  {
    "url": "swift/swiftui/t4-uikit_in_swiftui.html",
    "revision": "df4d2b26b2338f146022182ffe846175"
  },
  {
    "url": "swift/swiftui/t5-swiftui_in_uikit.html",
    "revision": "01f578aea9022baedfcadbaf9452a949"
  },
  {
    "url": "swift/swiftui/t6-viewmodifier.html",
    "revision": "58b604bb42b0267435453757d8cab662"
  },
  {
    "url": "swift/swiftui/t7-geometryreader.html",
    "revision": "7acf31ed1624cc1318e512e56b928281"
  },
  {
    "url": "swift/swiftui/t8-preferencekey.html",
    "revision": "5f75661f669a8b25f59c7dc1a2c48058"
  },
  {
    "url": "swift/tips/index.html",
    "revision": "cf1d8bc90e9c0d11ff9b7a4fe7f12342"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "2b1b24023b3113da2803c7c85971330b"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "b379b8e663c680bb61d281bdf5cc9929"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "ada34fed48d7ce97c27e88c846deca06"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "1980719f222da8cc31be7651bb09c246"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "3f61afeafc3e66eefed659674254fbfd"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "8873ed15a987520545064163418e19d2"
  },
  {
    "url": "swift/vapor/t6-say-oldbirds.html",
    "revision": "380dec0ce333b0ede408f0a247a34af0"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "84bf09e5653d84d2008922852e38757a"
  },
  {
    "url": "swift/vapor/u-11-auth.html",
    "revision": "18f3c9f07d1fc9515410dd0c164644a0"
  },
  {
    "url": "swift/vapor/u-12-permission.html",
    "revision": "d49fc701cc98fa09ad40c0a956c4d772"
  },
  {
    "url": "swift/vapor/v-20-read-code.html",
    "revision": "41940fc5f85aa5c1dfe11553887539cb"
  },
  {
    "url": "swift/vapor/v-21-io.html",
    "revision": "2bea5d056314805865b796a4dd0058dd"
  },
  {
    "url": "swift/vapor/v-22-bio2.html",
    "revision": "7fe7c2f9bf4a23c3eab28ae5ec9fc542"
  },
  {
    "url": "swift/vapor/v-23-swiftnio-do-text.html",
    "revision": "710bfd8fff4806a14aa79362b56394b9"
  },
  {
    "url": "swift/vapor/v-24-swift-zhan-package.html",
    "revision": "b4eb9e7afc367a768529ed39509385e0"
  },
  {
    "url": "swift/vapor/v-25-swiftnio-do-serisize.html",
    "revision": "47b4c8e8980d401b1bcd3732780add6f"
  },
  {
    "url": "swift/vapor/v-26-swfitnio-grpc-1.html",
    "revision": "acf05f85e03917280ad43f8679977de7"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/ai/index.html",
    "revision": "a8b83596422efd811d7b7c0c153208f2"
  },
  {
    "url": "tag/flutter/index.html",
    "revision": "2e145aa96e9c866b8f9303b072ed7316"
  },
  {
    "url": "tag/flutter/page/2/index.html",
    "revision": "b1843eaa0241383676e726c427e22e3b"
  },
  {
    "url": "tag/git/index.html",
    "revision": "bc301d00a87f273edbd773f41ccd2b67"
  },
  {
    "url": "tag/haskell/index.html",
    "revision": "349ad7fe3b2115d198648a12b641719a"
  },
  {
    "url": "tag/html/index.html",
    "revision": "bfdc3a6c3a2d6efed29668549ebd10f7"
  },
  {
    "url": "tag/index.html",
    "revision": "8794d37b7174837402788491286211c5"
  },
  {
    "url": "tag/ios/index.html",
    "revision": "53d477881aa746ee05e1e9e79053c36e"
  },
  {
    "url": "tag/json/index.html",
    "revision": "cf9f4e3344f93d3d1414e0d40f205a76"
  },
  {
    "url": "tag/plantuml/index.html",
    "revision": "66e8bc0eaa0eb397ace4f793f56de9f4"
  },
  {
    "url": "tag/python/index.html",
    "revision": "72bc7503659208bcf32ca4a6c7fc47df"
  },
  {
    "url": "tag/swift/index.html",
    "revision": "f7e6ef6fb67b555106f3773354716f1c"
  },
  {
    "url": "tag/swift/page/2/index.html",
    "revision": "53306f1dffdd57cef2896fec1b53b743"
  },
  {
    "url": "tag/swift/page/3/index.html",
    "revision": "60b02a4c918055bb2702db8073e9b391"
  },
  {
    "url": "tag/swift/page/4/index.html",
    "revision": "2671aef587ce60b733565f0668105245"
  },
  {
    "url": "tag/swiftnio/index.html",
    "revision": "e6e64e93267b579fe55605654147c190"
  },
  {
    "url": "tag/swiftui/index.html",
    "revision": "ae29a0dd517bcb8d7472e834e80a5092"
  },
  {
    "url": "tag/swiftui/page/2/index.html",
    "revision": "527af0199d5e8987ac32690d03e0dbdb"
  },
  {
    "url": "tag/tips/index.html",
    "revision": "14fe4579c1ae47348cd46f75a52638d8"
  },
  {
    "url": "tag/tools/index.html",
    "revision": "c625a3994c5ac9d6cf94d40be0dc19b0"
  },
  {
    "url": "tag/vapor/index.html",
    "revision": "6cc4c76b1df3de5746274ea12e389d4f"
  },
  {
    "url": "tag/vapor/page/2/index.html",
    "revision": "7179b68ba3567b28a3f58d9c116160ff"
  },
  {
    "url": "tag/vscode/index.html",
    "revision": "459f907e24ee6e6ef64bed6789500e62"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "4ad7d163bae6bbe080b4af1f1a224a69"
  },
  {
    "url": "tag/yaml/index.html",
    "revision": "9c20e8c3d4479ad3d34a2b4c9d1935dc"
  },
  {
    "url": "tag/书单/index.html",
    "revision": "c263346da8cd7c30a614a4124b9de967"
  },
  {
    "url": "tag/函数式编程/index.html",
    "revision": "8d411fc9800666f47715476520fe7be3"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "5613f116491c8c5f539517c814f0b132"
  },
  {
    "url": "tag/基础/page/2/index.html",
    "revision": "f6e1d7a4c8bce907fbb72f10e941cf0d"
  },
  {
    "url": "tag/基础/page/3/index.html",
    "revision": "169dba5ae91582fba3f55d714b974070"
  },
  {
    "url": "tag/基础/page/4/index.html",
    "revision": "4de8ce42018e4b2b582abb5c33e11371"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "15d8b7aaa6dac2a57a31403cff850bd1"
  },
  {
    "url": "tag/数据结构与算法/page/2/index.html",
    "revision": "dd879d1dcc3878b3b9a3213cf4ecf3f8"
  },
  {
    "url": "tag/设计模式/index.html",
    "revision": "ba44697eabd5435515df6867be591ce5"
  },
  {
    "url": "tag/设计模式/page/2/index.html",
    "revision": "e6390302982723f0935e4a2071db3ee6"
  },
  {
    "url": "tag/设计模式/page/3/index.html",
    "revision": "0686301773fe4986eb187ee6b6caea65"
  },
  {
    "url": "timeline/index.html",
    "revision": "d764e8e4bbbe342fb2ca8380690c0529"
  },
  {
    "url": "tools/git/index.html",
    "revision": "e4aa094690a722086e1e433fd42efb18"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "9235f053a89566d1ffebaa6f7055471a"
  },
  {
    "url": "tools/git/t2-git-submodule.html",
    "revision": "7f01893f8124ba0d01bd25077d58b7d5"
  },
  {
    "url": "tools/html/index.html",
    "revision": "1f889efe9948140382753fa024fb2e03"
  },
  {
    "url": "tools/plantuml/index.html",
    "revision": "760447d840e232eee1c11192136263c2"
  },
  {
    "url": "tools/plantuml/t1-sequence-diagram.html",
    "revision": "fa543d2681f23ddad041bd032acecca9"
  },
  {
    "url": "tools/plantuml/t2-class-diagram.html",
    "revision": "3fb43bbefdc4a52e7c51c7cdf09d6c67"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "d32f92dad5b0db82c3e85994d57fbbaf"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "b967cb6bb95a287b743759a689398214"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "d04bb243865f25b4c043a3a9e11c6ea0"
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
