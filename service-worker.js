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
    "revision": "ceb927becabe4c4b64627fcf25081ecc"
  },
  {
    "url": "about/app/index.html",
    "revision": "8f1adde8ba75c6032b25957c83850522"
  },
  {
    "url": "about/app/t1-protocol.html",
    "revision": "a81b4cfdbb38f4b803cae22dd5fa0925"
  },
  {
    "url": "about/app/t2-secrect.html",
    "revision": "9ac66343bd098dbe782b46a86b2cbefb"
  },
  {
    "url": "about/app/t3-miniapps-sec.html",
    "revision": "f0bb672a69c00cc0c1f8bc83ff79f19e"
  },
  {
    "url": "about/index/index.html",
    "revision": "d906acc8c9c233ba13d0fa930a7b1563"
  },
  {
    "url": "ai/index.html",
    "revision": "5f3ab9af8576d6ecc666e5f3103039a1"
  },
  {
    "url": "ai/t1-gzj.html",
    "revision": "b14a71e3bf77b3bf274905abfdd43800"
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
    "url": "assets/js/112.7d49ba3a.js",
    "revision": "e18ef03cc83dc5e931ab7f973dc444dc"
  },
  {
    "url": "assets/js/113.c9f9aa50.js",
    "revision": "51b80c8651f8b93f9f6acfe5d8a99e6c"
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
    "url": "assets/js/117.058a15c7.js",
    "revision": "3c8ea4565baf8eb6542daca3d74faa2d"
  },
  {
    "url": "assets/js/118.b42ca000.js",
    "revision": "71b302f01bc624d23ab6b7514dde4362"
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
    "url": "assets/js/124.133adedd.js",
    "revision": "883c67c798ab78dc5516e55c8dbd54a8"
  },
  {
    "url": "assets/js/125.39566637.js",
    "revision": "acad5ebf416fa9c84e0b67b32928f551"
  },
  {
    "url": "assets/js/126.8e3451bb.js",
    "revision": "4835bf3e9cbb123b53d4ad3ef1b772df"
  },
  {
    "url": "assets/js/127.5b518f13.js",
    "revision": "80c4b65e41569f614cf564e160a5b881"
  },
  {
    "url": "assets/js/128.a372cec3.js",
    "revision": "14c7f208362d9cf393c9fd371ebbaee7"
  },
  {
    "url": "assets/js/129.ddd8cfb6.js",
    "revision": "0011c7562a7133984a23004730cd47fa"
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
    "url": "assets/js/16.ed2c7bc7.js",
    "revision": "1f65114e5d7600e9ec3be8ced8f23038"
  },
  {
    "url": "assets/js/17.b44a8b21.js",
    "revision": "4c63c6a186aa57a988440354fc81328a"
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
    "url": "assets/js/24.8e1d3f1d.js",
    "revision": "382d05452221cdf8ab867d32e8163cf0"
  },
  {
    "url": "assets/js/25.eedb4bb0.js",
    "revision": "20f0280bc798d5b55ed18d0009a14992"
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
    "url": "assets/js/58.af30d83a.js",
    "revision": "837007e8b60a7edb4a33c5e4bac04249"
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
    "url": "assets/js/92.07178fcf.js",
    "revision": "d6f80e3c8152b388833a82392479c04e"
  },
  {
    "url": "assets/js/93.aebc11e6.js",
    "revision": "a5397857329c9edad0aac5ec1da624da"
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
    "url": "assets/js/app.623373f1.js",
    "revision": "064d0f4d5aaef4533a1b0a4545a3e9f2"
  },
  {
    "url": "author.jpeg",
    "revision": "7e1bfc6337e85b76f0f6e95859ed93d6"
  },
  {
    "url": "basis/algorithms/index.html",
    "revision": "2c2dc013eb85351cb0f9e44a0ef9faab"
  },
  {
    "url": "basis/algorithms/t1-buble-sort.html",
    "revision": "9dc3466bccab7dd92a6b661f6cc89fb4"
  },
  {
    "url": "basis/algorithms/t2-selection-sort.html",
    "revision": "57ab8b9caff29f1f46905c44ddb7fc45"
  },
  {
    "url": "basis/algorithms/t3-insertion-sort.html",
    "revision": "84df447a66e22b66d87728d7fae5b2d6"
  },
  {
    "url": "basis/algorithms/t4-shell-sort.html",
    "revision": "1bc4db3f2a1803f68cd32f192a466c76"
  },
  {
    "url": "basis/algorithms/t5-quick-sort.html",
    "revision": "7afe142a0c5c0919375d376606ae1481"
  },
  {
    "url": "basis/algorithms/t6-heap-sort.html",
    "revision": "9a00ab1b7271da7c95af1bfc8530e8e4"
  },
  {
    "url": "basis/algorithms/t7-merge-sort.html",
    "revision": "af818d1d04d62ac9713faf7815aada74"
  },
  {
    "url": "basis/algorithms/t8-radix-sort.html",
    "revision": "4b82411ab06e74012ed763395943a259"
  },
  {
    "url": "basis/algorithms/t9-count-sort.html",
    "revision": "0fd062dfbc188e2e82ef5f34258d9fd7"
  },
  {
    "url": "basis/algorithms/u1-bucket-sort.html",
    "revision": "7da96784813f70c9348b6eb177d53109"
  },
  {
    "url": "basis/design/0. Class Releation.html",
    "revision": "de2e07b5e9aae7e56d82062753fb3937"
  },
  {
    "url": "basis/design/0.1 Design Principles.html",
    "revision": "4d4a196f3bf8ffbce407aadfc7f15deb"
  },
  {
    "url": "basis/design/1. Factory Pattern.html",
    "revision": "eab81e5c98c93a0c18218c9156e78ea8"
  },
  {
    "url": "basis/design/10. Facade Pattern.html",
    "revision": "e8399de298b82e7600ffb3eb2f1ac161"
  },
  {
    "url": "basis/design/11. Flyweight Pattern.html",
    "revision": "111c12a23920122a6300fb81dcbcfc35"
  },
  {
    "url": "basis/design/12. Proxy Pattern.html",
    "revision": "4c282ee02411eff3fc89cc7435023899"
  },
  {
    "url": "basis/design/13. Chain of Responsibility Pattern.html",
    "revision": "dd1b053cc5cf0b3d5951b1089b9df5b1"
  },
  {
    "url": "basis/design/14. Command Pattern.html",
    "revision": "218038b69e3255f5f619aeec37864846"
  },
  {
    "url": "basis/design/15. Interpreter Pattern.html",
    "revision": "ee2f2f1288033eb4ef293463c9a6134e"
  },
  {
    "url": "basis/design/16. Iterator Pattern.html",
    "revision": "10164386e871eb0f8d78220e9b81f4be"
  },
  {
    "url": "basis/design/17. Mediator Pattern.html",
    "revision": "837385e1df95ff705c5ce565d86071f9"
  },
  {
    "url": "basis/design/18. Memento Pattern.html",
    "revision": "d82d57d793c54b351c050667a64f094d"
  },
  {
    "url": "basis/design/19. Observer Pattern.html",
    "revision": "4b5e51c1168e0ccdc30b15f29d1d6f6d"
  },
  {
    "url": "basis/design/2. Builder Pattern.html",
    "revision": "fbb2d729204858fe200958c11f7a3623"
  },
  {
    "url": "basis/design/20. State Pattern.html",
    "revision": "e69bce9bf70531acf947eb6dd2b737a9"
  },
  {
    "url": "basis/design/21. Null Object Pattern.html",
    "revision": "94dce1cd1cec766d876005562d734b8d"
  },
  {
    "url": "basis/design/22. Strategy Pattern.html",
    "revision": "bffe40fd98d5a08b6978e08114b32b12"
  },
  {
    "url": "basis/design/23. Template Pattern.html",
    "revision": "4f5703aebcf677d5b68d7f8cc4e1988b"
  },
  {
    "url": "basis/design/24. Visitor Pattern.html",
    "revision": "da4b77265f225d83123260e5e733f63c"
  },
  {
    "url": "basis/design/3. Prototype Pattern.html",
    "revision": "9e868cd5c32172a7993d771c0559716a"
  },
  {
    "url": "basis/design/4.Singleton Pattern.html",
    "revision": "12c01f1cf13dced802cbc9e90130ff7a"
  },
  {
    "url": "basis/design/5. Adapter Pattern.html",
    "revision": "5490b3d9de394d22b295b8fdd5281a53"
  },
  {
    "url": "basis/design/6. Bridge Pattern.html",
    "revision": "7aaebe03a0a2f834296a5ce1f6285282"
  },
  {
    "url": "basis/design/7. Filter、Criteria Pattern.html",
    "revision": "efc450ff66234ea316b684bcef31c26a"
  },
  {
    "url": "basis/design/8. Composite Pattern.html",
    "revision": "a81137c015f6b772fa048695ad3af217"
  },
  {
    "url": "basis/design/9. Decorator Pattern.html",
    "revision": "ed8af107d6ba1b390f26ade980e293ed"
  },
  {
    "url": "basis/design/index.html",
    "revision": "b0de2f2ccc2fa873f91a12678d0be632"
  },
  {
    "url": "basis/index/index.html",
    "revision": "2d9ee1de3dce6cf8c279a628502f7fa6"
  },
  {
    "url": "basis/os/index.html",
    "revision": "aff04205b3bc70c03812aa2f33f467c2"
  },
  {
    "url": "book/index.html",
    "revision": "db59e3f6e7d8a9efe18fc784dca847b2"
  },
  {
    "url": "book/t-find-books.html",
    "revision": "ec4563165afb87d4c2d67c9d47cb97e2"
  },
  {
    "url": "categories/index.html",
    "revision": "221e3ba10084f44fe605355e4132e397"
  },
  {
    "url": "figma/index.html",
    "revision": "5b9c7aca2531067a7bf2bd2079ef4461"
  },
  {
    "url": "flutter/index.html",
    "revision": "233ecc3d9954a353ecd7a065809f90fe"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "81390f883dce525f8a339589b1ec7a0d"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "fb0ab1917e2e1bcbc10fdd392d21776f"
  },
  {
    "url": "flutter/t3-messages.html",
    "revision": "190c2809f6df42192ebde81de420b024"
  },
  {
    "url": "flutter/t3-mixin.html",
    "revision": "803a8b36477714050fb45eeeed340a55"
  },
  {
    "url": "flutter/t4-lifecycle.html",
    "revision": "4871b95b42aab6520903ef014d561a6e"
  },
  {
    "url": "flutter/t5-flutter-web-deploy.html",
    "revision": "ebd5afbb945dfa5f187fd5c0255a3d0f"
  },
  {
    "url": "flutter/t6-docker-web-deploy.html",
    "revision": "5220adea4ff2eb0cc8cec46aa4e9e848"
  },
  {
    "url": "flutter/t7-fvm.html",
    "revision": "42eccc0be338f770ca46dec409c294a3"
  },
  {
    "url": "flutter/t8-const.html",
    "revision": "4060c69da88835df8d9010c3c3d354bd"
  },
  {
    "url": "flutter/t9-logs.html",
    "revision": "2345a37d69777c86496dcd1b16ceba94"
  },
  {
    "url": "flutter/u10-fvm-flutter2.html",
    "revision": "c371987c80b9ddc41e7b8e2d913f2452"
  },
  {
    "url": "flutter/u11-flutter-render.html",
    "revision": "78683debbdf5f048e650370bc48832dc"
  },
  {
    "url": "flutter/u12-flutter-create-w.html",
    "revision": "4401a892b0c4b629fe23e75e7f7f078b"
  },
  {
    "url": "flutter/u12-flutter-web-01.html",
    "revision": "495910eb1cf1618c2bf1fd0918e7d691"
  },
  {
    "url": "flutter/u12-flutter-web-02.html",
    "revision": "6026cb15534fa7b498bf09e27f5dd758"
  },
  {
    "url": "flutter/u13-sliverappbar.html",
    "revision": "75decdc456e59acbf0f1ffcd1d42f79e"
  },
  {
    "url": "flutter/u14-navbar-color.html",
    "revision": "55ef914de66d0242bdd615def9dc9f67"
  },
  {
    "url": "flutter/u15-custom-nabar.html",
    "revision": "842a56b98685d149fb067d202c7ad5c9"
  },
  {
    "url": "flutter/u16-shape.html",
    "revision": "50df4c81df8ed5c1dd17d254821695cc"
  },
  {
    "url": "haskell/1-install.html",
    "revision": "92a8942f773df539e37735c320908593"
  },
  {
    "url": "haskell/2-vscode.html",
    "revision": "8dfa39f5ef506dfe222d4c9b9fe2fc55"
  },
  {
    "url": "haskell/3-pktool.html",
    "revision": "fdbb20d915dc2c83aa6668ad719653c2"
  },
  {
    "url": "haskell/4-digui.html",
    "revision": "b6572d328f1e2ceba0ae69d88966277b"
  },
  {
    "url": "haskell/index.html",
    "revision": "2f81b00e0a55494418f99386fd3306ca"
  },
  {
    "url": "index.html",
    "revision": "55585eb7838c3e54ced3a73643e8e960"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "swift/fp/index.html",
    "revision": "facd26d65c133283804b3c3234a8ab25"
  },
  {
    "url": "swift/fp/t1-fp.html",
    "revision": "44bf985011e04b3745acc9094da263f9"
  },
  {
    "url": "swift/fp/t2-lens.html",
    "revision": "0f2a4f07fee4bf159b09592cd5c8f590"
  },
  {
    "url": "swift/fp/t3-json1.html",
    "revision": "a08ca611d63dab4b2a4ea03bb0002276"
  },
  {
    "url": "swift/fp/t3-json2.html",
    "revision": "e6a04434c48c0b7d0ee4fb8beed775f8"
  },
  {
    "url": "swift/fp/t3-json3.html",
    "revision": "b552a9a3f1fe6fa3d78d59de6da27b75"
  },
  {
    "url": "swift/fp/t4-length.html",
    "revision": "8667775f068426d7fffe588ac7d499b5"
  },
  {
    "url": "swift/ios/index.html",
    "revision": "5f58e870374c8072c5b92584bba45cf0"
  },
  {
    "url": "swift/ios/t1-pod-webp.html",
    "revision": "36523d7608d1192796028f49e49a237d"
  },
  {
    "url": "swift/ios/t2-youhua.html",
    "revision": "9aeededf6d883c3104baf214baff1df2"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "42b5eecacacc640ed568a2955a0b3200"
  },
  {
    "url": "swift/swiftui/t1-principle.html",
    "revision": "28e9343a1351419f4600e31551060d6c"
  },
  {
    "url": "swift/swiftui/t1.0-propertywrapper.html",
    "revision": "0f00d5c1ccd2d5c4b9735ac7eb63d3b1"
  },
  {
    "url": "swift/swiftui/t1.1-functionBuilder.html",
    "revision": "3a0ce177b9f618c3d8bdc3f47b5cee38"
  },
  {
    "url": "swift/swiftui/t1.2-propertys.html",
    "revision": "81cb484504eb833c04ec5514dc2d0fb9"
  },
  {
    "url": "swift/swiftui/t2-views_control.html",
    "revision": "8ba2b1508fa1bcabab742ed4ad762344"
  },
  {
    "url": "swift/swiftui/t3-layout_presentation.html",
    "revision": "3f5aa8d0eb5f2b8eba2415a8ddda1651"
  },
  {
    "url": "swift/swiftui/t4-uikit_in_swiftui.html",
    "revision": "b6433b4df7d5fb1d09d107f09d2af195"
  },
  {
    "url": "swift/swiftui/t5-swiftui_in_uikit.html",
    "revision": "11e08abd9807da4cdecbc4cedbf2a6c4"
  },
  {
    "url": "swift/swiftui/t6-viewmodifier.html",
    "revision": "b631722ff53775ffc26fe3364f3e2acc"
  },
  {
    "url": "swift/swiftui/t7-geometryreader.html",
    "revision": "c379d782cd9fcd36353bb8968c7748f3"
  },
  {
    "url": "swift/swiftui/t8-preferencekey.html",
    "revision": "dfa81fed246fc09dbfc38e0a80c99e2f"
  },
  {
    "url": "swift/tips/index.html",
    "revision": "4af78284065e4c2a878bfcdfd8c77c46"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "ecf9f3886189e9986a3adc9211adab68"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "7e2ee0e2e673da15f3dff0c04fdc94d8"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "417307d3d39e4525c86fc0b7afd86ee9"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "45f901f85e9aae709a8ca67ea6f033fe"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "bbb0d00e47777fae7b5056da8ae35972"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "60596a455520e2e8d6a578c75202c4ab"
  },
  {
    "url": "swift/vapor/t6-say-oldbirds.html",
    "revision": "658aeca8d2e5812e4811b8a8d60de979"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "805cbcddc09e576802813e72523c3757"
  },
  {
    "url": "swift/vapor/u-11-auth.html",
    "revision": "7c4de32b93a4a279b79e83284b6f4e13"
  },
  {
    "url": "swift/vapor/u-12-permission.html",
    "revision": "14431d8ffdc76f9ab2599e4f3c89a4a1"
  },
  {
    "url": "swift/vapor/v-20-read-code.html",
    "revision": "d49b0d339e6ad084d0f8ecbabf19fd31"
  },
  {
    "url": "swift/vapor/v-21-io.html",
    "revision": "32b5521f2019274baa0ab5bee5253520"
  },
  {
    "url": "swift/vapor/v-22-bio2.html",
    "revision": "1de33c83bbc6051552830f781118832f"
  },
  {
    "url": "swift/vapor/v-23-swiftnio-do-text.html",
    "revision": "6ba3ff546cc016057da058e54d640d82"
  },
  {
    "url": "swift/vapor/v-24-swift-zhan-package.html",
    "revision": "36ffc5ce76a783f551fe3d0d4221d027"
  },
  {
    "url": "swift/vapor/v-25-swiftnio-do-serisize.html",
    "revision": "da6e6233967e2819abd8afe7e5add5e5"
  },
  {
    "url": "swift/vapor/v-26-swfitnio-grpc-1.html",
    "revision": "13acdf2236fac54a37dbd09046528df8"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/ai/index.html",
    "revision": "7c6038b3e5822a1b418f2fa78f9ac202"
  },
  {
    "url": "tag/flutter/index.html",
    "revision": "e7856895c0044c59adcfc222a50f1bba"
  },
  {
    "url": "tag/flutter/page/2/index.html",
    "revision": "8d545390c65c6df0e59c586f96e524dc"
  },
  {
    "url": "tag/git/index.html",
    "revision": "32c3038ad6637e13493c0404950e85cd"
  },
  {
    "url": "tag/haskell/index.html",
    "revision": "33c3b5fca496cdcda61cfacd0959d29a"
  },
  {
    "url": "tag/html/index.html",
    "revision": "7008d7eaaa84c300b69a18b06ee38103"
  },
  {
    "url": "tag/index.html",
    "revision": "92e9dbb3606c2236026aa5812d36f846"
  },
  {
    "url": "tag/ios/index.html",
    "revision": "5c7e104297117c413b1bc50ad202e97a"
  },
  {
    "url": "tag/json/index.html",
    "revision": "53f34aa51cb46b4d906b0429d8d760ba"
  },
  {
    "url": "tag/plantuml/index.html",
    "revision": "034407bc25320f481e32db6a441e3cb8"
  },
  {
    "url": "tag/swift/index.html",
    "revision": "da985318d66471b813051617f91e41be"
  },
  {
    "url": "tag/swift/page/2/index.html",
    "revision": "db7f7ff3576010cc864cd98a2a738d29"
  },
  {
    "url": "tag/swift/page/3/index.html",
    "revision": "1fb1b48fbfc16274e5cc883bde5b9380"
  },
  {
    "url": "tag/swift/page/4/index.html",
    "revision": "4942aa2770f044437482dbbfd97659f4"
  },
  {
    "url": "tag/swiftnio/index.html",
    "revision": "997baced16ba8f50d702ccbb5053d19e"
  },
  {
    "url": "tag/swiftui/index.html",
    "revision": "815f1ee292529beec138bb93a4853cf7"
  },
  {
    "url": "tag/swiftui/page/2/index.html",
    "revision": "c463f9c36c5293192e611161d2bbc23c"
  },
  {
    "url": "tag/tips/index.html",
    "revision": "eecf0b17029cace71f9ef98413a0f80c"
  },
  {
    "url": "tag/tools/index.html",
    "revision": "f302b0dc1548019a4912b965fe86c163"
  },
  {
    "url": "tag/vapor/index.html",
    "revision": "86302d9e5459b7939c93624972ed2430"
  },
  {
    "url": "tag/vapor/page/2/index.html",
    "revision": "732dca059548281c78d4bf4ea8159ff8"
  },
  {
    "url": "tag/vscode/index.html",
    "revision": "564f7e8c89a0dd2ba997ad1c2fabf080"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "76ed7a91636b1602be4d3915c5109af4"
  },
  {
    "url": "tag/yaml/index.html",
    "revision": "956ccc418d9d896947c04002befcc58f"
  },
  {
    "url": "tag/书单/index.html",
    "revision": "cbc02fff16c0e5d45cbd4322a05d62fa"
  },
  {
    "url": "tag/函数式编程/index.html",
    "revision": "853ecc3d10a488456b3124aa97eb01ef"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "165efe7a9b898def9ced8cdf4eadb79b"
  },
  {
    "url": "tag/基础/page/2/index.html",
    "revision": "cb81f34f49e8ff752bec97ef4550f93d"
  },
  {
    "url": "tag/基础/page/3/index.html",
    "revision": "9ddd6181983e877507a30cd13d566e2a"
  },
  {
    "url": "tag/基础/page/4/index.html",
    "revision": "950e8ea97630cca882c3ee25bde73328"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "22d843d69a49e28d0ada4be291d35b72"
  },
  {
    "url": "tag/数据结构与算法/page/2/index.html",
    "revision": "f6001fca4ccd4874eb347fa47cc0e2a8"
  },
  {
    "url": "tag/设计模式/index.html",
    "revision": "4a26eb7475b77b829015a77de5551992"
  },
  {
    "url": "tag/设计模式/page/2/index.html",
    "revision": "7c4951e52a31b68cbec38b201b82979b"
  },
  {
    "url": "tag/设计模式/page/3/index.html",
    "revision": "ec8a8b7ac5ce052d37ec442d2d322f55"
  },
  {
    "url": "timeline/index.html",
    "revision": "63a660cb58fd3bf4f57b972ce60ec588"
  },
  {
    "url": "tools/git/index.html",
    "revision": "48a22bc9e883ecfec74cac43048f0143"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "e2ff1125f08f2fce93ecd0a346cdb932"
  },
  {
    "url": "tools/git/t2-git-submodule.html",
    "revision": "9e66fb4e5e7859a470477e880e981f1c"
  },
  {
    "url": "tools/html/index.html",
    "revision": "ae30bff4ed13174c4b90d7d932805abb"
  },
  {
    "url": "tools/plantuml/index.html",
    "revision": "9a0a1aecb2c4f049f314103b4fd56d9c"
  },
  {
    "url": "tools/plantuml/t1-sequence-diagram.html",
    "revision": "c3deffb3c57d08780de975fd82e2baca"
  },
  {
    "url": "tools/plantuml/t2-class-diagram.html",
    "revision": "8582d366fcdfacd8a873276f99ffc9dd"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "154f7014b50e6a90f02d54d3d8f754b3"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "bd8ef03de8b4126fe8e7d31f86abc5b0"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "2a5745ea08723232687464455cd6443d"
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
