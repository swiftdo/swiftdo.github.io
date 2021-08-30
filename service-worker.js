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
    "revision": "fcc7d3116da4e4464c438fcbbaa3b307"
  },
  {
    "url": "about/app/index.html",
    "revision": "9f0f169e3ca80ff2b9aadbb486bbf2e5"
  },
  {
    "url": "about/app/t1-protocol.html",
    "revision": "b3f44154529a872515e22f0daca09c26"
  },
  {
    "url": "about/app/t2-secrect.html",
    "revision": "359766a8aa534476f81bd8645f62f8c7"
  },
  {
    "url": "about/app/t3-miniapps-sec.html",
    "revision": "869105d1fbfcced747983a6004c9252d"
  },
  {
    "url": "about/index/index.html",
    "revision": "e41795f7b271ab276cd054a917f835d7"
  },
  {
    "url": "ai/index.html",
    "revision": "5f69aa297f38aef14150e3edca92a6bd"
  },
  {
    "url": "ai/t1-gzj.html",
    "revision": "7868a19f6be302e9a15dc20e3a94279b"
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
    "url": "assets/js/105.917e943a.js",
    "revision": "10c133f327bd2e355c27228da85787d0"
  },
  {
    "url": "assets/js/106.a32093f0.js",
    "revision": "8c9240ffa0dd3583c4a3157805f58c65"
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
    "url": "assets/js/11.0c0f2477.js",
    "revision": "465160166ea8a408ab41c2accd0f61ad"
  },
  {
    "url": "assets/js/110.d232af11.js",
    "revision": "7ca9e068d6b9043558e0acda274aad57"
  },
  {
    "url": "assets/js/111.d7d106c1.js",
    "revision": "3a1366bf56446d9cc1eb39768ecbdb63"
  },
  {
    "url": "assets/js/112.37af22d1.js",
    "revision": "ed71964490e87c3f8f31341bbb15a667"
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
    "url": "assets/js/12.0c6cd35f.js",
    "revision": "28d4f9db247db600223f18237ddecc2c"
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
    "url": "assets/js/124.a2e295e7.js",
    "revision": "1b536b466f738d4e784abd074d1e416d"
  },
  {
    "url": "assets/js/125.3964b0c6.js",
    "revision": "de2e205da16e3e78907063ce4bf27c6a"
  },
  {
    "url": "assets/js/126.7152dc5b.js",
    "revision": "86cb1692ed2cb4aee68b1aa6a187b012"
  },
  {
    "url": "assets/js/127.722ebd29.js",
    "revision": "0c105dcbf3240c5258b88dc1a6077f7f"
  },
  {
    "url": "assets/js/128.160bbac2.js",
    "revision": "25352d975fe75d0e3f7cb1806d2ee6f7"
  },
  {
    "url": "assets/js/129.7a4ce025.js",
    "revision": "5cf918df0ccfa87c5506081e05e4ef22"
  },
  {
    "url": "assets/js/13.37b4e409.js",
    "revision": "0d8dbf24d975daa148cd23cb73ac6d82"
  },
  {
    "url": "assets/js/130.471ad6c7.js",
    "revision": "56ad5d40c4cb903c71d120f4a8e93ce8"
  },
  {
    "url": "assets/js/131.d47a7560.js",
    "revision": "c56eef29643b04ba636d45e956ccfd40"
  },
  {
    "url": "assets/js/132.20c18e78.js",
    "revision": "8a24eaa10f403ba0cc2d2bdae0b0ed5c"
  },
  {
    "url": "assets/js/133.b20462a6.js",
    "revision": "feeff1bee3d1f1e786122f9ec985bc8e"
  },
  {
    "url": "assets/js/134.1e87ef74.js",
    "revision": "043a56219c1da759ebc34fd89638040b"
  },
  {
    "url": "assets/js/135.294c8971.js",
    "revision": "06791982b903d3d07561d03b352f4fbf"
  },
  {
    "url": "assets/js/136.63ab7f9b.js",
    "revision": "508841330dffea4168c77178e5c9e27c"
  },
  {
    "url": "assets/js/137.01a1c8f8.js",
    "revision": "6a95b9890f2f5348e4a32d1205649346"
  },
  {
    "url": "assets/js/138.e4354ab0.js",
    "revision": "9c354c2ec32c47ed91ff886fa4991951"
  },
  {
    "url": "assets/js/139.59cf98b6.js",
    "revision": "943691fe96b0d7865c813619b929da0f"
  },
  {
    "url": "assets/js/14.bbb770b8.js",
    "revision": "65f0f77d3ecf5bb7f3b0ee62d6596a1c"
  },
  {
    "url": "assets/js/140.2ebfce65.js",
    "revision": "aa0b261948732db10276b383f9ca92e1"
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
    "url": "assets/js/58.61abc569.js",
    "revision": "b04ba9b060f8dee8c5dcf95ab1e17cb2"
  },
  {
    "url": "assets/js/59.27a66539.js",
    "revision": "f132b79afac18dd96d81c212c079c967"
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
    "url": "assets/js/61.1b4f8253.js",
    "revision": "9c9c759dd44ccd90d0e709327231b997"
  },
  {
    "url": "assets/js/62.f7f300fb.js",
    "revision": "12f11208186552039f9f739862cb4b15"
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
    "url": "assets/js/67.aaa23246.js",
    "revision": "fb9807fe73406748229ab2be3a946893"
  },
  {
    "url": "assets/js/68.4eb2dfd8.js",
    "revision": "b60f6d8249c91a26d38482c16542451b"
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
    "url": "assets/js/81.bc18f2f1.js",
    "revision": "3c36c791fd447355cda08b20e8f879d5"
  },
  {
    "url": "assets/js/82.1c44655e.js",
    "revision": "1d1971e72da3155e89e2b5df221576bf"
  },
  {
    "url": "assets/js/83.7e057d58.js",
    "revision": "f8bd0e36b9e2162fc9318100b99c0b7a"
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
    "url": "assets/js/93.5e0232f9.js",
    "revision": "0f3a9b9ed1538ec4cf8f5145841ecd0a"
  },
  {
    "url": "assets/js/94.0192c5ac.js",
    "revision": "0f076a9a8ed546848fd9eecf75c677b4"
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
    "url": "assets/js/app.e8e5ba3f.js",
    "revision": "6d992e828d2d6130efd6eb64395ce5be"
  },
  {
    "url": "author.jpeg",
    "revision": "7e1bfc6337e85b76f0f6e95859ed93d6"
  },
  {
    "url": "basis/algorithms/index.html",
    "revision": "affd44c17bf1943fa1e3e88c5f9d8da6"
  },
  {
    "url": "basis/algorithms/t1-buble-sort.html",
    "revision": "dd0f9a70f928e3936680d816596c11a1"
  },
  {
    "url": "basis/algorithms/t2-selection-sort.html",
    "revision": "07f4b5178efa59bf17d41bedb0599ea5"
  },
  {
    "url": "basis/algorithms/t3-insertion-sort.html",
    "revision": "4fa9dfd7cc235a4490c219f3f288fffa"
  },
  {
    "url": "basis/algorithms/t4-shell-sort.html",
    "revision": "567b74a54d63f7383472f655676b2408"
  },
  {
    "url": "basis/algorithms/t5-quick-sort.html",
    "revision": "b0b13490d65f86917fce6d794cb92b12"
  },
  {
    "url": "basis/algorithms/t6-heap-sort.html",
    "revision": "073f435256f4289521f14ebd09b9f4f4"
  },
  {
    "url": "basis/algorithms/t7-merge-sort.html",
    "revision": "3539d4177ac27a3b4afbe3a83e938383"
  },
  {
    "url": "basis/algorithms/t8-radix-sort.html",
    "revision": "088ff97dba3709ccbbeab9bb6bae89a1"
  },
  {
    "url": "basis/algorithms/t9-count-sort.html",
    "revision": "82f3a62986688f4c2b44c9d1546b92ce"
  },
  {
    "url": "basis/algorithms/u1-bucket-sort.html",
    "revision": "28bb9e43369861dccc8b75197a4de5c5"
  },
  {
    "url": "basis/design/0. Class Releation.html",
    "revision": "75565468029b50d7dda19cf9afdc0f23"
  },
  {
    "url": "basis/design/0.1 Design Principles.html",
    "revision": "1ad9be397ef3ba9d45a76d0fef83570a"
  },
  {
    "url": "basis/design/1. Factory Pattern.html",
    "revision": "bf8c0328c13b3a7180d416694288c094"
  },
  {
    "url": "basis/design/10. Facade Pattern.html",
    "revision": "dd0b5a206038aacff6d7ac44a23fd949"
  },
  {
    "url": "basis/design/11. Flyweight Pattern.html",
    "revision": "0c89b7d5ba698e698659645dc24be24a"
  },
  {
    "url": "basis/design/12. Proxy Pattern.html",
    "revision": "67d060bcff5e80f99dca1b4d4f4b226d"
  },
  {
    "url": "basis/design/13. Chain of Responsibility Pattern.html",
    "revision": "1b41181701a5340799d88b6139956121"
  },
  {
    "url": "basis/design/14. Command Pattern.html",
    "revision": "ba1ba66fc81d9642416b2c33a63637ef"
  },
  {
    "url": "basis/design/15. Interpreter Pattern.html",
    "revision": "d8634397c5c66cfe6f925a9db76d4b63"
  },
  {
    "url": "basis/design/16. Iterator Pattern.html",
    "revision": "82d685aa21ce9401db159d8e47c683c6"
  },
  {
    "url": "basis/design/17. Mediator Pattern.html",
    "revision": "32242d400f6e872b002f5ee88fb2a0b0"
  },
  {
    "url": "basis/design/18. Memento Pattern.html",
    "revision": "5ad8d5c4d9be705b5c8974e165f24102"
  },
  {
    "url": "basis/design/19. Observer Pattern.html",
    "revision": "6a0f2e54eb1f8c4d87e8407c80af1eae"
  },
  {
    "url": "basis/design/2. Builder Pattern.html",
    "revision": "8f969e0e96d82aceee3d53597203f41d"
  },
  {
    "url": "basis/design/20. State Pattern.html",
    "revision": "c11e2607aebb600eef0d79d762280f66"
  },
  {
    "url": "basis/design/21. Null Object Pattern.html",
    "revision": "0c55ff216b589cd74f9ae1b45d447fb8"
  },
  {
    "url": "basis/design/22. Strategy Pattern.html",
    "revision": "b495ee52f889d656ad35d5266afb13d0"
  },
  {
    "url": "basis/design/23. Template Pattern.html",
    "revision": "45a6ac63c74c6a9c21fd8e82aa5da6c3"
  },
  {
    "url": "basis/design/24. Visitor Pattern.html",
    "revision": "2ea07e908f565323adaff64d52ad63c5"
  },
  {
    "url": "basis/design/3. Prototype Pattern.html",
    "revision": "c0a26cf260cf1892cb4e353fe72ff715"
  },
  {
    "url": "basis/design/4.Singleton Pattern.html",
    "revision": "16b6ad67831a3abaaa81d97986a54ef6"
  },
  {
    "url": "basis/design/5. Adapter Pattern.html",
    "revision": "a2947b7f5f22af5f03a804f62f489ec4"
  },
  {
    "url": "basis/design/6. Bridge Pattern.html",
    "revision": "34ed3abb87ebae645680cc0365ce2c0e"
  },
  {
    "url": "basis/design/7. Filter、Criteria Pattern.html",
    "revision": "80c0c5fb8ecb1828b285d30d0b6fb31b"
  },
  {
    "url": "basis/design/8. Composite Pattern.html",
    "revision": "9d5b8678401026acd7572818dc5a8515"
  },
  {
    "url": "basis/design/9. Decorator Pattern.html",
    "revision": "dfa41b3a1ad56c6b49d9db4125f25c0f"
  },
  {
    "url": "basis/design/index.html",
    "revision": "a3ec70133c94b25a97b9af2416e38806"
  },
  {
    "url": "basis/index/index.html",
    "revision": "916828c97cc19e3c20e92a1c54f2be19"
  },
  {
    "url": "basis/os/index.html",
    "revision": "e3243725111a6acdc2f02124b5e26e61"
  },
  {
    "url": "book/index.html",
    "revision": "1e3c5773b6a7d4eaa021f2fbae37a69c"
  },
  {
    "url": "book/t-find-books.html",
    "revision": "b71e4b577bb7184775a759080ba921e2"
  },
  {
    "url": "categories/index.html",
    "revision": "3198844efdf766f0d79c617eda79f1fa"
  },
  {
    "url": "figma/index.html",
    "revision": "bad06d4f6a16082f4a30a2d735096951"
  },
  {
    "url": "flutter/index.html",
    "revision": "538f1c1fd85b57edd110d5ddb4167908"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "bd03a034d5d470fe29c1ca5a670ea8fb"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "73c4b5cb8b066f90da2ca12f688bdd04"
  },
  {
    "url": "flutter/t3-messages.html",
    "revision": "da6bdb9d97cacd9273566c2121bd60ab"
  },
  {
    "url": "flutter/t3-mixin.html",
    "revision": "8d45630c931581effce716cb00036a14"
  },
  {
    "url": "flutter/t4-lifecycle.html",
    "revision": "2700be6fb80a1658d91f848143c59b26"
  },
  {
    "url": "flutter/t5-flutter-web-deploy.html",
    "revision": "fb7eaba0c0ce09ddf59c50c0b6c53373"
  },
  {
    "url": "flutter/t6-docker-web-deploy.html",
    "revision": "384d378029779b28500f01af3a7c422f"
  },
  {
    "url": "flutter/t7-fvm.html",
    "revision": "ab28e7585cbeb9e7c601ddabdb406d04"
  },
  {
    "url": "flutter/t8-const.html",
    "revision": "64153665537047e97e0e088709035e0e"
  },
  {
    "url": "flutter/t9-logs.html",
    "revision": "14d6f15e56685d63f00804436b3edb63"
  },
  {
    "url": "flutter/u10-fvm-flutter2.html",
    "revision": "649ff5103c014e7dc06e54ef58db401d"
  },
  {
    "url": "flutter/u11-flutter-render.html",
    "revision": "65e87a97a3a1e4c077fbbb1500952849"
  },
  {
    "url": "flutter/u12-flutter-create-w.html",
    "revision": "0a6ee31c72cde9223cb11ec4e3a3bec7"
  },
  {
    "url": "flutter/u12-flutter-web-01.html",
    "revision": "e2e70ef9b5c2e498a75c9a717b4d8a30"
  },
  {
    "url": "flutter/u12-flutter-web-02.html",
    "revision": "10fea469108be10e3895cc27bcb40eb2"
  },
  {
    "url": "flutter/u13-sliverappbar.html",
    "revision": "28401c4b25f007267322254acf6e3cdb"
  },
  {
    "url": "flutter/u14-navbar-color.html",
    "revision": "437b00d790f7d5bb6ed913afe88dc306"
  },
  {
    "url": "flutter/u15-custom-nabar.html",
    "revision": "6881d18afa0ed32c020e3cd257e34050"
  },
  {
    "url": "flutter/u16-shape.html",
    "revision": "286e16fe59a1a6c7a2b3d2260c58450b"
  },
  {
    "url": "haskell/1-install.html",
    "revision": "6ea107efbb9e212c6332c87c0e500b77"
  },
  {
    "url": "haskell/2-vscode.html",
    "revision": "b3cd3748d634d7c7a84ad8167f3b4fda"
  },
  {
    "url": "haskell/3-pktool.html",
    "revision": "738306667aca5506e50b77257294a8cf"
  },
  {
    "url": "haskell/4-digui.html",
    "revision": "826339d55abbddee9f137995fe780500"
  },
  {
    "url": "haskell/index.html",
    "revision": "1d12a69dcefc0f2cb5c19a6aa7002922"
  },
  {
    "url": "index.html",
    "revision": "c7fc2a4a754a9122f6a2cd2c0c77b83c"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "python/1-file-map.html",
    "revision": "eff123437271d629d1c438fc7b8f8a93"
  },
  {
    "url": "python/2-mongo-random.html",
    "revision": "c80908ab27c3a7f9c5b12cc555b1bd73"
  },
  {
    "url": "python/3-page-upload.html",
    "revision": "823691ed9a5db77362ce7ade49cd16d5"
  },
  {
    "url": "python/index.html",
    "revision": "d39b1c5af528af636f2467e1fe817de1"
  },
  {
    "url": "swift/fp/index.html",
    "revision": "f99edbbe1b0b58905359dbde179f298b"
  },
  {
    "url": "swift/fp/t1-fp.html",
    "revision": "9f4d4749a915b6c677b6b15b9ea64400"
  },
  {
    "url": "swift/fp/t2-lens.html",
    "revision": "3c300289909dc197f9958ffd03e7336f"
  },
  {
    "url": "swift/fp/t3-json1.html",
    "revision": "7c9bf0fa45655399516c5c93ffe8664f"
  },
  {
    "url": "swift/fp/t3-json2.html",
    "revision": "387932dbcd1ba6312679494e1209cf5c"
  },
  {
    "url": "swift/fp/t3-json3.html",
    "revision": "812799195382a0ae78ffad6187f6db9c"
  },
  {
    "url": "swift/fp/t4-length.html",
    "revision": "312d60e1bbadd77612167e8603468e60"
  },
  {
    "url": "swift/ios/index.html",
    "revision": "ddda9a10b331e4ba465907b3d5e899ef"
  },
  {
    "url": "swift/ios/t1-pod-webp.html",
    "revision": "4cecdf072e78d995535f3eb73ea42dee"
  },
  {
    "url": "swift/ios/t2-youhua.html",
    "revision": "fe0464d17f44b98005df659efbd84560"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "c1683da86b90eaca8e84cd1e9226c6fd"
  },
  {
    "url": "swift/swiftui/t1-principle.html",
    "revision": "8657b26163b083779aab31df30eab439"
  },
  {
    "url": "swift/swiftui/t1.0-propertywrapper.html",
    "revision": "25dddf204ccc8acfa9f68e55de37c3b6"
  },
  {
    "url": "swift/swiftui/t1.1-functionBuilder.html",
    "revision": "6627443a87cb4ac5b2ebb139a2b3e3df"
  },
  {
    "url": "swift/swiftui/t1.2-propertys.html",
    "revision": "da740d456418a917c06bfaf5805eb576"
  },
  {
    "url": "swift/swiftui/t2-views_control.html",
    "revision": "092291dbc87dc2a39a2ee77b90f2b876"
  },
  {
    "url": "swift/swiftui/t3-layout_presentation.html",
    "revision": "91faaf02a2ff39f7c45188b27718aa6e"
  },
  {
    "url": "swift/swiftui/t4-uikit_in_swiftui.html",
    "revision": "75898ce6866c93c22e903cf82842ddff"
  },
  {
    "url": "swift/swiftui/t5-swiftui_in_uikit.html",
    "revision": "48abdf96af675a84f5e39bb9ae94864e"
  },
  {
    "url": "swift/swiftui/t6-viewmodifier.html",
    "revision": "fa59e380f00fe8d6853e6ec41efd0da4"
  },
  {
    "url": "swift/swiftui/t7-geometryreader.html",
    "revision": "3162a4c5b6ab42675efde9b3c10fdd7f"
  },
  {
    "url": "swift/swiftui/t8-preferencekey.html",
    "revision": "b8bbb02df60400858a7e080bd2a5ddc0"
  },
  {
    "url": "swift/tips/index.html",
    "revision": "380708f53a28d1caecd58787821da44d"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "343c1a0e86902229eabe1fc91eae3099"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "96dca53995f6f45b2f8a26ecf28c5d81"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "67776a3ff82149e079cd00de6cb35559"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "5a92fa166002dec58a2fe5d5461c7683"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "a3f0443de7135e1b6f0840695da28f6a"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "dd6d58cf05600beb816ba2785616aee4"
  },
  {
    "url": "swift/vapor/t6-say-oldbirds.html",
    "revision": "4a953052d89ebeca71957776cef7c9ec"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "1f8745765400272c6e839d3f4d17e8a8"
  },
  {
    "url": "swift/vapor/u-11-auth.html",
    "revision": "e94fc9dbfc6e64d92a085dade28b828b"
  },
  {
    "url": "swift/vapor/u-12-permission.html",
    "revision": "62e94039fb0ed9b01f8c1b6c1a32945a"
  },
  {
    "url": "swift/vapor/v-20-read-code.html",
    "revision": "3e219cff413209c909f32cbcb4906ff6"
  },
  {
    "url": "swift/vapor/v-21-io.html",
    "revision": "e44ba45cb136a30d8133dc8486e10a78"
  },
  {
    "url": "swift/vapor/v-22-bio2.html",
    "revision": "e15fed91fcb1d81924bc34657220015b"
  },
  {
    "url": "swift/vapor/v-23-swiftnio-do-text.html",
    "revision": "43d24583c7df038143c2a3561ea08327"
  },
  {
    "url": "swift/vapor/v-24-swift-zhan-package.html",
    "revision": "5ceb973b47332774bb1f5176caafa5b9"
  },
  {
    "url": "swift/vapor/v-25-swiftnio-do-serisize.html",
    "revision": "a7d248c5e20b5249d494d8bf45009eaf"
  },
  {
    "url": "swift/vapor/v-26-swfitnio-grpc-1.html",
    "revision": "017a806332fe39f62ebb6f930e0a820a"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/ai/index.html",
    "revision": "da8ca8f749ce74701d52d8cc5d87a0d7"
  },
  {
    "url": "tag/flutter/index.html",
    "revision": "222ddce0f0c7f61691f163c033250a2d"
  },
  {
    "url": "tag/flutter/page/2/index.html",
    "revision": "79cf37df680d1c0c2e24059b9be255cd"
  },
  {
    "url": "tag/git/index.html",
    "revision": "19409b31be8aebe73e9a473158e1968a"
  },
  {
    "url": "tag/haskell/index.html",
    "revision": "7ea7dc4529eb0c9e564a0fe00b22cab0"
  },
  {
    "url": "tag/html/index.html",
    "revision": "1e8170d770161d5e8a2ea0ac7e3daa87"
  },
  {
    "url": "tag/index.html",
    "revision": "d8fb69a0bbf23d195fae19af783efe53"
  },
  {
    "url": "tag/ios/index.html",
    "revision": "7b925c93d0c1db9ad7063a2f3e5da917"
  },
  {
    "url": "tag/json/index.html",
    "revision": "3053a788b276426ef34550b0fd8119b2"
  },
  {
    "url": "tag/plantuml/index.html",
    "revision": "6fde1669356c2af02804c217d0446ae5"
  },
  {
    "url": "tag/python/index.html",
    "revision": "3eae4700cc4eb15b472bc7e06e4d7999"
  },
  {
    "url": "tag/swift/index.html",
    "revision": "4090b872ba8acbae4e352e48c4700a1c"
  },
  {
    "url": "tag/swift/page/2/index.html",
    "revision": "a6e58e955327d30185ffa978488f7f05"
  },
  {
    "url": "tag/swift/page/3/index.html",
    "revision": "861f7bed67ebef726835260bca507bac"
  },
  {
    "url": "tag/swift/page/4/index.html",
    "revision": "5ae4b36f29be44fc740160da8944530c"
  },
  {
    "url": "tag/swiftnio/index.html",
    "revision": "c722f6e3f3414a470dee805565222cee"
  },
  {
    "url": "tag/swiftui/index.html",
    "revision": "b1020879291c4ca99479ca5a4a0f52c8"
  },
  {
    "url": "tag/swiftui/page/2/index.html",
    "revision": "077f69dc21da03cfdd881767daa5dc4e"
  },
  {
    "url": "tag/tips/index.html",
    "revision": "354b1baab753497f6cfd0bd7fc5ee17a"
  },
  {
    "url": "tag/tools/index.html",
    "revision": "fcb6748852523b40003570b2389aa0d1"
  },
  {
    "url": "tag/vapor/index.html",
    "revision": "c54da68d0dc1dd2164a933de611ea57e"
  },
  {
    "url": "tag/vapor/page/2/index.html",
    "revision": "51fccb1d7af4592aa482fb5e8a1432c8"
  },
  {
    "url": "tag/vscode/index.html",
    "revision": "46395e0d35d900782ca995721e55a55f"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "2cd14aab57f3146bdb8080b490c9d1fe"
  },
  {
    "url": "tag/yaml/index.html",
    "revision": "fc228b77d116a51c5d328a9560b64070"
  },
  {
    "url": "tag/书单/index.html",
    "revision": "4e78f797598f138f5351e9133a359537"
  },
  {
    "url": "tag/函数式编程/index.html",
    "revision": "f82fba700f1e3a8facce0ce03479ab78"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "7f581647e17efcf0344a3e8e1887daa8"
  },
  {
    "url": "tag/基础/page/2/index.html",
    "revision": "02c90df5c0c0dc32c0008ad1711f980e"
  },
  {
    "url": "tag/基础/page/3/index.html",
    "revision": "8c8692104785d63b3a6d241ea8aa46ae"
  },
  {
    "url": "tag/基础/page/4/index.html",
    "revision": "064eedc08dbce69c80eb0028998ef80a"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "eed1353e6eea186c013f13d301a66933"
  },
  {
    "url": "tag/数据结构与算法/page/2/index.html",
    "revision": "8e025faa606dadcef7daf049bc6ac0b6"
  },
  {
    "url": "tag/设计模式/index.html",
    "revision": "d5342fa1cf3087fcfdd455d0a4d27fea"
  },
  {
    "url": "tag/设计模式/page/2/index.html",
    "revision": "5e4dbfb4083ccf4d7a77f299b8c47d43"
  },
  {
    "url": "tag/设计模式/page/3/index.html",
    "revision": "b9ee89ee77ef82cea1bb57c71c2246ae"
  },
  {
    "url": "timeline/index.html",
    "revision": "f395427c8259c99b1a16d262fbf6aeef"
  },
  {
    "url": "tools/git/index.html",
    "revision": "9b42ec0b0b17dd904e116190ec28a70e"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "f5595948d0776f7626cd56c78e5e38f2"
  },
  {
    "url": "tools/git/t2-git-submodule.html",
    "revision": "8684193634ec2adb1064f626e3e993ab"
  },
  {
    "url": "tools/html/index.html",
    "revision": "5890f0cb75ee74e72c8b214326ab68db"
  },
  {
    "url": "tools/plantuml/index.html",
    "revision": "89d3d07d2c3219b273da797633b83045"
  },
  {
    "url": "tools/plantuml/t1-sequence-diagram.html",
    "revision": "181ce1b75855164f9b235716275ea914"
  },
  {
    "url": "tools/plantuml/t2-class-diagram.html",
    "revision": "1e0dc7193251c981dbb6c76fedf67d9a"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "533ae6691d1ac25e3f331c510ac8ae92"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "2c4529a65befd2505f049ef965cfd8d4"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "75db92197b03418ec9ffb0074a47cde2"
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
