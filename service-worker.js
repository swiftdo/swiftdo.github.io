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
    "revision": "366cc2eb32bbd46d49451e5ab3987778"
  },
  {
    "url": "about/app/index.html",
    "revision": "8f006fba3776908a6d7b1a46450c5b8c"
  },
  {
    "url": "about/app/t1-protocol.html",
    "revision": "8ca91598c346182b2a048fcaf5e1d360"
  },
  {
    "url": "about/app/t2-secrect.html",
    "revision": "462d968eb2fa6c0addaf463b75a71ea6"
  },
  {
    "url": "about/app/t3-miniapps-sec.html",
    "revision": "af82021adbcab2b971313683d70015ab"
  },
  {
    "url": "about/index/index.html",
    "revision": "dbe35e6b8b446f65d0508d3165bc0c98"
  },
  {
    "url": "ai/index.html",
    "revision": "43e2cadc9780a3b6189a2d6845c2e3c3"
  },
  {
    "url": "ai/t1-gzj.html",
    "revision": "cb3fbdfeb0f821885b0b7bd11cf0cfbe"
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
    "url": "assets/js/100.9dafc4a6.js",
    "revision": "a2a93379ef02e25164515bc4c09d37bd"
  },
  {
    "url": "assets/js/101.9bbfcc5a.js",
    "revision": "b5defc814841da23599636c946ff9087"
  },
  {
    "url": "assets/js/102.66617904.js",
    "revision": "8bbc48c9340783dd790a394951a3cc69"
  },
  {
    "url": "assets/js/103.32c618e4.js",
    "revision": "e6ff8cf0bce4073af5e2b2df8faf3d95"
  },
  {
    "url": "assets/js/104.14904b67.js",
    "revision": "e5cc8460038a602706e478e8e7c8568a"
  },
  {
    "url": "assets/js/105.cc17d9fd.js",
    "revision": "64febc1dc1dad3ab701f80e5fa78e5db"
  },
  {
    "url": "assets/js/106.d0c35ad9.js",
    "revision": "222ef50801a7574d39a8bb1b0b0e7735"
  },
  {
    "url": "assets/js/107.0cb78dc3.js",
    "revision": "a7701b2dd9682e833d2993a627c6e878"
  },
  {
    "url": "assets/js/108.a0c3ca82.js",
    "revision": "8308040b2a7d949e4cbd6ff6ae007760"
  },
  {
    "url": "assets/js/109.268d0b73.js",
    "revision": "74b014fc807c72110e87162a63783529"
  },
  {
    "url": "assets/js/11.9442356f.js",
    "revision": "c63fb51d0b73425258c3e851ce1dfd1f"
  },
  {
    "url": "assets/js/110.34dea704.js",
    "revision": "64245c844d18db0c728b971c1af23785"
  },
  {
    "url": "assets/js/111.90ea0f78.js",
    "revision": "53af78003ab54a3665598835d96a001e"
  },
  {
    "url": "assets/js/112.cca382b5.js",
    "revision": "06b700a1129ba6683f8bf2184728c9ab"
  },
  {
    "url": "assets/js/113.2dd57327.js",
    "revision": "e8214a7f9b2fcd99afd35164af459d33"
  },
  {
    "url": "assets/js/114.526add24.js",
    "revision": "6f67b25fd7037b558eeccd7a6d6358b8"
  },
  {
    "url": "assets/js/115.9cb7f510.js",
    "revision": "4c12ae1a3e7bd30a566c7d10aac07911"
  },
  {
    "url": "assets/js/116.734c8511.js",
    "revision": "8517545e7e3891a1b2bbb1d0903a7e78"
  },
  {
    "url": "assets/js/117.49c4d217.js",
    "revision": "aa41930e1db17f1472890b5791afaada"
  },
  {
    "url": "assets/js/118.a1625a58.js",
    "revision": "6d2d17d105da7a3a68e3bca005db9b6a"
  },
  {
    "url": "assets/js/119.1424f92e.js",
    "revision": "1922a8fddb9428803896611a8d2428de"
  },
  {
    "url": "assets/js/12.d44bf03c.js",
    "revision": "76f3c76aaa771c7caebcac89603c975c"
  },
  {
    "url": "assets/js/120.3428f678.js",
    "revision": "b9f302925eb61f386f8c9152e267bdfc"
  },
  {
    "url": "assets/js/121.7c59f909.js",
    "revision": "0368f3bb26cd2682df2cc26953f227b9"
  },
  {
    "url": "assets/js/122.067c7b12.js",
    "revision": "b5e8a583368642ea0b0698254a99a0c5"
  },
  {
    "url": "assets/js/123.41b62249.js",
    "revision": "5350c88e2571fdee83ca2916192d86ed"
  },
  {
    "url": "assets/js/124.3da6ddf7.js",
    "revision": "a29f53cdc9fa9496dce3c198f5f6e734"
  },
  {
    "url": "assets/js/125.028397b4.js",
    "revision": "8157e5576f1362727a935d6a996bcbf5"
  },
  {
    "url": "assets/js/126.5f4725c1.js",
    "revision": "72eae3e1509ae338efa1a7bbe75da43c"
  },
  {
    "url": "assets/js/127.4b86c058.js",
    "revision": "6357a8db229c535a481001053e0eb87b"
  },
  {
    "url": "assets/js/128.6107a89a.js",
    "revision": "f386446c1c8ab4a1e787a796c4a75d90"
  },
  {
    "url": "assets/js/129.06cf3481.js",
    "revision": "b3210946a6bedb993fc328df91e20f12"
  },
  {
    "url": "assets/js/13.37b4e409.js",
    "revision": "0d8dbf24d975daa148cd23cb73ac6d82"
  },
  {
    "url": "assets/js/130.97abc4c3.js",
    "revision": "36d4359c31bf3dc22d2cbaff16483ccc"
  },
  {
    "url": "assets/js/131.d0b53950.js",
    "revision": "d82f3f8e8cdfbb87c15e048d22338c48"
  },
  {
    "url": "assets/js/132.72ee03e2.js",
    "revision": "e6e2e8d83b92ac65608b701f764b50f9"
  },
  {
    "url": "assets/js/133.8439f436.js",
    "revision": "23c52f970de3b58150771faf91153ce5"
  },
  {
    "url": "assets/js/134.cfe5cf90.js",
    "revision": "fd1b39ef23ce7c69365b405cb36cc4bc"
  },
  {
    "url": "assets/js/135.a06106f5.js",
    "revision": "45b6840b9d27d31fcc06ab4f2b258376"
  },
  {
    "url": "assets/js/136.6d945d82.js",
    "revision": "229d1d39ed1365e6f34786156fea9c75"
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
    "url": "assets/js/23.fccd0833.js",
    "revision": "0f9970c970765ff56b5ab741cc9cce7d"
  },
  {
    "url": "assets/js/24.35d73e3f.js",
    "revision": "b6bc2503ed6d671dbf58b7dd347dbd6a"
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
    "url": "assets/js/48.589a6d3e.js",
    "revision": "e89890a7e42562986121d9ca24bc780d"
  },
  {
    "url": "assets/js/49.8b8616f9.js",
    "revision": "97fb37187926d02775ac9876f1888c02"
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
    "url": "assets/js/58.7315dbe1.js",
    "revision": "e72055344901f0a3a85cfd30d77c501b"
  },
  {
    "url": "assets/js/59.cdc00726.js",
    "revision": "4c0d674617bf2bb8d669eabbc10b7a3b"
  },
  {
    "url": "assets/js/6.71f32179.js",
    "revision": "838d5273ad78002f558c07e7803eb84c"
  },
  {
    "url": "assets/js/60.42824684.js",
    "revision": "bf91482de823d46fc1dca864a7edbc7c"
  },
  {
    "url": "assets/js/61.98d52788.js",
    "revision": "c9b6eadc0efd12e33debb94bd9d5129f"
  },
  {
    "url": "assets/js/62.f7f300fb.js",
    "revision": "12f11208186552039f9f739862cb4b15"
  },
  {
    "url": "assets/js/63.25df32d3.js",
    "revision": "eacf1669cb6de3987cb3e9e1d404cf3d"
  },
  {
    "url": "assets/js/64.c3b70501.js",
    "revision": "ba010c17916315a244818917d9eca75e"
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
    "url": "assets/js/74.653ec75f.js",
    "revision": "3ee535916fba2cfad656e6e3b681b1d6"
  },
  {
    "url": "assets/js/75.d9567d03.js",
    "revision": "95f5dd97573103ef411801b848676f6a"
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
    "url": "assets/js/81.87e87c1e.js",
    "revision": "2dde75b00cb56ef1e0d18afb722b3c21"
  },
  {
    "url": "assets/js/82.cf481cd9.js",
    "revision": "0db84fe789b2d6f8ea49a1b1c83176fd"
  },
  {
    "url": "assets/js/83.66e44690.js",
    "revision": "a55b1bb20a0d106fbe81ffab6acfaf41"
  },
  {
    "url": "assets/js/84.c8092642.js",
    "revision": "12bab8ce23cade84029640123dea077b"
  },
  {
    "url": "assets/js/85.37f0d39b.js",
    "revision": "373b9416e846e14c6573892dcc3af6d7"
  },
  {
    "url": "assets/js/86.c3936a46.js",
    "revision": "d6c879617db526ae7b1e1f96192f200d"
  },
  {
    "url": "assets/js/87.499fbd15.js",
    "revision": "a0aabe6ed8057f9e7a2107440a71f116"
  },
  {
    "url": "assets/js/88.e05dbd98.js",
    "revision": "db9aec980ed2e075e141accebb15cb81"
  },
  {
    "url": "assets/js/89.5ef78826.js",
    "revision": "cde46b0beb109a2a942863ec28732c07"
  },
  {
    "url": "assets/js/9.082e4631.js",
    "revision": "9f6c5862116317bffd70c72fd6af0331"
  },
  {
    "url": "assets/js/90.59c5e0bb.js",
    "revision": "2f69e576a2f8704de6765d28a2033660"
  },
  {
    "url": "assets/js/91.3dfef0c8.js",
    "revision": "3947c76587fb4100e804fbd980196922"
  },
  {
    "url": "assets/js/92.911adada.js",
    "revision": "2affcedff2de2dd755c39294f54a1d57"
  },
  {
    "url": "assets/js/93.9d9257b0.js",
    "revision": "ccb2376b6be980e68b11ba8719ed8457"
  },
  {
    "url": "assets/js/94.be4eb69f.js",
    "revision": "3ac6357d34567d303b1f32b3954a7834"
  },
  {
    "url": "assets/js/95.7c318cf9.js",
    "revision": "6b19ac150d26b56c31d5ca7491c04c9d"
  },
  {
    "url": "assets/js/96.fd54bf72.js",
    "revision": "e2d6354fd28f4ffc4c890905d23a606a"
  },
  {
    "url": "assets/js/97.1863ce5a.js",
    "revision": "3aa64318ca22afa9c14177911deefeb1"
  },
  {
    "url": "assets/js/98.31a36c35.js",
    "revision": "2b3737ab3d6af87f45284d0dc07ceee2"
  },
  {
    "url": "assets/js/99.01f544ab.js",
    "revision": "a01cbba639c3082743261940d6d207a5"
  },
  {
    "url": "assets/js/app.e46854ea.js",
    "revision": "5fbcee424fbbf89d02540c99463bee6f"
  },
  {
    "url": "author.jpeg",
    "revision": "7e1bfc6337e85b76f0f6e95859ed93d6"
  },
  {
    "url": "basis/algorithms/index.html",
    "revision": "f1c90cc70fbbc963a3cb84976427d100"
  },
  {
    "url": "basis/algorithms/t1-buble-sort.html",
    "revision": "1600e1807377f394d58ef9738b506f97"
  },
  {
    "url": "basis/algorithms/t2-selection-sort.html",
    "revision": "222cc8f4974223b403706d40948eda7f"
  },
  {
    "url": "basis/algorithms/t3-insertion-sort.html",
    "revision": "facb7e996f77e94d8cdcd27b1cab698f"
  },
  {
    "url": "basis/algorithms/t4-shell-sort.html",
    "revision": "b0c4e34ef48b749f776504d025355c7e"
  },
  {
    "url": "basis/algorithms/t5-quick-sort.html",
    "revision": "fdd3d67146c8c8579e31d4ce1b830e37"
  },
  {
    "url": "basis/algorithms/t6-heap-sort.html",
    "revision": "24eed057678cc9acced99b9b5dc25102"
  },
  {
    "url": "basis/algorithms/t7-merge-sort.html",
    "revision": "153f46dea0ebe5dd1267e81dcad5e8d5"
  },
  {
    "url": "basis/algorithms/t8-radix-sort.html",
    "revision": "482d5d5cfa4401bb7a2da663161dec8f"
  },
  {
    "url": "basis/algorithms/t9-count-sort.html",
    "revision": "1269781d14197318425f07ceeed7a79f"
  },
  {
    "url": "basis/algorithms/u1-bucket-sort.html",
    "revision": "e291dc9bc88a1ea4d733d28fa872c3c5"
  },
  {
    "url": "basis/design/0. Class Releation.html",
    "revision": "b7fc397a6269860b504747b86ef2874d"
  },
  {
    "url": "basis/design/0.1 Design Principles.html",
    "revision": "a0c44f6c2a3767ee7d932eb41b27f140"
  },
  {
    "url": "basis/design/1. Factory Pattern.html",
    "revision": "672fa11fe181d0916e51af6d1e338bec"
  },
  {
    "url": "basis/design/10. Facade Pattern.html",
    "revision": "1109602dcf149f73da3ce610ea9ec4de"
  },
  {
    "url": "basis/design/11. Flyweight Pattern.html",
    "revision": "7b6a90cfaf1d3620f73c2c7b49fa88ea"
  },
  {
    "url": "basis/design/12. Proxy Pattern.html",
    "revision": "ae139054885cc4a47d05182284337ef4"
  },
  {
    "url": "basis/design/13. Chain of Responsibility Pattern.html",
    "revision": "202a415a84c28727c120192f566a9da9"
  },
  {
    "url": "basis/design/14. Command Pattern.html",
    "revision": "e1e3d8e761e58994f58ee8cffc20e452"
  },
  {
    "url": "basis/design/15. Interpreter Pattern.html",
    "revision": "3612af0bb7b10ab15a29a35d0b1b0cdc"
  },
  {
    "url": "basis/design/16. Iterator Pattern.html",
    "revision": "5666cddd63553d7f7fd090062bfdc07f"
  },
  {
    "url": "basis/design/17. Mediator Pattern.html",
    "revision": "14795b30d729e0b2a2e09a375ea2ab4a"
  },
  {
    "url": "basis/design/18. Memento Pattern.html",
    "revision": "7300047cfc8e55310bdd29aa31e05edc"
  },
  {
    "url": "basis/design/19. Observer Pattern.html",
    "revision": "8ded053ec0110fa9dd0b06dbdbee0b12"
  },
  {
    "url": "basis/design/2. Builder Pattern.html",
    "revision": "72f44a50e706ecf2f6431c9255955d50"
  },
  {
    "url": "basis/design/20. State Pattern.html",
    "revision": "7842b805a45d7c5182757e8a53455a2a"
  },
  {
    "url": "basis/design/21. Null Object Pattern.html",
    "revision": "6d13684316d8a5506c3b472620459757"
  },
  {
    "url": "basis/design/22. Strategy Pattern.html",
    "revision": "0871e9e9ba0299a55259f11c15135df1"
  },
  {
    "url": "basis/design/23. Template Pattern.html",
    "revision": "f0150157d9fc609d79569270f3604c08"
  },
  {
    "url": "basis/design/24. Visitor Pattern.html",
    "revision": "16554d796f89a173f625e166152baff5"
  },
  {
    "url": "basis/design/3. Prototype Pattern.html",
    "revision": "ed0b909d9949a2f0a121f700aebb14a5"
  },
  {
    "url": "basis/design/4.Singleton Pattern.html",
    "revision": "d41e4b7efaf6931c08ed8a8532936a17"
  },
  {
    "url": "basis/design/5. Adapter Pattern.html",
    "revision": "9d2e78f2c292fba1413c0463f7995d41"
  },
  {
    "url": "basis/design/6. Bridge Pattern.html",
    "revision": "5ead25f90767b012b7ad6edcc9902d7e"
  },
  {
    "url": "basis/design/7. Filter、Criteria Pattern.html",
    "revision": "213cbc0b925bd6faf37358d95557f9d6"
  },
  {
    "url": "basis/design/8. Composite Pattern.html",
    "revision": "4b1222813b90d96a60e0f96d6e11c9f0"
  },
  {
    "url": "basis/design/9. Decorator Pattern.html",
    "revision": "d98362097623657db279c35589cc9787"
  },
  {
    "url": "basis/design/index.html",
    "revision": "048418d95977b62888bfd20673d76a58"
  },
  {
    "url": "basis/index/index.html",
    "revision": "27d33668b105f7abbef4ec99eb2e8c9e"
  },
  {
    "url": "basis/os/index.html",
    "revision": "ef818f862085b2c04493784c2fa72830"
  },
  {
    "url": "book/index.html",
    "revision": "e0230d162d0178cad17de67c986b5239"
  },
  {
    "url": "book/t-find-books.html",
    "revision": "f214df58844c61d70f9e4f9b323ec458"
  },
  {
    "url": "categories/index.html",
    "revision": "cc7c5ad5c5875b8cb58beef9e5f664ac"
  },
  {
    "url": "figma/index.html",
    "revision": "74eed70f7286069bc6e35d9d13e0964d"
  },
  {
    "url": "flutter/index.html",
    "revision": "1eb92e2cbbcb7fdb5eb10bb254bc25b8"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "2908428442eb38d2f7fad362ab71c665"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "cdbfbd72f95ac69d7cb3691aee30dd41"
  },
  {
    "url": "flutter/t3-messages.html",
    "revision": "4ab412f03f054c2df410d68a0810eaf8"
  },
  {
    "url": "flutter/t3-mixin.html",
    "revision": "95d6e336f7acb92ea585d7e52df2bcd9"
  },
  {
    "url": "flutter/t4-lifecycle.html",
    "revision": "5c543b864eed82eee3c64d70fdfeaa25"
  },
  {
    "url": "flutter/t5-flutter-web-deploy.html",
    "revision": "dbfe816598ead0233c8767cf95f8ab69"
  },
  {
    "url": "flutter/t6-docker-web-deploy.html",
    "revision": "ed14e2249a47ec29a859e9b8fc3d292d"
  },
  {
    "url": "flutter/t7-fvm.html",
    "revision": "fa0b8680758afd70d329d546036a82c9"
  },
  {
    "url": "flutter/t8-const.html",
    "revision": "a7ab6cbf576e7f3c734c6a1ecfa10c51"
  },
  {
    "url": "flutter/t9-logs.html",
    "revision": "49854e4c2c4ac46421aab66c86972fbb"
  },
  {
    "url": "flutter/u10-fvm-flutter2.html",
    "revision": "d8a8ad7891f64c35af7b233948f28451"
  },
  {
    "url": "flutter/u11-flutter-render.html",
    "revision": "f986e63d24d1faa7479c230acef77378"
  },
  {
    "url": "flutter/u12-flutter-create-w.html",
    "revision": "ae3011061a3eda309d13d8fc0b341bb9"
  },
  {
    "url": "flutter/u12-flutter-web-01.html",
    "revision": "b2da83c4db8ea747742d70fdf9820b9e"
  },
  {
    "url": "flutter/u12-flutter-web-02.html",
    "revision": "c8a58a374a7832f8b94adbf6d4a63c00"
  },
  {
    "url": "flutter/u13-sliverappbar.html",
    "revision": "1056a1d610c362bcb45c8538c0c5009e"
  },
  {
    "url": "flutter/u14-navbar-color.html",
    "revision": "b497785e805d170c23502c1482e43fc0"
  },
  {
    "url": "flutter/u15-custom-nabar.html",
    "revision": "bba924577d174b54c07a12243a57436f"
  },
  {
    "url": "haskell/1-install.html",
    "revision": "018850f648b966bd8b209382c00207ca"
  },
  {
    "url": "haskell/2-vscode.html",
    "revision": "b3c388bdda5e19d446f5002f0510cbd4"
  },
  {
    "url": "haskell/3-pktool.html",
    "revision": "3a5ba7b73553d08b128870b89f4aeb29"
  },
  {
    "url": "haskell/4-digui.html",
    "revision": "10fa21c471b4e2055f30a517327f76fa"
  },
  {
    "url": "haskell/index.html",
    "revision": "c990d56b3857474d719527f86bc6a0ad"
  },
  {
    "url": "index.html",
    "revision": "d2826db4d2aa699b77a718b5316f31ad"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "swift/fp/index.html",
    "revision": "d087f030172e55bf2881bbbbbe0a799e"
  },
  {
    "url": "swift/fp/t1-fp.html",
    "revision": "e9e33668957778f0a72885b5fa593a11"
  },
  {
    "url": "swift/fp/t2-lens.html",
    "revision": "87a92e3f046a4ae5d27291f9a438906c"
  },
  {
    "url": "swift/fp/t3-json1.html",
    "revision": "d28261d5a87d1661562a9fc6b03edfdf"
  },
  {
    "url": "swift/fp/t3-json2.html",
    "revision": "66b5c8b5d3f7600be5dc6c065fb093cf"
  },
  {
    "url": "swift/fp/t3-json3.html",
    "revision": "c6ff1e9ab91280e1c8cfafd6234794d6"
  },
  {
    "url": "swift/fp/t4-length.html",
    "revision": "2c48c6a1b6288ceb9f05a959d5a534e9"
  },
  {
    "url": "swift/ios/index.html",
    "revision": "0671c853088ed91e1f4a25c154b8345f"
  },
  {
    "url": "swift/ios/t1-pod-webp.html",
    "revision": "3bfa2816fe368cb9efc8f014cc7f38c9"
  },
  {
    "url": "swift/ios/t2-youhua.html",
    "revision": "7432a4cc5486f8be03c05899c1b640c9"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "e4fdcd1f8744b1b145c4cdda9c869bd8"
  },
  {
    "url": "swift/swiftui/t1-principle.html",
    "revision": "4fe0a949cbd6f6fa22748bc3cd35edb0"
  },
  {
    "url": "swift/swiftui/t1.0-propertywrapper.html",
    "revision": "28e98248cb1993ad5b6c14d38db48113"
  },
  {
    "url": "swift/swiftui/t1.1-functionBuilder.html",
    "revision": "b7b83ebc322fce08c6771c03307379ae"
  },
  {
    "url": "swift/swiftui/t1.2-propertys.html",
    "revision": "1f4dbe9aab40d77bbd7512f1b973fcda"
  },
  {
    "url": "swift/swiftui/t2-views_control.html",
    "revision": "d4b21b3cc43f3566ac6daedaeb3e5b8e"
  },
  {
    "url": "swift/swiftui/t3-layout_presentation.html",
    "revision": "fb247ab4734b18db1d29f762f36f21dc"
  },
  {
    "url": "swift/swiftui/t4-uikit_in_swiftui.html",
    "revision": "082c6e77b47fd1e6bf59d07bcfbbb85b"
  },
  {
    "url": "swift/swiftui/t5-swiftui_in_uikit.html",
    "revision": "7cbfba653a277c74ca1f8cc9ab12f379"
  },
  {
    "url": "swift/swiftui/t6-viewmodifier.html",
    "revision": "24ba667228260b1cb2d9bec18c8777f7"
  },
  {
    "url": "swift/swiftui/t7-geometryreader.html",
    "revision": "df82a64ec4dda1d0d9b87747cdcf7131"
  },
  {
    "url": "swift/swiftui/t8-preferencekey.html",
    "revision": "7900d8b7e0590f1a2e45fc01b1fb32d7"
  },
  {
    "url": "swift/tips/index.html",
    "revision": "b387dc0dff0423263b92054bc72ddc92"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "513ff687b0d25794e6b313fa63e37b28"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "dbf43bdd0151da4d100b3282a1355544"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "e75334d20002d837257e9dfe07e9f3f1"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "82a87ff13dcfc11825cd8c2b21136f00"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "9b2226dced4fe741e217339c644c2a05"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "e733e8665e93e885ddd794fc19de1557"
  },
  {
    "url": "swift/vapor/t6-say-oldbirds.html",
    "revision": "cabfaf7547903579938d37bb724605c3"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "134c984af6bc5707a433b140ec55e37a"
  },
  {
    "url": "swift/vapor/u-11-auth.html",
    "revision": "761538b75e2a6594a80c678672340e55"
  },
  {
    "url": "swift/vapor/u-12-permission.html",
    "revision": "da7565d8e5a68de66f48712891d55eb7"
  },
  {
    "url": "swift/vapor/v-20-read-code.html",
    "revision": "215bd6b54ed0761fa6e07a12c5db1814"
  },
  {
    "url": "swift/vapor/v-21-io.html",
    "revision": "fc1bc13df1fffa148b51bee6cb05225e"
  },
  {
    "url": "swift/vapor/v-22-bio2.html",
    "revision": "d313e5f7a332702d073baeca9e4fbaa8"
  },
  {
    "url": "swift/vapor/v-23-swiftnio-do-text.html",
    "revision": "5f6551de7dc8bcc189fbe608fb908e21"
  },
  {
    "url": "swift/vapor/v-24-swift-zhan-package.html",
    "revision": "592148e7670abbacdfb442b11dba3a0a"
  },
  {
    "url": "swift/vapor/v-25-swiftnio-do-serisize.html",
    "revision": "57d66c36ee046053e453a655fb6be80e"
  },
  {
    "url": "swift/vapor/v-26-swfitnio-grpc-1.html",
    "revision": "73f6ad64ba7c13ef9261115362671d8e"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/ai/index.html",
    "revision": "eed1ed2ac12c7847efe8b5e5e21fa40e"
  },
  {
    "url": "tag/flutter/index.html",
    "revision": "f9bdf583b7c13d4955e324ed7cbdf731"
  },
  {
    "url": "tag/flutter/page/2/index.html",
    "revision": "29c331de7a39c262e489a763f88538a6"
  },
  {
    "url": "tag/git/index.html",
    "revision": "4d01878c6b516d3cde4e78c04e47017c"
  },
  {
    "url": "tag/haskell/index.html",
    "revision": "f059f9697e775b3fd56c8006c0fbb6f8"
  },
  {
    "url": "tag/html/index.html",
    "revision": "ac323729ae3069dcaba0489c8950d257"
  },
  {
    "url": "tag/index.html",
    "revision": "d00b054a6c6709fa16d43e64fcc99d75"
  },
  {
    "url": "tag/ios/index.html",
    "revision": "f694a1083612a3c8adb55ed97d7d0c2a"
  },
  {
    "url": "tag/json/index.html",
    "revision": "f7062d53784c81833a19f8d0a8ee90da"
  },
  {
    "url": "tag/plantuml/index.html",
    "revision": "23512ed6138a90d486639335cbed5668"
  },
  {
    "url": "tag/swift/index.html",
    "revision": "6f65cd462f3787e0a2c92bdc3e14898e"
  },
  {
    "url": "tag/swift/page/2/index.html",
    "revision": "74fee96a2c899ad82710d251245a660f"
  },
  {
    "url": "tag/swift/page/3/index.html",
    "revision": "33f53984c6e58553815d980edb10e57e"
  },
  {
    "url": "tag/swift/page/4/index.html",
    "revision": "0c9f718818c7f9239254416143c3f5a2"
  },
  {
    "url": "tag/swiftnio/index.html",
    "revision": "6fdd45fd557f6380d4e08108e7a2063e"
  },
  {
    "url": "tag/swiftui/index.html",
    "revision": "d28ab532ed41579e8320e961f097e069"
  },
  {
    "url": "tag/swiftui/page/2/index.html",
    "revision": "a1412e205f31fa22fa4d101a0b116353"
  },
  {
    "url": "tag/tips/index.html",
    "revision": "52fea6455f4c0e326fd1b9d088b63431"
  },
  {
    "url": "tag/tools/index.html",
    "revision": "36bb4f81bcc9e8c8e9d4df225af1d0ac"
  },
  {
    "url": "tag/vapor/index.html",
    "revision": "7b1744ddd7695f91e5d01702b65865a7"
  },
  {
    "url": "tag/vapor/page/2/index.html",
    "revision": "b1e1f3e7d41cb31c4e28fee9bb79ec3e"
  },
  {
    "url": "tag/vscode/index.html",
    "revision": "81a58a4be8b331304382344c961cd122"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "045f320e2bd218a0bd9c2caf5f12a398"
  },
  {
    "url": "tag/yaml/index.html",
    "revision": "51e7cc59ae96b63d25de09fbc14d9bac"
  },
  {
    "url": "tag/书单/index.html",
    "revision": "8782e0f1f265731314fb1fddb576e02e"
  },
  {
    "url": "tag/函数式编程/index.html",
    "revision": "f5a34413d3812839b1aa880b413531ca"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "250bd7839d6a09ef7fdea1d6b6b73bb1"
  },
  {
    "url": "tag/基础/page/2/index.html",
    "revision": "d89546e0bbc3af126eb712239f8e3851"
  },
  {
    "url": "tag/基础/page/3/index.html",
    "revision": "63f1e41bb5948fa1d61d99a1a9552c44"
  },
  {
    "url": "tag/基础/page/4/index.html",
    "revision": "e24134db34af039692edbb152a31075d"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "84708f71a781af2877d1fb5a705df7f0"
  },
  {
    "url": "tag/数据结构与算法/page/2/index.html",
    "revision": "5c0344419517484d9d9a34e3d4833629"
  },
  {
    "url": "tag/设计模式/index.html",
    "revision": "a371ef069036638c75402b7011847062"
  },
  {
    "url": "tag/设计模式/page/2/index.html",
    "revision": "3cb8221f1b5fc7b0d7dbd615b7f7330e"
  },
  {
    "url": "tag/设计模式/page/3/index.html",
    "revision": "b63f3d815372ed5820386aefbd83327e"
  },
  {
    "url": "timeline/index.html",
    "revision": "c447d8e0316d1e2affc4e7ce5918f550"
  },
  {
    "url": "tools/git/index.html",
    "revision": "9a67698ed15eb8d0f9c93e30721ede2b"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "9c38c37cfacfe3ee146d6cea2e5f32f3"
  },
  {
    "url": "tools/git/t2-git-submodule.html",
    "revision": "e408cb80be90be7a6456112bcc0bf188"
  },
  {
    "url": "tools/html/index.html",
    "revision": "42c67166fe635a6b16a66b154d74a0d4"
  },
  {
    "url": "tools/plantuml/index.html",
    "revision": "70f481df0bb95152c3506df9a7e36305"
  },
  {
    "url": "tools/plantuml/t1-sequence-diagram.html",
    "revision": "4f907e0ae6b72b3a273b144e962c1031"
  },
  {
    "url": "tools/plantuml/t2-class-diagram.html",
    "revision": "d3afd419ca458eaf04da6a943575ad33"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "8060cb60374ba820574e562347a8c527"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "eabbb9f07048db897730c8ff9c148bb4"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "ae416969eed9618ca48b651e5a6af856"
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
