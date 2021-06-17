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
    "revision": "3c0a90936ed1a15fdd430580f168efb3"
  },
  {
    "url": "about/app/index.html",
    "revision": "76101a0dbc27a18a0f36779892da363f"
  },
  {
    "url": "about/app/t1-protocol.html",
    "revision": "90ed9984a9e02107a73f65fc68a97bea"
  },
  {
    "url": "about/app/t2-secrect.html",
    "revision": "466a1c458d11d808ac9ef91c9044c552"
  },
  {
    "url": "about/app/t3-miniapps-sec.html",
    "revision": "06766f9f2b2d930f98981f5ed81d87b5"
  },
  {
    "url": "about/index/index.html",
    "revision": "70e672abb876626ab30a96250baa9fce"
  },
  {
    "url": "ai/index.html",
    "revision": "eb7536db3021710b2f90b2d770281cb5"
  },
  {
    "url": "ai/t1-gzj.html",
    "revision": "98545cc9945df5f012ab6aae7057a5bb"
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
    "url": "assets/js/100.00f5f340.js",
    "revision": "62a4eeac9730db88b58ddfe77fd02d41"
  },
  {
    "url": "assets/js/101.18df5588.js",
    "revision": "341763c892de58a739411693e002fe40"
  },
  {
    "url": "assets/js/102.00768917.js",
    "revision": "d9b8d84f9375d75a7cf5e00883d5ecba"
  },
  {
    "url": "assets/js/103.4ea6f956.js",
    "revision": "6c862fc72533df1f50823876945c02aa"
  },
  {
    "url": "assets/js/104.601b2cb8.js",
    "revision": "efd37707af4707aff0d564d76633ded4"
  },
  {
    "url": "assets/js/105.11ac9550.js",
    "revision": "e36181e1cd48e0d9bafcf7461d2662b5"
  },
  {
    "url": "assets/js/106.07863d41.js",
    "revision": "9fcd58e1cdd11f69801435886f592f41"
  },
  {
    "url": "assets/js/107.99186cb5.js",
    "revision": "38a84af84bb151e3b0c034eba6237eb6"
  },
  {
    "url": "assets/js/108.d8419a90.js",
    "revision": "418a7d9608d9c0e44609650ffbf38744"
  },
  {
    "url": "assets/js/109.7fe13032.js",
    "revision": "875b624d5ab6275da7ead451eb78130c"
  },
  {
    "url": "assets/js/11.9442356f.js",
    "revision": "c63fb51d0b73425258c3e851ce1dfd1f"
  },
  {
    "url": "assets/js/110.c394f8cb.js",
    "revision": "80b455845500b22b8e1f89c54c1b03e7"
  },
  {
    "url": "assets/js/111.1d265001.js",
    "revision": "3491f895fabbc6a68d6d59df8a72bd52"
  },
  {
    "url": "assets/js/112.16dd69be.js",
    "revision": "cf9f5f82a0f0cfcf66f4132b5c643060"
  },
  {
    "url": "assets/js/113.e6932d4f.js",
    "revision": "f3f8a8071702c71ef17cdaa66523b7b8"
  },
  {
    "url": "assets/js/114.51cbe089.js",
    "revision": "1ba64e65cbefa36a5d21571e37220745"
  },
  {
    "url": "assets/js/115.719b1fee.js",
    "revision": "caa7451327fea87491b5be3f9b277da7"
  },
  {
    "url": "assets/js/116.eb57a3e7.js",
    "revision": "3ec97a2fc2ef3e0b107745708430d277"
  },
  {
    "url": "assets/js/117.567acfeb.js",
    "revision": "d0d8afdf8c0e7af478487bb23196cabe"
  },
  {
    "url": "assets/js/118.d2ea5db4.js",
    "revision": "79f1263842a142887a80f884d7e3f2cb"
  },
  {
    "url": "assets/js/119.d743254d.js",
    "revision": "03a866ba6efc96dee68718702e96f095"
  },
  {
    "url": "assets/js/12.d44bf03c.js",
    "revision": "76f3c76aaa771c7caebcac89603c975c"
  },
  {
    "url": "assets/js/120.806d6cfe.js",
    "revision": "e13be6d71ba0c5599887f61d740e6979"
  },
  {
    "url": "assets/js/121.10d08c46.js",
    "revision": "a6b088b385278b332a04e74fd04c1be8"
  },
  {
    "url": "assets/js/122.33ad575f.js",
    "revision": "b1c3d351f9fe9e00a9e6f75f6e2df54a"
  },
  {
    "url": "assets/js/123.b4d388e5.js",
    "revision": "909d840d9dcf5dc1d1ccbf28a8a4c69a"
  },
  {
    "url": "assets/js/124.84097915.js",
    "revision": "85b91fdb44b23633617e8b81d12b2443"
  },
  {
    "url": "assets/js/125.39566637.js",
    "revision": "acad5ebf416fa9c84e0b67b32928f551"
  },
  {
    "url": "assets/js/126.3f220f30.js",
    "revision": "218d4ed693cdebd88ef44f7d575b997b"
  },
  {
    "url": "assets/js/127.5b518f13.js",
    "revision": "80c4b65e41569f614cf564e160a5b881"
  },
  {
    "url": "assets/js/128.c4de5a82.js",
    "revision": "80c543b9742e4c2e41c499b87002ca64"
  },
  {
    "url": "assets/js/129.6fe859c8.js",
    "revision": "203f5999af9d703a00bf8183f6c2eb17"
  },
  {
    "url": "assets/js/13.37b4e409.js",
    "revision": "0d8dbf24d975daa148cd23cb73ac6d82"
  },
  {
    "url": "assets/js/130.4e242d90.js",
    "revision": "69c80917b6ed5b2460108a567222e996"
  },
  {
    "url": "assets/js/131.cc830152.js",
    "revision": "786f0fc4f023773bc72c9233da867494"
  },
  {
    "url": "assets/js/132.7678946f.js",
    "revision": "fb6526c8cb40c3a309c415fe2492cc96"
  },
  {
    "url": "assets/js/133.fecc28ce.js",
    "revision": "f34c381b8b3bd1b594e8f1cced749ba1"
  },
  {
    "url": "assets/js/134.221d8f87.js",
    "revision": "d7d1029b7931a89a825a8bbddc535ed0"
  },
  {
    "url": "assets/js/135.d614b2eb.js",
    "revision": "b1662a7e1a91ec41ac44e620a36eb575"
  },
  {
    "url": "assets/js/136.5d77acfa.js",
    "revision": "3028ceca959445f52f0e8d6c05ac8d9f"
  },
  {
    "url": "assets/js/137.135f8105.js",
    "revision": "39bcc7e919e52c23407d2bbfcd247b05"
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
    "url": "assets/js/20.ef8949fd.js",
    "revision": "b1bbe955c381cfa93af97531e161ec04"
  },
  {
    "url": "assets/js/21.06807f65.js",
    "revision": "c80a4290aba4b26412e9f930f118a7e1"
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
    "url": "assets/js/58.bc2724f1.js",
    "revision": "4c94de4d2856e5b3dc532cb96a2966be"
  },
  {
    "url": "assets/js/59.b78735af.js",
    "revision": "8274aa864556f2397e4b0cce53c5dad2"
  },
  {
    "url": "assets/js/6.71f32179.js",
    "revision": "838d5273ad78002f558c07e7803eb84c"
  },
  {
    "url": "assets/js/60.7220a856.js",
    "revision": "440ff0b040f9d6ca5504493c3dede9f9"
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
    "url": "assets/js/65.fd4dc2d1.js",
    "revision": "1aa4e56d985773e6ad39392c7464b18b"
  },
  {
    "url": "assets/js/66.812929bd.js",
    "revision": "ed4997d7753ecdcb04df914429208a89"
  },
  {
    "url": "assets/js/67.a730a9e2.js",
    "revision": "7ce5b856854794d32cddce8bbcc15252"
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
    "url": "assets/js/78.62c070ae.js",
    "revision": "2184a4a7b0af28063866cd9a587ee6d2"
  },
  {
    "url": "assets/js/79.392ada74.js",
    "revision": "2ba44610ab750ca8f4872e9198d04cb9"
  },
  {
    "url": "assets/js/8.ef31f639.js",
    "revision": "f18ea98bf9111006aa63fbd3b75de756"
  },
  {
    "url": "assets/js/80.9cf65a57.js",
    "revision": "b116c211134666ef83de2e1197a566cf"
  },
  {
    "url": "assets/js/81.3422edce.js",
    "revision": "e928510efabb74701abda55af35a2671"
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
    "url": "assets/js/87.bd917d91.js",
    "revision": "ac4343da6306b2755067f9135be41863"
  },
  {
    "url": "assets/js/88.584d7613.js",
    "revision": "7fc5ef5de02e575b6ce490396dcc3ed4"
  },
  {
    "url": "assets/js/89.778056e6.js",
    "revision": "e8c1e14ab6d546fa4c801583001fa5fd"
  },
  {
    "url": "assets/js/9.8bc2c997.js",
    "revision": "236fc89da7315e97a9ab78ce010cad4c"
  },
  {
    "url": "assets/js/90.ecd752c1.js",
    "revision": "5693511899ab0268fc6c68ab4d4ae39c"
  },
  {
    "url": "assets/js/91.618fd25f.js",
    "revision": "201ce6efa9e3c439d7c97682cfe04341"
  },
  {
    "url": "assets/js/92.479c04da.js",
    "revision": "b8e5d8f5d3bed768943ad58714d4f962"
  },
  {
    "url": "assets/js/93.c58b9b98.js",
    "revision": "b084b16137d9b334b8e731a88bc3c592"
  },
  {
    "url": "assets/js/94.91b412ed.js",
    "revision": "557effb4ea996ed2c61d7ce2e2f38677"
  },
  {
    "url": "assets/js/95.8ce7323f.js",
    "revision": "78cc1fa59d4f8f7d8051ff0d0269f328"
  },
  {
    "url": "assets/js/96.5acd2807.js",
    "revision": "fa9cc1274c1b995ff9f8feabe1f943fc"
  },
  {
    "url": "assets/js/97.4e44fb3e.js",
    "revision": "ffa8e4b25a75d67c1b3eb836b05963f9"
  },
  {
    "url": "assets/js/98.199a211d.js",
    "revision": "6723dc072747da8c920665798727640f"
  },
  {
    "url": "assets/js/99.f07f4196.js",
    "revision": "f29bc9752a066754fe37b3301e203973"
  },
  {
    "url": "assets/js/app.5ee577da.js",
    "revision": "76385c8a53717cf74622e4a49291a3be"
  },
  {
    "url": "author.jpeg",
    "revision": "7e1bfc6337e85b76f0f6e95859ed93d6"
  },
  {
    "url": "basis/algorithms/index.html",
    "revision": "a9de533dd7292d0051a0967878bbfec9"
  },
  {
    "url": "basis/algorithms/t1-buble-sort.html",
    "revision": "f300ed7ec0f1c84654e195739b3a5513"
  },
  {
    "url": "basis/algorithms/t2-selection-sort.html",
    "revision": "231ca91eed362a750fbb602da985a3de"
  },
  {
    "url": "basis/algorithms/t3-insertion-sort.html",
    "revision": "b62370652a5554d13181e32085c20e65"
  },
  {
    "url": "basis/algorithms/t4-shell-sort.html",
    "revision": "3049948cf3d724805a9380d79243ed19"
  },
  {
    "url": "basis/algorithms/t5-quick-sort.html",
    "revision": "887ca985300a3784dade5900b94bb83a"
  },
  {
    "url": "basis/algorithms/t6-heap-sort.html",
    "revision": "722190704f3957212392b5a039c3580f"
  },
  {
    "url": "basis/algorithms/t7-merge-sort.html",
    "revision": "a2d38be9d726bc33c9c766ac6057c34f"
  },
  {
    "url": "basis/algorithms/t8-radix-sort.html",
    "revision": "b9e72d7d4008b6415968a59f21782ae3"
  },
  {
    "url": "basis/algorithms/t9-count-sort.html",
    "revision": "18887f8bb5ed8787d5e8caf3b8fd1b1f"
  },
  {
    "url": "basis/algorithms/u1-bucket-sort.html",
    "revision": "a7c3e0af591bba0a379b35dfe565fa0f"
  },
  {
    "url": "basis/design/0. Class Releation.html",
    "revision": "5e163f99c82a6f7e472b586780a23992"
  },
  {
    "url": "basis/design/0.1 Design Principles.html",
    "revision": "211d7d52b46b4de607327f3cdcf592e2"
  },
  {
    "url": "basis/design/1. Factory Pattern.html",
    "revision": "a7389901f497e8f79cca046da29689fd"
  },
  {
    "url": "basis/design/10. Facade Pattern.html",
    "revision": "3b102f9c618f00823562df774c2455fd"
  },
  {
    "url": "basis/design/11. Flyweight Pattern.html",
    "revision": "bda2ea955f6d2c531a89683736ff250b"
  },
  {
    "url": "basis/design/12. Proxy Pattern.html",
    "revision": "328fc035a862b7d003624012f48f2f0c"
  },
  {
    "url": "basis/design/13. Chain of Responsibility Pattern.html",
    "revision": "3c3554808ed0a946f3b31052396fa525"
  },
  {
    "url": "basis/design/14. Command Pattern.html",
    "revision": "30d51baa93267370873244a9d23d8617"
  },
  {
    "url": "basis/design/15. Interpreter Pattern.html",
    "revision": "820e27a404a32348d2d7f29dfbc9edc0"
  },
  {
    "url": "basis/design/16. Iterator Pattern.html",
    "revision": "762e69c6f74a6eb7d709f63755b775c4"
  },
  {
    "url": "basis/design/17. Mediator Pattern.html",
    "revision": "b394f89bdf5191a400d2d96865f7a8c5"
  },
  {
    "url": "basis/design/18. Memento Pattern.html",
    "revision": "1c912553035e1b6253da2b8ff05c8838"
  },
  {
    "url": "basis/design/19. Observer Pattern.html",
    "revision": "ef2181f214f1b77033e34a13d3a113c0"
  },
  {
    "url": "basis/design/2. Builder Pattern.html",
    "revision": "5c287e7345815147abc0b4bca778bccc"
  },
  {
    "url": "basis/design/20. State Pattern.html",
    "revision": "ec480309b215d4c6bd1224454e245f62"
  },
  {
    "url": "basis/design/21. Null Object Pattern.html",
    "revision": "7bada266d586ca6228d8bfde063f6537"
  },
  {
    "url": "basis/design/22. Strategy Pattern.html",
    "revision": "50646e306ae72b7968ebfeba4d5b63c1"
  },
  {
    "url": "basis/design/23. Template Pattern.html",
    "revision": "6faa6932d982d23202b8f8392fb00483"
  },
  {
    "url": "basis/design/24. Visitor Pattern.html",
    "revision": "ff0b6a9c069c6486ff585101436d4143"
  },
  {
    "url": "basis/design/3. Prototype Pattern.html",
    "revision": "7d99beb659611524d3976369e388a7c9"
  },
  {
    "url": "basis/design/4.Singleton Pattern.html",
    "revision": "dc25d2ed6d86cf9d59bd005c405a7060"
  },
  {
    "url": "basis/design/5. Adapter Pattern.html",
    "revision": "4e72a82626ebc455c3da5836d7ff6255"
  },
  {
    "url": "basis/design/6. Bridge Pattern.html",
    "revision": "cc2aa5b8bdabb645d98a8c9097189fa2"
  },
  {
    "url": "basis/design/7. Filter、Criteria Pattern.html",
    "revision": "c6330b8e3dc2d3628b4fff6159b3205c"
  },
  {
    "url": "basis/design/8. Composite Pattern.html",
    "revision": "9635bf1cf79b95f229094729cf01f1fc"
  },
  {
    "url": "basis/design/9. Decorator Pattern.html",
    "revision": "db114956de8523594aaea6129698a2bb"
  },
  {
    "url": "basis/design/index.html",
    "revision": "ba318569991eb0c903a9108c65ca4dd7"
  },
  {
    "url": "basis/index/index.html",
    "revision": "728d538516d8da2f6fcbf56d3c9c0d51"
  },
  {
    "url": "basis/os/index.html",
    "revision": "dc7a1f3603b97533e59ee2467932b245"
  },
  {
    "url": "book/index.html",
    "revision": "460f7665f6a9753932012fb9e2d78115"
  },
  {
    "url": "book/t-find-books.html",
    "revision": "fe59f51ddc093423df3b1a5ad6fd283e"
  },
  {
    "url": "categories/index.html",
    "revision": "7f4fd115674cbee48cd3990510f09b73"
  },
  {
    "url": "figma/index.html",
    "revision": "364ce66ce40cd75a46fdab29174cf27d"
  },
  {
    "url": "flutter/index.html",
    "revision": "80b949a69f85fa2a236fe044eb89d798"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "14c842703ceefe2d033efeb33d40991f"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "caf37719deeb8d86e0909bfc6f649027"
  },
  {
    "url": "flutter/t3-messages.html",
    "revision": "44627633f71bd26309ebd8d8037ffbf6"
  },
  {
    "url": "flutter/t3-mixin.html",
    "revision": "b8e2f7643c52acefe2dc36a3cd501d81"
  },
  {
    "url": "flutter/t4-lifecycle.html",
    "revision": "504bcf8e92bdacc98e086d1d9ba8b360"
  },
  {
    "url": "flutter/t5-flutter-web-deploy.html",
    "revision": "6f2c295eaf7eb3f5ba59cd756bd91c74"
  },
  {
    "url": "flutter/t6-docker-web-deploy.html",
    "revision": "3ef9711719f12974ae29e54ee9f68367"
  },
  {
    "url": "flutter/t7-fvm.html",
    "revision": "0eec488976bfd4a346bb79567e2ed8a0"
  },
  {
    "url": "flutter/t8-const.html",
    "revision": "ed7c4e7a6d250a7a0a34bd52bcf523e2"
  },
  {
    "url": "flutter/t9-logs.html",
    "revision": "2e1ebfdad66ebafd18370a2527caea90"
  },
  {
    "url": "flutter/u10-fvm-flutter2.html",
    "revision": "4682d820c083cf74c5808ce9096e8f22"
  },
  {
    "url": "flutter/u11-flutter-render.html",
    "revision": "9ee7173cff4c31e9b478842f655e5b2a"
  },
  {
    "url": "flutter/u12-flutter-create-w.html",
    "revision": "ee7f96ecd65a704d11e8765259f18c52"
  },
  {
    "url": "flutter/u12-flutter-web-01.html",
    "revision": "25db828a14bcf1445db04787da58615b"
  },
  {
    "url": "flutter/u12-flutter-web-02.html",
    "revision": "64ec5ac6305b03e0df643ed276e7d574"
  },
  {
    "url": "flutter/u13-sliverappbar.html",
    "revision": "5c16d1d498bd17262552437e12bbfafb"
  },
  {
    "url": "flutter/u14-navbar-color.html",
    "revision": "098c0c26f41fdbd5ac0134b2dc034403"
  },
  {
    "url": "flutter/u15-custom-nabar.html",
    "revision": "52ec9c9c7ad0ec2f6f36ff1beb65b5b3"
  },
  {
    "url": "flutter/u16-shape.html",
    "revision": "cd12e34e5a69d42aa4e0203d24653b9f"
  },
  {
    "url": "haskell/1-install.html",
    "revision": "5ee8f0a78326c07505d3e0c31cde8730"
  },
  {
    "url": "haskell/2-vscode.html",
    "revision": "23d4dad5ace5c48f1dbce661ff41d3b3"
  },
  {
    "url": "haskell/3-pktool.html",
    "revision": "098363f23c66a3b9441ee8c304ece851"
  },
  {
    "url": "haskell/4-digui.html",
    "revision": "6f3884365c10150bc0a97a52fcc0c1d0"
  },
  {
    "url": "haskell/index.html",
    "revision": "ec9f85f2f2be3b97988c52e977754495"
  },
  {
    "url": "index.html",
    "revision": "720e7b809d8075042bb0bfdd836a0c33"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "swift/fp/index.html",
    "revision": "9c01dc1ecefa0a6cd18fc6634e739464"
  },
  {
    "url": "swift/fp/t1-fp.html",
    "revision": "6659407e8ce9fc82e31c6043e2cebc59"
  },
  {
    "url": "swift/fp/t2-lens.html",
    "revision": "dfda29642bdee8599e50f461aa72d07c"
  },
  {
    "url": "swift/fp/t3-json1.html",
    "revision": "cb7e0cfb9ee46efbec5be62f15045464"
  },
  {
    "url": "swift/fp/t3-json2.html",
    "revision": "f596c4a7ad8e1c6735cc1b188fc50151"
  },
  {
    "url": "swift/fp/t3-json3.html",
    "revision": "0f3d3e079e93afc0619a31e3f17895ff"
  },
  {
    "url": "swift/fp/t4-length.html",
    "revision": "255eb9dff4ee428880a093e6fa6d7935"
  },
  {
    "url": "swift/ios/index.html",
    "revision": "f4ae7b0f26bea93987f50db9893015f3"
  },
  {
    "url": "swift/ios/t1-pod-webp.html",
    "revision": "3229934a68706f5aec38244591fe0ddd"
  },
  {
    "url": "swift/ios/t2-youhua.html",
    "revision": "4d854c60b4276a22d364439f1c42c752"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "e3d234a509c99ddae020bc1be713832a"
  },
  {
    "url": "swift/swiftui/t1-principle.html",
    "revision": "33b5e007137423f096225aaada6efde0"
  },
  {
    "url": "swift/swiftui/t1.0-propertywrapper.html",
    "revision": "c93d07181d6f41596118040c8b65e548"
  },
  {
    "url": "swift/swiftui/t1.1-functionBuilder.html",
    "revision": "6af92140b0a046d865880647c86f70c3"
  },
  {
    "url": "swift/swiftui/t1.2-propertys.html",
    "revision": "8229df393573afc912aacb1cdf57580e"
  },
  {
    "url": "swift/swiftui/t2-views_control.html",
    "revision": "215f842546518e0c975ef0eaa95d5c4b"
  },
  {
    "url": "swift/swiftui/t3-layout_presentation.html",
    "revision": "8db4fda830e795ce2fde5a3e92c84ace"
  },
  {
    "url": "swift/swiftui/t4-uikit_in_swiftui.html",
    "revision": "3a90bbb0f4ba8ae56038598667ee46c4"
  },
  {
    "url": "swift/swiftui/t5-swiftui_in_uikit.html",
    "revision": "e8d7dc4c5f8a206c774905db7d18b55d"
  },
  {
    "url": "swift/swiftui/t6-viewmodifier.html",
    "revision": "4c445539a38b4ba52aae2c212d7dddf3"
  },
  {
    "url": "swift/swiftui/t7-geometryreader.html",
    "revision": "09e8522444075db9e1e53ed09771fac2"
  },
  {
    "url": "swift/swiftui/t8-preferencekey.html",
    "revision": "110a7413ffdfb6425e693ff51ccdebbe"
  },
  {
    "url": "swift/tips/index.html",
    "revision": "4a0523a0491577a59f3eaf2e4a60cd58"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "30c1e3f53ce3ac419a41c9f08d394f19"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "d3799c1e7b29e163708d58ecbc591a7e"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "89705ae2e86775330f5e4036e17d4134"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "b96fc8aef3fe8c765d0be2d1693a9a08"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "21a7e76dfdd16457fa4880cf5c8a48a2"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "0cae3beab06d0a885ed5f6d508814387"
  },
  {
    "url": "swift/vapor/t6-say-oldbirds.html",
    "revision": "8fb806e873581d49877e579348a6e27d"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "fca1a650c0b2f8abd766b99f130865af"
  },
  {
    "url": "swift/vapor/u-11-auth.html",
    "revision": "b71fd44ab3123748296257efba3c1b5f"
  },
  {
    "url": "swift/vapor/u-12-permission.html",
    "revision": "b2fa06d3d2f20408f267c0d0590246b8"
  },
  {
    "url": "swift/vapor/v-20-read-code.html",
    "revision": "469e7d166ba3ea0815656addc9cf5008"
  },
  {
    "url": "swift/vapor/v-21-io.html",
    "revision": "cf4e5f7d9608a5de40e95ebb7461da10"
  },
  {
    "url": "swift/vapor/v-22-bio2.html",
    "revision": "d41382704871dd55f1dee4b76fc8498b"
  },
  {
    "url": "swift/vapor/v-23-swiftnio-do-text.html",
    "revision": "d995f8423a0708ead2e19be2af8bf26d"
  },
  {
    "url": "swift/vapor/v-24-swift-zhan-package.html",
    "revision": "a7fc695595e1d4220a1b0de98fafb4eb"
  },
  {
    "url": "swift/vapor/v-25-swiftnio-do-serisize.html",
    "revision": "0f7cab092ad653484ccda4b25ed72477"
  },
  {
    "url": "swift/vapor/v-26-swfitnio-grpc-1.html",
    "revision": "e964611df8d152f207cf7933517eb40c"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/ai/index.html",
    "revision": "e789071ef9bebb6ff6c19c694ea1e009"
  },
  {
    "url": "tag/flutter/index.html",
    "revision": "b18a4b11efebe9844d84de7760e2295c"
  },
  {
    "url": "tag/flutter/page/2/index.html",
    "revision": "aadcb6ff96033276c2cbbe3398961c1c"
  },
  {
    "url": "tag/git/index.html",
    "revision": "1d3d5fb8741885f3ed1f09009d062b96"
  },
  {
    "url": "tag/haskell/index.html",
    "revision": "351e68ff106ffa813754e227f80e189c"
  },
  {
    "url": "tag/html/index.html",
    "revision": "e673b5494c8681fdeafc2f08eb506f4d"
  },
  {
    "url": "tag/index.html",
    "revision": "eff8be42aa9c2b314bccc530b20a741c"
  },
  {
    "url": "tag/ios/index.html",
    "revision": "f0af2ae25aaf60dae8b4b63d41adb97d"
  },
  {
    "url": "tag/json/index.html",
    "revision": "9d838f586954b24284a6a265154ec765"
  },
  {
    "url": "tag/plantuml/index.html",
    "revision": "28d8c5736c6d6d8378f7fa65b0ea01d7"
  },
  {
    "url": "tag/swift/index.html",
    "revision": "613e0b2231bafb37798565b7db558823"
  },
  {
    "url": "tag/swift/page/2/index.html",
    "revision": "dfcf6c679f929affc998f1d2ae5c69fa"
  },
  {
    "url": "tag/swift/page/3/index.html",
    "revision": "0a9eca7d9b419e50f88ab2871846c98c"
  },
  {
    "url": "tag/swift/page/4/index.html",
    "revision": "33c8d3e801e580a3faeae13a24accbea"
  },
  {
    "url": "tag/swiftnio/index.html",
    "revision": "37cb4549731080ac5c9a0de5d44500ad"
  },
  {
    "url": "tag/swiftui/index.html",
    "revision": "670ecc1b8bbd0b52cec76524cc2076f5"
  },
  {
    "url": "tag/swiftui/page/2/index.html",
    "revision": "bbc2b75bdb623f2eddf278ba03e73799"
  },
  {
    "url": "tag/tips/index.html",
    "revision": "5eb3ea53a1cfda61f50f5429c03e7f93"
  },
  {
    "url": "tag/tools/index.html",
    "revision": "250393fb02f0f45b3bfb57c4db6e1f8b"
  },
  {
    "url": "tag/vapor/index.html",
    "revision": "6d053c634d18c463190dd666d6bb5fb1"
  },
  {
    "url": "tag/vapor/page/2/index.html",
    "revision": "5f23897ece56affe0f253601874f1990"
  },
  {
    "url": "tag/vscode/index.html",
    "revision": "3d8800d9698089305d5e28675d1d90a1"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "dac5de8957a0da3842300e9e1621e828"
  },
  {
    "url": "tag/yaml/index.html",
    "revision": "90ca96f3b53d8a541d055a9d4cc508e0"
  },
  {
    "url": "tag/书单/index.html",
    "revision": "5f374b59edb020a9673e11bf0cb8647a"
  },
  {
    "url": "tag/函数式编程/index.html",
    "revision": "ef66b52cce725eda815605a9518af735"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "11af9e40e599ea5ec5839419b3581ce1"
  },
  {
    "url": "tag/基础/page/2/index.html",
    "revision": "e5f8c67edca25cebcfaaac27f83ee126"
  },
  {
    "url": "tag/基础/page/3/index.html",
    "revision": "bad75b6fd8f594963843d00689b9af58"
  },
  {
    "url": "tag/基础/page/4/index.html",
    "revision": "399e11f4127cb6776bb7f0f72ed62154"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "86eaa952fbf229cab58d26ceb31868e5"
  },
  {
    "url": "tag/数据结构与算法/page/2/index.html",
    "revision": "dbefc0e170ef65e9b3c23d1d0bae027c"
  },
  {
    "url": "tag/设计模式/index.html",
    "revision": "ca0ecfe530543d12c816ea523d324d97"
  },
  {
    "url": "tag/设计模式/page/2/index.html",
    "revision": "996be1cbfc252811cc7c01b0e9fba473"
  },
  {
    "url": "tag/设计模式/page/3/index.html",
    "revision": "a58ef33b6d64f63265b83d406415654d"
  },
  {
    "url": "timeline/index.html",
    "revision": "a261a07b3d971a48011dde16efddd416"
  },
  {
    "url": "tools/git/index.html",
    "revision": "6558f1567e779f1a5ab7fffa31035b00"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "f6f1c805dc853d33639b5ba224e625f5"
  },
  {
    "url": "tools/git/t2-git-submodule.html",
    "revision": "d2ed545d4c22b299b14b6a8eed60be78"
  },
  {
    "url": "tools/html/index.html",
    "revision": "40ea3feece93d0eaeaeaf3282393aa1d"
  },
  {
    "url": "tools/plantuml/index.html",
    "revision": "5e18aa7e2e0704283622eca6c2668bf6"
  },
  {
    "url": "tools/plantuml/t1-sequence-diagram.html",
    "revision": "8433a3f9e68485ac4b81d83df4f92981"
  },
  {
    "url": "tools/plantuml/t2-class-diagram.html",
    "revision": "2afb8dc87e67d297eade3cd6fcdccab8"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "cf61a563d5351afd789ebf5a50c3baf1"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "d9170e85d4110d910bdbff7ab98333fa"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "77b1b5f55974421a087ecda72b231da1"
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
