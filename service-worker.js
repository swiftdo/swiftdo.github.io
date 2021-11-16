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
    "revision": "36c25a7ba8ea5e94454d353e3b3ddc86"
  },
  {
    "url": "about/app/index.html",
    "revision": "054aa8fff0fd893b6eb31fd90bd51b37"
  },
  {
    "url": "about/app/t1-protocol.html",
    "revision": "8491933224bc4101496cd406fa9b82d8"
  },
  {
    "url": "about/app/t2-secrect.html",
    "revision": "3c31667d8f7e211a396610e8ff4490ad"
  },
  {
    "url": "about/app/t3-miniapps-sec.html",
    "revision": "dda55415836083cff860ae8fadf1532b"
  },
  {
    "url": "about/index/index.html",
    "revision": "1488fc9dda502ad2888229bb2ef97b5c"
  },
  {
    "url": "ai/index.html",
    "revision": "5895982caf0bc115dd0180ce413d4706"
  },
  {
    "url": "ai/t1-gzj.html",
    "revision": "1cee544776246e3fb0286ba8606b179e"
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
    "url": "assets/js/100.cc09c197.js",
    "revision": "1cf16c247aa0fff2d4642227ca30a5d3"
  },
  {
    "url": "assets/js/101.813251d0.js",
    "revision": "ec12f8ba2a5db82df4ab5c9b93881d56"
  },
  {
    "url": "assets/js/102.4b97da1d.js",
    "revision": "56b7496406930abdfbff959fad852670"
  },
  {
    "url": "assets/js/103.7b477dbe.js",
    "revision": "fd7bdcad84fd30aef1d7654a2ae0982f"
  },
  {
    "url": "assets/js/104.9801012d.js",
    "revision": "c34d25b13fba647ab5dc244fbbc2dd77"
  },
  {
    "url": "assets/js/105.13131d9c.js",
    "revision": "279e957a99eff046f9943fa5041d3b3d"
  },
  {
    "url": "assets/js/106.11a8849b.js",
    "revision": "a99786510f47e3223a01bacdbe08b3c1"
  },
  {
    "url": "assets/js/107.23e6c914.js",
    "revision": "3d1f49517d72e7e581dac311a98274bb"
  },
  {
    "url": "assets/js/108.28af4480.js",
    "revision": "e61245e810d05c8c41c6a17e41281ae2"
  },
  {
    "url": "assets/js/109.d48f5265.js",
    "revision": "556de2f55252c048211de90f0c4301af"
  },
  {
    "url": "assets/js/11.9442356f.js",
    "revision": "c63fb51d0b73425258c3e851ce1dfd1f"
  },
  {
    "url": "assets/js/110.d232af11.js",
    "revision": "7ca9e068d6b9043558e0acda274aad57"
  },
  {
    "url": "assets/js/111.ed127477.js",
    "revision": "0453686de86ada78ea07f90565b871d8"
  },
  {
    "url": "assets/js/112.1ac27594.js",
    "revision": "d683657f0363e978a62e0bae9a8f4f87"
  },
  {
    "url": "assets/js/113.dfc9e628.js",
    "revision": "693c35ab4534b5664ce4354d9b490ef2"
  },
  {
    "url": "assets/js/114.3cbe0f0d.js",
    "revision": "0df9c31c45d54900b54e1849e69929b1"
  },
  {
    "url": "assets/js/115.6014af9f.js",
    "revision": "f56c3edca245484fc99865c694ec5f2f"
  },
  {
    "url": "assets/js/116.b0c78fc7.js",
    "revision": "224cd1e270596e9c9b93743b7f995fc3"
  },
  {
    "url": "assets/js/117.b661aa73.js",
    "revision": "a47cd056b49e21236342de02b4f27852"
  },
  {
    "url": "assets/js/118.2a5c01c3.js",
    "revision": "cc49f7bbaedebabebc6c0133873bae1c"
  },
  {
    "url": "assets/js/119.dd8bd832.js",
    "revision": "b523293d9a048a6296a68c21c65ce8cf"
  },
  {
    "url": "assets/js/12.d44bf03c.js",
    "revision": "76f3c76aaa771c7caebcac89603c975c"
  },
  {
    "url": "assets/js/120.d0ef744c.js",
    "revision": "bcd1c305e518d1fb9fa05ccc475a9c06"
  },
  {
    "url": "assets/js/121.e3ddfc24.js",
    "revision": "a5bb2229af6da5c4c1dc4f929b6fd098"
  },
  {
    "url": "assets/js/122.cd7707ca.js",
    "revision": "5630bb440b3c38062c25991449f6047a"
  },
  {
    "url": "assets/js/123.9f2964eb.js",
    "revision": "42844152c3681bcf34fc780485126247"
  },
  {
    "url": "assets/js/124.51b713ae.js",
    "revision": "160f407c683210e22f535d2accf87955"
  },
  {
    "url": "assets/js/125.6c8b3221.js",
    "revision": "8c2c4c09b480f7e589a1fe40bb7bbfff"
  },
  {
    "url": "assets/js/126.b992a4b2.js",
    "revision": "82d6ae6aaae89babe10d4d5729757a5c"
  },
  {
    "url": "assets/js/127.6a4e9699.js",
    "revision": "e4a951d41af9ace6c64629695484a01e"
  },
  {
    "url": "assets/js/128.e9c68632.js",
    "revision": "375e1145bde6f0794027638c04bf94ae"
  },
  {
    "url": "assets/js/129.d87709d0.js",
    "revision": "3457b5614f0dd3ae80b9ecd2e0468421"
  },
  {
    "url": "assets/js/13.37b4e409.js",
    "revision": "0d8dbf24d975daa148cd23cb73ac6d82"
  },
  {
    "url": "assets/js/130.9eaefae8.js",
    "revision": "231b88b44303c292e04df64b6b9ea73e"
  },
  {
    "url": "assets/js/131.dd1f63d3.js",
    "revision": "dec42c0e0c341af2304f2e6001782985"
  },
  {
    "url": "assets/js/132.17069144.js",
    "revision": "fb8a515d19d3085931f955b1bf87edd2"
  },
  {
    "url": "assets/js/133.68a38aa6.js",
    "revision": "9a9fc8aa3d12350de38d8a20e2e6dd89"
  },
  {
    "url": "assets/js/134.bbe25461.js",
    "revision": "1451d876dc4d38127c2970606b3e1a1a"
  },
  {
    "url": "assets/js/135.57f70841.js",
    "revision": "f67c2586dad1787ca9a0dc2c9a5bb79f"
  },
  {
    "url": "assets/js/136.4d2be919.js",
    "revision": "6f5d0c87bb9f4afe50b689075468d4b2"
  },
  {
    "url": "assets/js/137.c520c8fb.js",
    "revision": "f457a85a9c7b2f11d189794329d9d4b0"
  },
  {
    "url": "assets/js/138.2027ff42.js",
    "revision": "c3115b9da43462540c69a9ac44426d7e"
  },
  {
    "url": "assets/js/139.ad764bfc.js",
    "revision": "cfd44d007775597af2d1b199d78dc454"
  },
  {
    "url": "assets/js/14.bbb770b8.js",
    "revision": "65f0f77d3ecf5bb7f3b0ee62d6596a1c"
  },
  {
    "url": "assets/js/140.651e05e6.js",
    "revision": "ae7c2f289e666095515f73d62c428605"
  },
  {
    "url": "assets/js/141.aae2b42d.js",
    "revision": "4586639d34bf5aef836c253ba66636d6"
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
    "url": "assets/js/58.68374de6.js",
    "revision": "fe76387f8e4f51e669f70738395c43d8"
  },
  {
    "url": "assets/js/59.a92e772d.js",
    "revision": "7474f7dbfac1077688639f578aae9b86"
  },
  {
    "url": "assets/js/6.71f32179.js",
    "revision": "838d5273ad78002f558c07e7803eb84c"
  },
  {
    "url": "assets/js/60.ecbb43c5.js",
    "revision": "35dbebda7b883e60c2da5f7ad69c4c58"
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
    "url": "assets/js/63.786c15d0.js",
    "revision": "44a6b8e8b44324a895226c3b50d327c5"
  },
  {
    "url": "assets/js/64.fa26b27a.js",
    "revision": "3f4a6b532d48996a7b89c9110cd1bdbb"
  },
  {
    "url": "assets/js/65.fd4dc2d1.js",
    "revision": "1aa4e56d985773e6ad39392c7464b18b"
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
    "url": "assets/js/86.8445385a.js",
    "revision": "2a1163b58097397d619c9a682ed35421"
  },
  {
    "url": "assets/js/87.d5d1e4f0.js",
    "revision": "5eb63b58f6f6f44074c18162d23bfdaf"
  },
  {
    "url": "assets/js/88.daf468fa.js",
    "revision": "537b5bb6d789086da2fa4e0e64bd44b1"
  },
  {
    "url": "assets/js/89.38da7bda.js",
    "revision": "34376cf4e669f050dc4bff1eda4d3adc"
  },
  {
    "url": "assets/js/9.2b41f593.js",
    "revision": "33b2874cb0e9649472a3d988961998b7"
  },
  {
    "url": "assets/js/90.5243209d.js",
    "revision": "41046898d8333a4284c912241aa7177a"
  },
  {
    "url": "assets/js/91.fbffa754.js",
    "revision": "40fcd72bb3daf0b3e7a7ccf467996490"
  },
  {
    "url": "assets/js/92.08c7e951.js",
    "revision": "629a3084955e49e5a3547cb5951fd3f5"
  },
  {
    "url": "assets/js/93.1522c1f1.js",
    "revision": "c6f7ed9d92c146ac30fcec075e3d2a47"
  },
  {
    "url": "assets/js/94.43a47e91.js",
    "revision": "e6aedb1b2cda30db9801d9b2f3461923"
  },
  {
    "url": "assets/js/95.92aba2b0.js",
    "revision": "72e1f94adef6ef7cc23d2b72946e33b0"
  },
  {
    "url": "assets/js/96.54080c6c.js",
    "revision": "5a9b20378661c7187c77f8e0886de274"
  },
  {
    "url": "assets/js/97.decf9db1.js",
    "revision": "358e188ddf5a6bd1efa1ba8d040dc5e9"
  },
  {
    "url": "assets/js/98.31b3978c.js",
    "revision": "e0cbe3f7bef8b4847f6195bd2883a68b"
  },
  {
    "url": "assets/js/99.8f58f9be.js",
    "revision": "bd7fd392e4ca10c36b43b802326f4b6a"
  },
  {
    "url": "assets/js/app.0cb52299.js",
    "revision": "f8f0875f3bb8fc5edabbf50399f5d21b"
  },
  {
    "url": "author.jpeg",
    "revision": "7e1bfc6337e85b76f0f6e95859ed93d6"
  },
  {
    "url": "basis/algorithms/index.html",
    "revision": "0682bd45daee7d023603f7981f449089"
  },
  {
    "url": "basis/algorithms/t1-buble-sort.html",
    "revision": "3fb1475a289c010354a7ae0f43db2788"
  },
  {
    "url": "basis/algorithms/t2-selection-sort.html",
    "revision": "9e8cffed79e743f1f53dbbdfa617dfa3"
  },
  {
    "url": "basis/algorithms/t3-insertion-sort.html",
    "revision": "40492a756062602f2c90bb283a407744"
  },
  {
    "url": "basis/algorithms/t4-shell-sort.html",
    "revision": "4083fe6058ce44adc66e09bcb6a981a2"
  },
  {
    "url": "basis/algorithms/t5-quick-sort.html",
    "revision": "533b3f59fd03a7b9112810f7043aaf78"
  },
  {
    "url": "basis/algorithms/t6-heap-sort.html",
    "revision": "3e957a89a753de1afb9cf4fa257e9489"
  },
  {
    "url": "basis/algorithms/t7-merge-sort.html",
    "revision": "2d6b7dbe6ae1051d50aa3838e682ca7d"
  },
  {
    "url": "basis/algorithms/t8-radix-sort.html",
    "revision": "782d812cdfcad9f666db4aa1b3ef0143"
  },
  {
    "url": "basis/algorithms/t9-count-sort.html",
    "revision": "ccc16eb853cc1ad67c450a502bf40362"
  },
  {
    "url": "basis/algorithms/u1-bucket-sort.html",
    "revision": "87e0c1521ba186b9b9107145f8941160"
  },
  {
    "url": "basis/design/0. Class Releation.html",
    "revision": "fc3dd3bc311fec90163cb966cd01b816"
  },
  {
    "url": "basis/design/0.1 Design Principles.html",
    "revision": "54b8bf590b6600c27c3271553119df1d"
  },
  {
    "url": "basis/design/1. Factory Pattern.html",
    "revision": "72ceff112de6070435cecb1e6ab88f13"
  },
  {
    "url": "basis/design/10. Facade Pattern.html",
    "revision": "e23d124cfd6a275a533207e54a318a71"
  },
  {
    "url": "basis/design/11. Flyweight Pattern.html",
    "revision": "d49a95fb2a3676d00f92ead06b240104"
  },
  {
    "url": "basis/design/12. Proxy Pattern.html",
    "revision": "6eb1f9fdbaa364d83c3991ab98e99264"
  },
  {
    "url": "basis/design/13. Chain of Responsibility Pattern.html",
    "revision": "4934a7b7bb4995c599adf069dc71076d"
  },
  {
    "url": "basis/design/14. Command Pattern.html",
    "revision": "f2ea36df2fb3e56c9689d029c78b1963"
  },
  {
    "url": "basis/design/15. Interpreter Pattern.html",
    "revision": "918a81989f7695b67866bdc94be24cf8"
  },
  {
    "url": "basis/design/16. Iterator Pattern.html",
    "revision": "7e99878df5560a142b68ad17f02077e5"
  },
  {
    "url": "basis/design/17. Mediator Pattern.html",
    "revision": "d7cd05d498638807dcbdcf42e6a7613b"
  },
  {
    "url": "basis/design/18. Memento Pattern.html",
    "revision": "2cfb3557f06f6203aecf1c0351148b2b"
  },
  {
    "url": "basis/design/19. Observer Pattern.html",
    "revision": "464ef4c6ed216f4468979ddbcf9078b3"
  },
  {
    "url": "basis/design/2. Builder Pattern.html",
    "revision": "e4da718f856af781b775a3f1528f4b73"
  },
  {
    "url": "basis/design/20. State Pattern.html",
    "revision": "7af93eccf240ee106b68536d3270f99b"
  },
  {
    "url": "basis/design/21. Null Object Pattern.html",
    "revision": "1e9dc0319290cc21f777b6162b0dbe5e"
  },
  {
    "url": "basis/design/22. Strategy Pattern.html",
    "revision": "e5858942857c888c24491ff94da210db"
  },
  {
    "url": "basis/design/23. Template Pattern.html",
    "revision": "840154af9f451afd000596aeffb84f9b"
  },
  {
    "url": "basis/design/24. Visitor Pattern.html",
    "revision": "4bb99988002faf132c3896c5d2cc352b"
  },
  {
    "url": "basis/design/3. Prototype Pattern.html",
    "revision": "1860e5efaf5d0a0fdcef41de23b27d3b"
  },
  {
    "url": "basis/design/4.Singleton Pattern.html",
    "revision": "2a5b0272de5ce76b31f17e07bf13ff04"
  },
  {
    "url": "basis/design/5. Adapter Pattern.html",
    "revision": "f155bb6892f7dda7efb7d7b5bb83c200"
  },
  {
    "url": "basis/design/6. Bridge Pattern.html",
    "revision": "fd8d404aac66b04f2965f16784570fac"
  },
  {
    "url": "basis/design/7. Filter、Criteria Pattern.html",
    "revision": "e0295b650a719f1f78f34be34c6e7ad4"
  },
  {
    "url": "basis/design/8. Composite Pattern.html",
    "revision": "1ac69314c5fae933a4ca9a7d580727ad"
  },
  {
    "url": "basis/design/9. Decorator Pattern.html",
    "revision": "6e2505e02bb8114f694d52ce35f48e23"
  },
  {
    "url": "basis/design/index.html",
    "revision": "670b0a4a91a7adbff9bd6e7a7d2b5acb"
  },
  {
    "url": "basis/index/index.html",
    "revision": "674023ff1f744fa26a571f2806e73e4d"
  },
  {
    "url": "basis/os/index.html",
    "revision": "3fbf672cf85fe443a2b841c6b7021571"
  },
  {
    "url": "book/index.html",
    "revision": "b71f1b599a5e2de5a4468460e631db9d"
  },
  {
    "url": "book/t-find-books.html",
    "revision": "3a66fcb9bd703de6c5c369d140a5b094"
  },
  {
    "url": "categories/index.html",
    "revision": "660964413ec48ab3ca6ff1423e8ba388"
  },
  {
    "url": "figma/index.html",
    "revision": "e90f17b77b3dbcca917041e633f1957d"
  },
  {
    "url": "flutter/index.html",
    "revision": "bd5f86590b73d80fa76b3fb3bcaf2df3"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "bdfa49afc8e2556471ce4086d56d6c44"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "dd2a26065789ba7936269a9c1b126546"
  },
  {
    "url": "flutter/t3-messages.html",
    "revision": "caa609778f31259600ef8164c6a29fb0"
  },
  {
    "url": "flutter/t3-mixin.html",
    "revision": "6ee9d8bbb3cc5c68585fabacd58f16d9"
  },
  {
    "url": "flutter/t4-lifecycle.html",
    "revision": "a7b80a73ca8593cab3de4335e9b002a3"
  },
  {
    "url": "flutter/t5-flutter-web-deploy.html",
    "revision": "237dc29e94b8419c2efe65b74e172a69"
  },
  {
    "url": "flutter/t6-docker-web-deploy.html",
    "revision": "f6045f6bf7b57b98f4964d29027bf784"
  },
  {
    "url": "flutter/t7-fvm.html",
    "revision": "cdd2fc213733081dc76d28ca4e21e4aa"
  },
  {
    "url": "flutter/t8-const.html",
    "revision": "da40620b7e889a0db34cf3624980d959"
  },
  {
    "url": "flutter/t9-logs.html",
    "revision": "93c8d147d725ef5c37a5e2463ad79a97"
  },
  {
    "url": "flutter/u10-fvm-flutter2.html",
    "revision": "2f1149c7ca5f3a3f3c677728a806d4c0"
  },
  {
    "url": "flutter/u11-flutter-render.html",
    "revision": "9bff006d89dfc37151d5a35e7955d4b0"
  },
  {
    "url": "flutter/u12-flutter-create-w.html",
    "revision": "4c371abd164ea852bb05de2649cf8291"
  },
  {
    "url": "flutter/u12-flutter-web-01.html",
    "revision": "e3e1da698063fa3d7efacf834d3710f7"
  },
  {
    "url": "flutter/u12-flutter-web-02.html",
    "revision": "e668ad487527bf07202d5fc80344e6dd"
  },
  {
    "url": "flutter/u13-sliverappbar.html",
    "revision": "d6aeaa45fb274816b24f15dfac6053eb"
  },
  {
    "url": "flutter/u14-navbar-color.html",
    "revision": "3de89c382430f389f2b41efa2c5b2332"
  },
  {
    "url": "flutter/u15-custom-nabar.html",
    "revision": "eaf2d12c6dd7186e8d7ccd1cb58600f4"
  },
  {
    "url": "flutter/u16-shape.html",
    "revision": "f99fdb099d4b4311d12918fd9f574d2a"
  },
  {
    "url": "haskell/1-install.html",
    "revision": "256be754aeaad64f49e7dea3b1b09350"
  },
  {
    "url": "haskell/2-vscode.html",
    "revision": "6a33a76d8504b8fcbbeb67ca126561f1"
  },
  {
    "url": "haskell/3-pktool.html",
    "revision": "24ea572e0176e23bbd0f0a051d9d23e7"
  },
  {
    "url": "haskell/4-digui.html",
    "revision": "b450a0e573f8df285a1032f90f1b654b"
  },
  {
    "url": "haskell/index.html",
    "revision": "21777063f30dbae209c70b3158f804c0"
  },
  {
    "url": "index.html",
    "revision": "8b3a99cc00a725da4cdc5bd9554b0d33"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "python/1-file-map.html",
    "revision": "002bd7d5f1009f26af712b05dc4f2faa"
  },
  {
    "url": "python/2-mongo-random.html",
    "revision": "6f71f668a353372f3e7dc024f46b2e95"
  },
  {
    "url": "python/3-page-upload.html",
    "revision": "180e8e0b82462b43a0de496f7c84161a"
  },
  {
    "url": "python/index.html",
    "revision": "6fdf7f5febf579ee40cbd7e24949a0ce"
  },
  {
    "url": "swift/fp/index.html",
    "revision": "99403127daf3f0e0347d76ee8d5af135"
  },
  {
    "url": "swift/fp/t1-fp.html",
    "revision": "1762831b3d948dab9155cd91196a11f9"
  },
  {
    "url": "swift/fp/t2-lens.html",
    "revision": "57deab7839d4198754ed6f9b0269f861"
  },
  {
    "url": "swift/fp/t3-json1.html",
    "revision": "72fa0d875a44dad800a209313840b139"
  },
  {
    "url": "swift/fp/t3-json2.html",
    "revision": "6914a52a7f98c3dc718b82cf239dc606"
  },
  {
    "url": "swift/fp/t3-json3.html",
    "revision": "6dd1e3cecad99464ebc17221a311e2f3"
  },
  {
    "url": "swift/fp/t4-length.html",
    "revision": "115b9ac0255eda1e94979ed2112705d3"
  },
  {
    "url": "swift/ios/index.html",
    "revision": "525a29c81424b9d7263bada8df009c64"
  },
  {
    "url": "swift/ios/t1-pod-webp.html",
    "revision": "ceeee51461ecd950e59032a56a22956f"
  },
  {
    "url": "swift/ios/t2-youhua.html",
    "revision": "565496907f591c1683874d4f2c522216"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "ce3dce7454884040008323f504febe39"
  },
  {
    "url": "swift/swiftui/t1-principle.html",
    "revision": "939dffcf60919d864922f27e71bf50a4"
  },
  {
    "url": "swift/swiftui/t1.0-propertywrapper.html",
    "revision": "3620951b6f08012f5a8ecb9fc1b3d0e9"
  },
  {
    "url": "swift/swiftui/t1.1-functionBuilder.html",
    "revision": "c64bd114606ee7a684df932759760576"
  },
  {
    "url": "swift/swiftui/t1.2-propertys.html",
    "revision": "509873c24dd4bf109092c65cf995cb22"
  },
  {
    "url": "swift/swiftui/t2-views_control.html",
    "revision": "ce74b7df7785a05d3330ade53b6b5f6d"
  },
  {
    "url": "swift/swiftui/t3-layout_presentation.html",
    "revision": "a7d9733276ae89bbab44bff9d70c45a9"
  },
  {
    "url": "swift/swiftui/t4-uikit_in_swiftui.html",
    "revision": "35561333fb09f7fa6070fd079a63d33e"
  },
  {
    "url": "swift/swiftui/t5-swiftui_in_uikit.html",
    "revision": "b838d295319ab2f5a7971098a8748f6e"
  },
  {
    "url": "swift/swiftui/t6-viewmodifier.html",
    "revision": "3fad98d41f1897fa6f00e3188756408d"
  },
  {
    "url": "swift/swiftui/t7-geometryreader.html",
    "revision": "2827df8c4b167890458af503e697fd24"
  },
  {
    "url": "swift/swiftui/t8-preferencekey.html",
    "revision": "1ca9c9e2784586e4371857a0c4eff97d"
  },
  {
    "url": "swift/tips/index.html",
    "revision": "b777e5986d3b54e96787400fc6769a66"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "da0785e25db4c0a83bbc632912e0181f"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "837765cba744d5df11fe1fad0272215f"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "c908b299ba435edc636c0e890392b430"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "f5e1c92d680b3c53b6ccfbf40df0e290"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "2bdc6d04c42d9eb5c8af7910242dd97e"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "ab340ea3e50e30c9d35b86d62c1d3c22"
  },
  {
    "url": "swift/vapor/t6-say-oldbirds.html",
    "revision": "d6912fad3985426bfd58141a09dca1aa"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "ed6be2f2f094c4852bb216b1b0a1990c"
  },
  {
    "url": "swift/vapor/u-11-auth.html",
    "revision": "0abc4f4cd71cd5d4627650efefacf42f"
  },
  {
    "url": "swift/vapor/u-12-permission.html",
    "revision": "28b07fda7183fadf19d76f0cef0fecc0"
  },
  {
    "url": "swift/vapor/v-20-read-code.html",
    "revision": "0d3017ce523b5f044596a6d18c8e498b"
  },
  {
    "url": "swift/vapor/v-21-io.html",
    "revision": "32c07e19550cef8a7a837145c12b9ab6"
  },
  {
    "url": "swift/vapor/v-22-bio2.html",
    "revision": "277387dfc0bbc5f2ece990a5b5ba3a9f"
  },
  {
    "url": "swift/vapor/v-23-swiftnio-do-text.html",
    "revision": "b162216f0a28e57345b19e082bbf337e"
  },
  {
    "url": "swift/vapor/v-24-swift-zhan-package.html",
    "revision": "d3f3f2722940ff055befc4e7b1194df9"
  },
  {
    "url": "swift/vapor/v-25-swiftnio-do-serisize.html",
    "revision": "e8fc4daaedd74ffaaeafd57310158c2d"
  },
  {
    "url": "swift/vapor/v-26-swfitnio-grpc-1.html",
    "revision": "a595dcbe8674f9dd35d37790271ec607"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/ai/index.html",
    "revision": "82e65b95d138d9538ec73da20b5f67c2"
  },
  {
    "url": "tag/flutter/index.html",
    "revision": "ca9a6262a6f9e0649b4de8d8b83a80e7"
  },
  {
    "url": "tag/flutter/page/2/index.html",
    "revision": "5f276d164e0e16e8b487d373cbd32af0"
  },
  {
    "url": "tag/git/index.html",
    "revision": "8bdd96edf21769a0b7c261503366e270"
  },
  {
    "url": "tag/haskell/index.html",
    "revision": "6ea6f90b4426e80740fcc95043c370ce"
  },
  {
    "url": "tag/html/index.html",
    "revision": "d67031ff306c03077b68c6b2fabd4adf"
  },
  {
    "url": "tag/index.html",
    "revision": "39e8a467c9951ca8c228e595e2207301"
  },
  {
    "url": "tag/ios/index.html",
    "revision": "9fd3b5ec46e849fbfbfcf361777ef1b7"
  },
  {
    "url": "tag/json/index.html",
    "revision": "f18639637060e7348a79a6d290257469"
  },
  {
    "url": "tag/plantuml/index.html",
    "revision": "34dbc6ba56e5a280b6983b048b0913a3"
  },
  {
    "url": "tag/python/index.html",
    "revision": "cb0f6614baa57ba52443136943ff4e2a"
  },
  {
    "url": "tag/swift/index.html",
    "revision": "662aa02440dbe4324c4849802ba61ca3"
  },
  {
    "url": "tag/swift/page/2/index.html",
    "revision": "8e6c08320d0e774a018ae0a51b55c969"
  },
  {
    "url": "tag/swift/page/3/index.html",
    "revision": "19a3d38074ae301967f2f824b2c9c1e7"
  },
  {
    "url": "tag/swift/page/4/index.html",
    "revision": "ddca877ad22e6f429dc4ab4fd67ce892"
  },
  {
    "url": "tag/swiftnio/index.html",
    "revision": "0cb024ee82cc6e5ef5d8d64b697d98b8"
  },
  {
    "url": "tag/swiftui/index.html",
    "revision": "3863c896e149269ba7d782d42b8ccca2"
  },
  {
    "url": "tag/swiftui/page/2/index.html",
    "revision": "1b3067d216b3e974ef0ccf03924094cf"
  },
  {
    "url": "tag/tips/index.html",
    "revision": "fd3277e3a5f53917fd826e72fff1addd"
  },
  {
    "url": "tag/tools/index.html",
    "revision": "819aa4b3555681ec86bae05016362deb"
  },
  {
    "url": "tag/vapor/index.html",
    "revision": "32dc2c85e5a236ad79b8969ef39a01ef"
  },
  {
    "url": "tag/vapor/page/2/index.html",
    "revision": "18f5a1b3a440118ee24e4e564ec9a1e7"
  },
  {
    "url": "tag/vscode/index.html",
    "revision": "f184e9643bfca18b592716666772387f"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "edd22fe42a051a2b119a4ead72c8a0e4"
  },
  {
    "url": "tag/yaml/index.html",
    "revision": "b58387db4d7b39f50a79b28b0d08936f"
  },
  {
    "url": "tag/书单/index.html",
    "revision": "09fa1759c1ba4bf18b1d5be1eba1880e"
  },
  {
    "url": "tag/函数式编程/index.html",
    "revision": "92b660b4b76cfff2eb9c62ffcfe4d57f"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "413ebe1d955d9e036c9833a435315d78"
  },
  {
    "url": "tag/基础/page/2/index.html",
    "revision": "fc87d01cc3b431e5732d543d5e127e21"
  },
  {
    "url": "tag/基础/page/3/index.html",
    "revision": "0ae49e08e99d290f5f420dd85b82ff0d"
  },
  {
    "url": "tag/基础/page/4/index.html",
    "revision": "e5a66ec4022b9d89553e0253e34857d5"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "4dfb01de7629c3e852ff7aeb3471d05b"
  },
  {
    "url": "tag/数据结构与算法/page/2/index.html",
    "revision": "23ee0f118d5dede140db84f95fdc7534"
  },
  {
    "url": "tag/设计模式/index.html",
    "revision": "6d12222ca6831caadab9a151a2147d43"
  },
  {
    "url": "tag/设计模式/page/2/index.html",
    "revision": "ffabdd213f220d9241e85090337d912c"
  },
  {
    "url": "tag/设计模式/page/3/index.html",
    "revision": "80cea37e8feb40bf65fe071c25c22bf9"
  },
  {
    "url": "timeline/index.html",
    "revision": "baed2ef22eb36493f0817fd1ed36b79f"
  },
  {
    "url": "tools/git/index.html",
    "revision": "d3447515314160ee809728d56916de99"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "4cbb6fa37ef36c021cffdc64e418ed72"
  },
  {
    "url": "tools/git/t2-git-submodule.html",
    "revision": "e9dce66bc3f4ca389b9b4da064e7256f"
  },
  {
    "url": "tools/html/index.html",
    "revision": "60862b97f9fa0a991f775b4c8fccaa25"
  },
  {
    "url": "tools/plantuml/index.html",
    "revision": "c833d28e25c64605464010d5dbd39cec"
  },
  {
    "url": "tools/plantuml/t1-sequence-diagram.html",
    "revision": "a279f5d97089827c3211d6d9d187fd7b"
  },
  {
    "url": "tools/plantuml/t2-class-diagram.html",
    "revision": "d19bc2a88e859240ffd141e030a34c9a"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "b7e0c3164bfe29310b0f1cfeebff48fb"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "fbb0f0156b6b60961327c3fe237c2f9a"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "df6539d54d3fa3cf5f6015d3077a97cd"
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
