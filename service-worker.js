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
    "revision": "49210b96c9cb84b11f9992ac743b2d03"
  },
  {
    "url": "about/app/index.html",
    "revision": "fc19d92bb30ebec67ff36effaefdb86b"
  },
  {
    "url": "about/app/t1-protocol.html",
    "revision": "d19ec51337a25e34985d3e3583adba36"
  },
  {
    "url": "about/app/t2-secrect.html",
    "revision": "bcc2e04850ae495e7308e72b5edd8b08"
  },
  {
    "url": "about/app/t3-miniapps-sec.html",
    "revision": "ba18b36cc5c774213f0e5d9324fddc3d"
  },
  {
    "url": "about/index/index.html",
    "revision": "2ae075f2ff3f78dabe3cbb2e8b48a8e6"
  },
  {
    "url": "ai/index.html",
    "revision": "4e114997f16a7e3ff878fbdd79a39a0a"
  },
  {
    "url": "ai/t1-gzj.html",
    "revision": "b551915c284c478d21037343030140df"
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
    "url": "assets/js/100.71421aab.js",
    "revision": "763e2dc1ffde7a2d74d106b204a86d03"
  },
  {
    "url": "assets/js/101.2b413dd0.js",
    "revision": "6edd6f71d8b60619b6dd0b2a797b25e4"
  },
  {
    "url": "assets/js/102.7930ac2b.js",
    "revision": "f82588b3eb649429951b7339037c5941"
  },
  {
    "url": "assets/js/103.25e02d4f.js",
    "revision": "afaaac221404bfa9fd30633de275b77d"
  },
  {
    "url": "assets/js/104.811dd66e.js",
    "revision": "88a76b8a2e15cbe45db12d89106fe019"
  },
  {
    "url": "assets/js/105.8d0853b1.js",
    "revision": "a6bfc90398f0c1d88bd12c1701d53e5c"
  },
  {
    "url": "assets/js/106.7270569a.js",
    "revision": "ba6dc23294125e1dc8424dd0ac3083f1"
  },
  {
    "url": "assets/js/107.c3ded753.js",
    "revision": "fc08b734ccb8b8d31c3db019672cab54"
  },
  {
    "url": "assets/js/108.64a8112c.js",
    "revision": "189ce40aad64d9997dfe0a768b07600f"
  },
  {
    "url": "assets/js/109.9d0e9115.js",
    "revision": "012bd6a4331b85ba0230456c77777e4d"
  },
  {
    "url": "assets/js/11.9442356f.js",
    "revision": "c63fb51d0b73425258c3e851ce1dfd1f"
  },
  {
    "url": "assets/js/110.3625b125.js",
    "revision": "dc057da5ab22df1061fb1fc69bbe10de"
  },
  {
    "url": "assets/js/111.90ae6a6e.js",
    "revision": "6951eb9781eb35422f60de6eb048b7de"
  },
  {
    "url": "assets/js/112.0f3a0e3a.js",
    "revision": "7b8384b96c3bd3fdb62d47e03cadebf2"
  },
  {
    "url": "assets/js/113.1d812eb1.js",
    "revision": "5122200aafca9174c3d1974e9c09527a"
  },
  {
    "url": "assets/js/114.80a7cc44.js",
    "revision": "aca15127e2ed247ff487d7ccda8b67b1"
  },
  {
    "url": "assets/js/115.a56970fb.js",
    "revision": "b0adaf73e9007b062cfb9462d1eb41e0"
  },
  {
    "url": "assets/js/116.5b8c8acf.js",
    "revision": "3f06a63b785090f6d46c25c09195114d"
  },
  {
    "url": "assets/js/117.7df5947f.js",
    "revision": "74c9f481d17d3d7a54f449aa6013817f"
  },
  {
    "url": "assets/js/118.1f6c3259.js",
    "revision": "94db21cc3b30967d34107d789667c39a"
  },
  {
    "url": "assets/js/119.fde17293.js",
    "revision": "4f7fcbf340b816b3abd813f18bc47b96"
  },
  {
    "url": "assets/js/12.d44bf03c.js",
    "revision": "76f3c76aaa771c7caebcac89603c975c"
  },
  {
    "url": "assets/js/120.44c07ac1.js",
    "revision": "e9a9b44f212611749cd6de6102b93187"
  },
  {
    "url": "assets/js/121.90e612cb.js",
    "revision": "316cc0fa6c81a3cbe52364555ca57dcd"
  },
  {
    "url": "assets/js/122.7d2b3c78.js",
    "revision": "c8727ab46f2c33271181913ee1fc22d1"
  },
  {
    "url": "assets/js/123.4bf14d13.js",
    "revision": "20168c157fb5f818a5aa7baca25583c5"
  },
  {
    "url": "assets/js/124.f6ac7206.js",
    "revision": "a3f314d821bd5287504bd79ff8ac2ff5"
  },
  {
    "url": "assets/js/125.b09420a4.js",
    "revision": "044a40390c030a1c0110c9158728e24f"
  },
  {
    "url": "assets/js/126.3c21e3c5.js",
    "revision": "678a43b09939479b0d7e5439d8d1aa9d"
  },
  {
    "url": "assets/js/127.bb006445.js",
    "revision": "aafdf9d5c9596b553b404e82daea0262"
  },
  {
    "url": "assets/js/128.6dedd8b4.js",
    "revision": "f80a9cb6ac589f03f55b21f4a53ba062"
  },
  {
    "url": "assets/js/129.f8cfb7cf.js",
    "revision": "97ac90209c28df898f82d27004151f09"
  },
  {
    "url": "assets/js/13.37b4e409.js",
    "revision": "0d8dbf24d975daa148cd23cb73ac6d82"
  },
  {
    "url": "assets/js/130.4fd79463.js",
    "revision": "79e7a9f7470cdee2e3e4271153d44552"
  },
  {
    "url": "assets/js/131.de4b8b32.js",
    "revision": "67a0f06467f59ebf87b2e33ee341c8b4"
  },
  {
    "url": "assets/js/132.34c44726.js",
    "revision": "3dc48a43da0f1e80a822d91de4cff5d7"
  },
  {
    "url": "assets/js/133.3d4c9832.js",
    "revision": "8782a0b948ada0711e61f9e4ae8147d2"
  },
  {
    "url": "assets/js/134.d5eeba51.js",
    "revision": "45c420eb1fafb4bb52b27260c0506200"
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
    "url": "assets/js/58.9d677014.js",
    "revision": "9fad01b40cb05d99badc8d883b3106e9"
  },
  {
    "url": "assets/js/59.99c2999e.js",
    "revision": "c8a233a307216453a051af45641dea23"
  },
  {
    "url": "assets/js/6.71f32179.js",
    "revision": "838d5273ad78002f558c07e7803eb84c"
  },
  {
    "url": "assets/js/60.63729d5b.js",
    "revision": "aa695a3705a48b8da3194d2b3ec65174"
  },
  {
    "url": "assets/js/61.98d52788.js",
    "revision": "c9b6eadc0efd12e33debb94bd9d5129f"
  },
  {
    "url": "assets/js/62.0ec3e2f0.js",
    "revision": "22f961ea955e15c2adfc2bf455f2e498"
  },
  {
    "url": "assets/js/63.f2df63cd.js",
    "revision": "bc72eebf1ae123dd83e553a01ef99714"
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
    "url": "assets/js/76.4b307603.js",
    "revision": "842d9c44ae5ff25908f9ecf9de0e972a"
  },
  {
    "url": "assets/js/77.7f69e2db.js",
    "revision": "fcf94266e92c459e031d2e8bfe1217ae"
  },
  {
    "url": "assets/js/78.f475980b.js",
    "revision": "0386735391b40286048d9788edcf6169"
  },
  {
    "url": "assets/js/79.893940f2.js",
    "revision": "7fa0df1ffba0b6eeb30b13270fa9a0f2"
  },
  {
    "url": "assets/js/8.ef31f639.js",
    "revision": "f18ea98bf9111006aa63fbd3b75de756"
  },
  {
    "url": "assets/js/80.1cd41fc2.js",
    "revision": "8d7bcb581790d6543bd30d856c50ba86"
  },
  {
    "url": "assets/js/81.46d82a19.js",
    "revision": "4f7310c3695fc4c3e267b2d2cb353a75"
  },
  {
    "url": "assets/js/82.dcb534d1.js",
    "revision": "707bdb3511f8f563b906388d4852213e"
  },
  {
    "url": "assets/js/83.6eb7e026.js",
    "revision": "4c543f976f0b5e8120fed5893fdb3398"
  },
  {
    "url": "assets/js/84.aafcc157.js",
    "revision": "7ff76e5c871428edd021b882a72c808a"
  },
  {
    "url": "assets/js/85.248f1eab.js",
    "revision": "6266bdc9b721c34d657933b952ace9af"
  },
  {
    "url": "assets/js/86.b53fecbc.js",
    "revision": "0554f3fe5daa1c77a2f62935e1433e35"
  },
  {
    "url": "assets/js/87.9021f30d.js",
    "revision": "13378d8fa9dd69c5c96fee4df6195360"
  },
  {
    "url": "assets/js/88.c7435a05.js",
    "revision": "ac3fdc54845c9cd032506aa93a8b6506"
  },
  {
    "url": "assets/js/89.6acd7a8e.js",
    "revision": "ae48636a41c6944a31b236b50b2c009b"
  },
  {
    "url": "assets/js/9.a390b6e1.js",
    "revision": "c02ccd4c7c0f6a69d76e473ca8625dd2"
  },
  {
    "url": "assets/js/90.cb13f3c1.js",
    "revision": "50bb727b6729d8918202f7b05d8770e4"
  },
  {
    "url": "assets/js/91.7167e89a.js",
    "revision": "5384f1af5e2ca7bc1c9f86bcf612ffee"
  },
  {
    "url": "assets/js/92.7bb4c266.js",
    "revision": "1ebef4975b0c1214d1f6e6fbd2fc8fae"
  },
  {
    "url": "assets/js/93.46a59dc7.js",
    "revision": "448c7b17b9ffe718aa719d525c80b864"
  },
  {
    "url": "assets/js/94.64889b71.js",
    "revision": "27fc3d83514f5a832819c5786d389ce5"
  },
  {
    "url": "assets/js/95.6c1f7d8e.js",
    "revision": "5b84bd5af5ae611a4db9e1e4ebf7f29c"
  },
  {
    "url": "assets/js/96.9bf7acaf.js",
    "revision": "b9f9d4b0b55d7ecfe462d22af6a02425"
  },
  {
    "url": "assets/js/97.b60a00b7.js",
    "revision": "387eb72b3510aeb3bad5c8d40e06c86c"
  },
  {
    "url": "assets/js/98.e4e8ce86.js",
    "revision": "2e769f6594640e2a63d9e5e3fb19b5e3"
  },
  {
    "url": "assets/js/99.fedac28b.js",
    "revision": "5c287a8e690a34eb5ae98230f68e68a9"
  },
  {
    "url": "assets/js/app.b41f94b2.js",
    "revision": "905162363ed40bdc495220b00f658ebf"
  },
  {
    "url": "author.jpeg",
    "revision": "7e1bfc6337e85b76f0f6e95859ed93d6"
  },
  {
    "url": "basis/algorithms/index.html",
    "revision": "994cfa9f406e88acb3919514be91c630"
  },
  {
    "url": "basis/algorithms/t1-buble-sort.html",
    "revision": "fc5df28ecd8e99aabfa18ab407438dbc"
  },
  {
    "url": "basis/algorithms/t2-selection-sort.html",
    "revision": "284854196f50cf740cb6dc0805a1d153"
  },
  {
    "url": "basis/algorithms/t3-insertion-sort.html",
    "revision": "b7aded41272f346784af94572efd4e9b"
  },
  {
    "url": "basis/algorithms/t4-shell-sort.html",
    "revision": "3bd23469029041710b346e4b0be238a2"
  },
  {
    "url": "basis/algorithms/t5-quick-sort.html",
    "revision": "1f310fc41556f4580a352617c9146d29"
  },
  {
    "url": "basis/algorithms/t6-heap-sort.html",
    "revision": "04618939fa7e3904ab0348e585145f12"
  },
  {
    "url": "basis/algorithms/t7-merge-sort.html",
    "revision": "e09c09d9f815a439ca918ceccee85fad"
  },
  {
    "url": "basis/algorithms/t8-radix-sort.html",
    "revision": "e0181cf96aa287df717cac4f4a74dab7"
  },
  {
    "url": "basis/algorithms/t9-count-sort.html",
    "revision": "f2c0b8f5c6cb1aa1c3ee5b1a09391bf6"
  },
  {
    "url": "basis/algorithms/u1-bucket-sort.html",
    "revision": "3606bcbf1589bf66beb9fbd5c057ee1d"
  },
  {
    "url": "basis/design/0. Class Releation.html",
    "revision": "d39e240528122d10dd90080f90e12ba4"
  },
  {
    "url": "basis/design/0.1 Design Principles.html",
    "revision": "a584898b6a24a2a0f9c14861b9a66be5"
  },
  {
    "url": "basis/design/1. Factory Pattern.html",
    "revision": "898be60868a73684bfd4e27ea4d0b01c"
  },
  {
    "url": "basis/design/10. Facade Pattern.html",
    "revision": "b4a2a1747914c37fbac18eea89e73544"
  },
  {
    "url": "basis/design/11. Flyweight Pattern.html",
    "revision": "37ebe275fa72ad86535cc7fd6c54c9e3"
  },
  {
    "url": "basis/design/12. Proxy Pattern.html",
    "revision": "dd07c73bb42345d14365ded97128cddc"
  },
  {
    "url": "basis/design/13. Chain of Responsibility Pattern.html",
    "revision": "640fc80ea1c176139699827a80cd6bb5"
  },
  {
    "url": "basis/design/14. Command Pattern.html",
    "revision": "701783f187b3fa4e164a0d76484d4d14"
  },
  {
    "url": "basis/design/15. Interpreter Pattern.html",
    "revision": "66a0d700a0454750fa2d6cb8945b6fcc"
  },
  {
    "url": "basis/design/16. Iterator Pattern.html",
    "revision": "be0e1e48f9b2f72e57ec5dae40a33a22"
  },
  {
    "url": "basis/design/17. Mediator Pattern.html",
    "revision": "d788cc2a5ddfc4b01bfac181c0f95406"
  },
  {
    "url": "basis/design/18. Memento Pattern.html",
    "revision": "7316dc43cf3146be5eb735f67cef1647"
  },
  {
    "url": "basis/design/19. Observer Pattern.html",
    "revision": "8a5586504044f4c8536b76df93d1093b"
  },
  {
    "url": "basis/design/2. Builder Pattern.html",
    "revision": "7669d666d896f848a5b4b48a68e37934"
  },
  {
    "url": "basis/design/20. State Pattern.html",
    "revision": "c013110b28fc8e5aedb3eecd2f1f6406"
  },
  {
    "url": "basis/design/21. Null Object Pattern.html",
    "revision": "2a4dc242453a0d98a0b2e9cbc29163d5"
  },
  {
    "url": "basis/design/22. Strategy Pattern.html",
    "revision": "20d9101c661738a250bfabef01a1212a"
  },
  {
    "url": "basis/design/23. Template Pattern.html",
    "revision": "b4add27b6107475b6a0063883acdff4f"
  },
  {
    "url": "basis/design/24. Visitor Pattern.html",
    "revision": "a4b0510d6f68b9515394d96fa2cbba9e"
  },
  {
    "url": "basis/design/3. Prototype Pattern.html",
    "revision": "3a08887374646ea04964ce0f5a5d6c13"
  },
  {
    "url": "basis/design/4.Singleton Pattern.html",
    "revision": "dd6800860bec29fcb84e154f1e572d55"
  },
  {
    "url": "basis/design/5. Adapter Pattern.html",
    "revision": "7000d88d8ba0f8886ae3be35804bfeee"
  },
  {
    "url": "basis/design/6. Bridge Pattern.html",
    "revision": "400f6d91b1c9486ea6bc1b1161b090a0"
  },
  {
    "url": "basis/design/7. Filter、Criteria Pattern.html",
    "revision": "274f16c2e1bd6fd156ef51f163daa5df"
  },
  {
    "url": "basis/design/8. Composite Pattern.html",
    "revision": "37fa4afb1d759e85c69d56e06d2320d0"
  },
  {
    "url": "basis/design/9. Decorator Pattern.html",
    "revision": "447cd180a47b3ae6a8f610dfe4f1802f"
  },
  {
    "url": "basis/design/index.html",
    "revision": "c1ed7921ae799d85e5e298b2c684cf61"
  },
  {
    "url": "basis/index/index.html",
    "revision": "64f14a0cfee5b6440dfaa7c541a94092"
  },
  {
    "url": "basis/os/index.html",
    "revision": "c5ffc8460905028c5ef4ae11c1b9e260"
  },
  {
    "url": "book/index.html",
    "revision": "e5e1ddcace8ea419e752fed316c5774f"
  },
  {
    "url": "book/t-find-books.html",
    "revision": "a75cee1944853a37aa9d91417f7ea74a"
  },
  {
    "url": "categories/index.html",
    "revision": "a9906e74ab5180dbebea001e2a4f2ce7"
  },
  {
    "url": "figma/index.html",
    "revision": "a35d5226115fc7cdc856cc340c9606c6"
  },
  {
    "url": "flutter/index.html",
    "revision": "fe5c09039bd93403437bfe0d40a50d2c"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "d405e4733d517f67cf91cf00fd14a977"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "ce4366153376a2f04b6a1148a0b77f7e"
  },
  {
    "url": "flutter/t3-messages.html",
    "revision": "d21d6db5d8cc3423dc9429ae1ea86024"
  },
  {
    "url": "flutter/t3-mixin.html",
    "revision": "1b3e9643adcf7fc64fbf8a5560bd8320"
  },
  {
    "url": "flutter/t4-lifecycle.html",
    "revision": "7626c262e7575203fc626ee2880d9c8c"
  },
  {
    "url": "flutter/t5-flutter-web-deploy.html",
    "revision": "168bc7e12cc3b1ea2c0b7f3cfcc16b6c"
  },
  {
    "url": "flutter/t6-docker-web-deploy.html",
    "revision": "39193d679686ebed14b97bbbcfc3f272"
  },
  {
    "url": "flutter/t7-fvm.html",
    "revision": "349e0188c6d99b369621bf23f748bc01"
  },
  {
    "url": "flutter/t8-const.html",
    "revision": "01462fa7013f0e8179b9f4b200cca989"
  },
  {
    "url": "flutter/t9-logs.html",
    "revision": "47b1121198d9e6ebf6209c7546467258"
  },
  {
    "url": "flutter/u10-fvm-flutter2.html",
    "revision": "5fc04bd6627831f1da4f1f604e9c1ddc"
  },
  {
    "url": "flutter/u11-flutter-render.html",
    "revision": "0e2bafd3696588340e1eb3607372cd3a"
  },
  {
    "url": "flutter/u12-flutter-create-w.html",
    "revision": "1f11307a9fb7a7c125802dc4b46d9387"
  },
  {
    "url": "flutter/u12-flutter-web-01.html",
    "revision": "15bb8ff5bd8514e0b93ea0d777eb2b87"
  },
  {
    "url": "flutter/u12-flutter-web-02.html",
    "revision": "166aeaab53ff3703d73699da66061af0"
  },
  {
    "url": "flutter/u13-sliverappbar.html",
    "revision": "66bcb19ca170ae1770a07139b4124fde"
  },
  {
    "url": "haskell/1-install.html",
    "revision": "746156a6f62d233b0dc787ea38561b87"
  },
  {
    "url": "haskell/2-vscode.html",
    "revision": "f4d5f6b949f856bc6ed84b12d2d87029"
  },
  {
    "url": "haskell/3-pktool.html",
    "revision": "b17ad4fe0a3ca3ffea0088a8bbb7b60a"
  },
  {
    "url": "haskell/4-digui.html",
    "revision": "620af7ef365809124b466decd1327f01"
  },
  {
    "url": "haskell/index.html",
    "revision": "d656f9764cdd6be5d3afb55ed05f9f5f"
  },
  {
    "url": "index.html",
    "revision": "3e3b3d7ca94e3e44bc34f015507ac6c6"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "swift/fp/index.html",
    "revision": "a6f05bb1bef0659be61a6fee31451a1f"
  },
  {
    "url": "swift/fp/t1-fp.html",
    "revision": "402bb56cdb66f4a5d1b8a3ec775aaa02"
  },
  {
    "url": "swift/fp/t2-lens.html",
    "revision": "5ecebd31812c80f3fa9df8806cf04163"
  },
  {
    "url": "swift/fp/t3-json1.html",
    "revision": "93c290fc7c5eed660099cb713dc7cdf2"
  },
  {
    "url": "swift/fp/t3-json2.html",
    "revision": "bd0fef51aea1d01b7f0ab820f3b8b0a0"
  },
  {
    "url": "swift/fp/t3-json3.html",
    "revision": "04c4498ef5c5486cc4a97e4857944417"
  },
  {
    "url": "swift/fp/t4-length.html",
    "revision": "86b5f27a53b9ec1f5f7af7ee53d8f9fb"
  },
  {
    "url": "swift/ios/index.html",
    "revision": "0bbe5108cf0a6f932ded12251e3b4aa7"
  },
  {
    "url": "swift/ios/t1-pod-webp.html",
    "revision": "fe4cd1a25f74e8c9361087ca182abbba"
  },
  {
    "url": "swift/ios/t2-youhua.html",
    "revision": "587c21f81cc66454efb63297e1f7701e"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "8f769bee3ca84435aca393692ddd2917"
  },
  {
    "url": "swift/swiftui/t1-principle.html",
    "revision": "1f9ad911a0007f9f37506260bb5deda7"
  },
  {
    "url": "swift/swiftui/t1.0-propertywrapper.html",
    "revision": "7aeb12934622653834ecd71fe525f8ff"
  },
  {
    "url": "swift/swiftui/t1.1-functionBuilder.html",
    "revision": "4945263d46a4c8b388d1e25894738b75"
  },
  {
    "url": "swift/swiftui/t1.2-propertys.html",
    "revision": "eda5e9b7facd982e63db69b6d50546ed"
  },
  {
    "url": "swift/swiftui/t2-views_control.html",
    "revision": "4d73985c8ac249d8e2a5a0c5ef70eeba"
  },
  {
    "url": "swift/swiftui/t3-layout_presentation.html",
    "revision": "aeb6bcf7335bfc0337c1fb3a52297ae5"
  },
  {
    "url": "swift/swiftui/t4-uikit_in_swiftui.html",
    "revision": "4d927208abf594d96bb24875c05a7d23"
  },
  {
    "url": "swift/swiftui/t5-swiftui_in_uikit.html",
    "revision": "ad03ccb1a7329817ab7e7825f50dc607"
  },
  {
    "url": "swift/swiftui/t6-viewmodifier.html",
    "revision": "c27f5b71c177ee457231def7127a92e9"
  },
  {
    "url": "swift/swiftui/t7-geometryreader.html",
    "revision": "fecdbcda43b9befa9c265de722e3c48e"
  },
  {
    "url": "swift/swiftui/t8-preferencekey.html",
    "revision": "61d7ff11d47263de71f428cd747324df"
  },
  {
    "url": "swift/tips/index.html",
    "revision": "fd8eb68dc0189c76a71fe21644e266bb"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "ef82e4f8064fb56780a96242befcac51"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "5f296196775c7049c44da65ca65ee4ba"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "d01e3fd0a944e11e43daa3f46629fc9b"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "69123e8c692e9e64ca672a661a5ec5bb"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "bff7d505f8c04f8fca488db09cae5a6c"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "c46b117f4dc057ee27c225d8e15d9eeb"
  },
  {
    "url": "swift/vapor/t6-say-oldbirds.html",
    "revision": "99da5fd83d8c1fb9fc197fd3336048e0"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "277d0e191ba00f63eb6cee517aad0d35"
  },
  {
    "url": "swift/vapor/u-11-auth.html",
    "revision": "b452b5e1c81cc8f6534da4273522fe47"
  },
  {
    "url": "swift/vapor/u-12-permission.html",
    "revision": "e4f47709fc0a4f0c92ee1cf7c41aee22"
  },
  {
    "url": "swift/vapor/v-20-read-code.html",
    "revision": "68699b7a424a496fa0be78f35ec948c7"
  },
  {
    "url": "swift/vapor/v-21-io.html",
    "revision": "2caf340bb5f03ccbdb02c831c3988135"
  },
  {
    "url": "swift/vapor/v-22-bio2.html",
    "revision": "c2115376d4573955630a8cf3ab8febc5"
  },
  {
    "url": "swift/vapor/v-23-swiftnio-do-text.html",
    "revision": "69c0fd793624e762c31bd06bf601009c"
  },
  {
    "url": "swift/vapor/v-24-swift-zhan-package.html",
    "revision": "ad66b7a48b7a8fd30f18bb613f929fe8"
  },
  {
    "url": "swift/vapor/v-25-swiftnio-do-serisize.html",
    "revision": "ec8a2da775849f21f35d9ea2b32c5322"
  },
  {
    "url": "swift/vapor/v-26-swfitnio-grpc-1.html",
    "revision": "c1ddff925a2a58c4d1e50c4cf31317ed"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/ai/index.html",
    "revision": "df7b59886a5593aac1ba9989c36b1633"
  },
  {
    "url": "tag/flutter/index.html",
    "revision": "00e51804ad31ef9570239fd8a170b217"
  },
  {
    "url": "tag/flutter/page/2/index.html",
    "revision": "50f3dc04f8c287e5ab8c6151e961c1f4"
  },
  {
    "url": "tag/git/index.html",
    "revision": "49b43a16cd5451b48a00d1f7faff3b9e"
  },
  {
    "url": "tag/haskell/index.html",
    "revision": "162f4cfb546c929ef3298eed0492d5b8"
  },
  {
    "url": "tag/html/index.html",
    "revision": "edde5f9b27058cf2c18ca985dbb853a5"
  },
  {
    "url": "tag/index.html",
    "revision": "172772f08a2993f7f184b2eb1592b2fd"
  },
  {
    "url": "tag/ios/index.html",
    "revision": "a4e04ea29ff7fd7b66f5f182a4325690"
  },
  {
    "url": "tag/json/index.html",
    "revision": "e7d3d04ef6708dfca029bf1c1284e1b5"
  },
  {
    "url": "tag/plantuml/index.html",
    "revision": "4dbc8f8ca4314fd042080ac64a9a50ca"
  },
  {
    "url": "tag/swift/index.html",
    "revision": "16729faa92108cd138480e630d8f7e90"
  },
  {
    "url": "tag/swift/page/2/index.html",
    "revision": "e23a78f597ae13b0c38bf7a0494ff9ba"
  },
  {
    "url": "tag/swift/page/3/index.html",
    "revision": "fdd3ce426876724acd01ae1cc113235c"
  },
  {
    "url": "tag/swift/page/4/index.html",
    "revision": "acf356c64798ffa21f7a8b3f78fe4865"
  },
  {
    "url": "tag/swiftnio/index.html",
    "revision": "429751c4f31228c5322a42a8950067ae"
  },
  {
    "url": "tag/swiftui/index.html",
    "revision": "b2b0aced34f1ac22f326b3217271924f"
  },
  {
    "url": "tag/swiftui/page/2/index.html",
    "revision": "bdf11c8b7236272af4c371818498440d"
  },
  {
    "url": "tag/tips/index.html",
    "revision": "dca36bb21558fbba129efc395e056990"
  },
  {
    "url": "tag/tools/index.html",
    "revision": "8df5119e223df28653fece58678f2333"
  },
  {
    "url": "tag/vapor/index.html",
    "revision": "1c0d09de44a45ffa9d5886b76394023b"
  },
  {
    "url": "tag/vapor/page/2/index.html",
    "revision": "59fee68f93787a9d1708f96ca5277825"
  },
  {
    "url": "tag/vscode/index.html",
    "revision": "a00c08b34eb775144819fd801307a423"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "13da911c5bf720c26c82fa95f95b04b8"
  },
  {
    "url": "tag/yaml/index.html",
    "revision": "b17121c4ce8d1c33a5187da4d95f5f8c"
  },
  {
    "url": "tag/书单/index.html",
    "revision": "ea7cf5f348b22cb31aa59dccce85c9a7"
  },
  {
    "url": "tag/函数式编程/index.html",
    "revision": "1a96ea83c92b3f3cb944bef3c7d56965"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "0f77ed31813a30d1b700a5ce94c2a75c"
  },
  {
    "url": "tag/基础/page/2/index.html",
    "revision": "c0ed284e0404ad6e3997d034f6498ca8"
  },
  {
    "url": "tag/基础/page/3/index.html",
    "revision": "6f8915a0738680708258f99d587f08f3"
  },
  {
    "url": "tag/基础/page/4/index.html",
    "revision": "9f0dc491eb64318329ea1d604f508917"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "0ca19966e5ed58b25c9aa8caefe13986"
  },
  {
    "url": "tag/数据结构与算法/page/2/index.html",
    "revision": "2291223f550ff31cd0dd3388b8560da4"
  },
  {
    "url": "tag/设计模式/index.html",
    "revision": "d46c697d9162a1e6d4fb965d7bcc4ecc"
  },
  {
    "url": "tag/设计模式/page/2/index.html",
    "revision": "c6094320aabe7e77e03b91f5c1194ddb"
  },
  {
    "url": "tag/设计模式/page/3/index.html",
    "revision": "1790aa2ca74e5d6fb92e274392bfd447"
  },
  {
    "url": "timeline/index.html",
    "revision": "716ee4a68e0dd0c748e543b49efb4e00"
  },
  {
    "url": "tools/git/index.html",
    "revision": "2919734cbd61a5ab251a08ba111a88a2"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "e29fb2299dce4bb715b5e42db2ee30ae"
  },
  {
    "url": "tools/git/t2-git-submodule.html",
    "revision": "91ebf7d40c22d87cd5ef232fa15f3147"
  },
  {
    "url": "tools/html/index.html",
    "revision": "3f00ea4040bc7031354682ff698d45b3"
  },
  {
    "url": "tools/plantuml/index.html",
    "revision": "0d4cdaa2400b50a729397f3c01e73bdb"
  },
  {
    "url": "tools/plantuml/t1-sequence-diagram.html",
    "revision": "1b37670f51d99bab2940a9e036e02258"
  },
  {
    "url": "tools/plantuml/t2-class-diagram.html",
    "revision": "4e327f7705a8994c833502509c76529c"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "853566f1000e80f92884700d369eb562"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "5f7fbbe95d46c704b943de9e924f44e1"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "1337d3b1f4a8fb57eb96c09957699b9c"
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
