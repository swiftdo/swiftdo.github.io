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
    "revision": "3aaa4954445ea45b5d2d9fdc0263882f"
  },
  {
    "url": "about/app/index.html",
    "revision": "7e544f24b0b3748799101eb7964c342d"
  },
  {
    "url": "about/app/t1-protocol.html",
    "revision": "4676243779b91c1a3f6665ef23028506"
  },
  {
    "url": "about/app/t2-secrect.html",
    "revision": "e3b8891d7b9ce9d772a24f748704c584"
  },
  {
    "url": "about/app/t3-miniapps-sec.html",
    "revision": "c66359643f09241294bec35d32655d68"
  },
  {
    "url": "about/index/index.html",
    "revision": "eb97961d4548b4b40c59ff1d56e74103"
  },
  {
    "url": "ai/index.html",
    "revision": "6fb1ee372043c54584816eb79dc12c02"
  },
  {
    "url": "ai/t1-gzj.html",
    "revision": "82801ad1acaecf92fac86b9f658eaeb5"
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
    "url": "assets/js/100.98ea75a9.js",
    "revision": "12a8434d86fdc25852550234c4331d0a"
  },
  {
    "url": "assets/js/101.1f1d364c.js",
    "revision": "9fd4d325d00ea0c264d8ce72c6d11512"
  },
  {
    "url": "assets/js/102.d4305718.js",
    "revision": "288066a611b5cb059178526a8ea96150"
  },
  {
    "url": "assets/js/103.b074df39.js",
    "revision": "5cdf14bf1cd826a4fed52fb2ef38d631"
  },
  {
    "url": "assets/js/104.bc3af87f.js",
    "revision": "9aa1260ac7af570ce7c997a38e5bcdae"
  },
  {
    "url": "assets/js/105.2d646a06.js",
    "revision": "ec138af40f302f49408922f32604bb8a"
  },
  {
    "url": "assets/js/106.8c0da2dd.js",
    "revision": "e9a105b3feb96286719b337a9105713d"
  },
  {
    "url": "assets/js/107.6b974851.js",
    "revision": "313482ec6cb7d3f597d32fa5f3e88465"
  },
  {
    "url": "assets/js/108.454cec25.js",
    "revision": "67bf3a3c64537b0a9dec0eef0a135603"
  },
  {
    "url": "assets/js/109.96f64efc.js",
    "revision": "c25187430124fd4fb6de65c094cc5768"
  },
  {
    "url": "assets/js/11.9442356f.js",
    "revision": "c63fb51d0b73425258c3e851ce1dfd1f"
  },
  {
    "url": "assets/js/110.f143c14c.js",
    "revision": "5ddc1b308f5e1e806d0ef5371c8abe98"
  },
  {
    "url": "assets/js/111.07187451.js",
    "revision": "57d8ea9555c6cb2d9e7ed0934dc2ddb9"
  },
  {
    "url": "assets/js/112.1f62a69e.js",
    "revision": "247124f7b589f848549abbf4d4c69a2a"
  },
  {
    "url": "assets/js/113.93662c69.js",
    "revision": "5f5f68a288d4ecb83c28201a43fa24c1"
  },
  {
    "url": "assets/js/114.10879342.js",
    "revision": "8dc8cf6328a608c1344692f425027f1c"
  },
  {
    "url": "assets/js/115.bf7f2b6f.js",
    "revision": "6fb1b4d069ac326f8795a3da4d169b7e"
  },
  {
    "url": "assets/js/116.726fdb94.js",
    "revision": "375a20fdc7df49ab097d918baba8990b"
  },
  {
    "url": "assets/js/117.9084c146.js",
    "revision": "2069056d873a65a3ed8c3ec6e8cf196d"
  },
  {
    "url": "assets/js/118.7b34d45b.js",
    "revision": "e2537378adba58ca9b89931b7449c726"
  },
  {
    "url": "assets/js/119.1150ab19.js",
    "revision": "9ad24635c42c11287f733c67a71dc756"
  },
  {
    "url": "assets/js/12.c33ae7d1.js",
    "revision": "5e0d40b403bbbf007a9c9ea51a169335"
  },
  {
    "url": "assets/js/120.8dcbb561.js",
    "revision": "e3384ae4c46c448c439b36b9cb353dbc"
  },
  {
    "url": "assets/js/121.69878685.js",
    "revision": "b089b177a8a943bb328b3d06a384d67d"
  },
  {
    "url": "assets/js/122.f1b5ec62.js",
    "revision": "37a2cb75cfcc69262b33983da50d222e"
  },
  {
    "url": "assets/js/123.3d9adaac.js",
    "revision": "42af4a588d9e4a9a367e77c243798e27"
  },
  {
    "url": "assets/js/124.2134b1de.js",
    "revision": "c4b7f20d8d47ac8e875bd903dab15c19"
  },
  {
    "url": "assets/js/125.b2e7aa52.js",
    "revision": "b4da44d50fbaef5169c16c59d8ea8d4e"
  },
  {
    "url": "assets/js/126.f1ed5b85.js",
    "revision": "6add7b8ad185e0312e5cf8465298e037"
  },
  {
    "url": "assets/js/127.4c6e814d.js",
    "revision": "9db317966696662ffb310551729eb6ca"
  },
  {
    "url": "assets/js/128.8d53cf03.js",
    "revision": "6aff97cd701f226dc9a20a951b506e5c"
  },
  {
    "url": "assets/js/129.47bcc09b.js",
    "revision": "b523475a89d159683563d3922171c982"
  },
  {
    "url": "assets/js/13.3e4737b2.js",
    "revision": "5a97c4de46941002a5ed3892c6677756"
  },
  {
    "url": "assets/js/130.5f43d25a.js",
    "revision": "a8e22415cde4cd14bfcb6c1c424adedb"
  },
  {
    "url": "assets/js/131.a56d6909.js",
    "revision": "45bcbb82534d58e20798f1a731fb5306"
  },
  {
    "url": "assets/js/132.e22212fa.js",
    "revision": "6b0106904a29bb0c3a77da5c5aeb18c1"
  },
  {
    "url": "assets/js/133.5cc3d6dd.js",
    "revision": "9b2553b519da1c55af88906a119aca9b"
  },
  {
    "url": "assets/js/134.885c0b14.js",
    "revision": "0bf19a311e455aa995adea835dc1e545"
  },
  {
    "url": "assets/js/135.5126a986.js",
    "revision": "d7b2f1a3acb6eaccdb910a7f150fb429"
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
    "url": "assets/js/32.dc24698b.js",
    "revision": "8bda2a6f44b38f7f86c54e5849fe3417"
  },
  {
    "url": "assets/js/33.9362b605.js",
    "revision": "a4a9ccfac5ff6cf8352cf208da2f7dbb"
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
    "url": "assets/js/38.5666092e.js",
    "revision": "37736e95bbf92b7ea04a1b0f40329ae4"
  },
  {
    "url": "assets/js/39.2996f2fa.js",
    "revision": "ca67bdbf0635052dc9a7010f606d8dfd"
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
    "url": "assets/js/49.6a6be7a5.js",
    "revision": "2e0ae52800cfb645a3bfbd5520ea142a"
  },
  {
    "url": "assets/js/5.2696a9c7.js",
    "revision": "74d948d1542f5d838138c527749d4436"
  },
  {
    "url": "assets/js/50.91104ae1.js",
    "revision": "9ada6b8f4c4a88808cd92244f60281ce"
  },
  {
    "url": "assets/js/51.1119114a.js",
    "revision": "7d31da3608f6bbe891650267e79f21df"
  },
  {
    "url": "assets/js/52.b65cb970.js",
    "revision": "bf57032c3c9b4dee9c58466b23a3839a"
  },
  {
    "url": "assets/js/53.2d67c8fa.js",
    "revision": "bb2b3dff7ebb50425754e3f7745da94d"
  },
  {
    "url": "assets/js/54.cc1e0abe.js",
    "revision": "696c41923c763e4e02c62af1e6dac40a"
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
    "url": "assets/js/58.344ba799.js",
    "revision": "c1b00564475db5946897ebf117542c5d"
  },
  {
    "url": "assets/js/59.7f4d78b8.js",
    "revision": "3ba1c1f5e08b7e5c912df47da039c9ee"
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
    "url": "assets/js/73.e0bed480.js",
    "revision": "290e265c60e6e1f8a392ee608b2bbe64"
  },
  {
    "url": "assets/js/74.ec37b744.js",
    "revision": "f9eb88b82f27e9cef1bdd33c697d106b"
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
    "url": "assets/js/80.185f443e.js",
    "revision": "c0c9eb9955eb5cc49595208adb93bdef"
  },
  {
    "url": "assets/js/81.7a29d9e0.js",
    "revision": "10999ccc6aee8080ff60e96ba53a6477"
  },
  {
    "url": "assets/js/82.87e75729.js",
    "revision": "112570f06cced48728f154c8f8c98132"
  },
  {
    "url": "assets/js/83.1ab474a5.js",
    "revision": "67fc02b1e7e5ae3cae6cbb247bf262c8"
  },
  {
    "url": "assets/js/84.e9a1dbfa.js",
    "revision": "f6607e35cc5aac18ff387ba756fde67b"
  },
  {
    "url": "assets/js/85.ef401bec.js",
    "revision": "f80e3c58443f7093b2d6e9be31ac3fa9"
  },
  {
    "url": "assets/js/86.e250e74f.js",
    "revision": "0ff60c636885c7c667b84c39d0f1cb26"
  },
  {
    "url": "assets/js/87.d02b3490.js",
    "revision": "cb0259e6586a3bd208ba4bc3d62d70f2"
  },
  {
    "url": "assets/js/88.91b47070.js",
    "revision": "867d3e416851f1b0ce3fc10338e0286b"
  },
  {
    "url": "assets/js/89.c413f1b3.js",
    "revision": "b9c4c31d3f153fa71ad43002df98b75d"
  },
  {
    "url": "assets/js/9.a809f842.js",
    "revision": "2fd6e00b11113297359d584f95e36b91"
  },
  {
    "url": "assets/js/90.b61e5b5b.js",
    "revision": "01261f779d4f85616070ce7915cd7232"
  },
  {
    "url": "assets/js/91.1fbf628d.js",
    "revision": "d93ef1542f96f3a1330fcfb648a81d97"
  },
  {
    "url": "assets/js/92.846b706c.js",
    "revision": "839f57f8edacd6cdba8a50e57be15473"
  },
  {
    "url": "assets/js/93.4dc55b3a.js",
    "revision": "af88cb73339fe22dcd6e16029a409a00"
  },
  {
    "url": "assets/js/94.ac4793f9.js",
    "revision": "20f8effd03cccd2321c20dca11b46a7e"
  },
  {
    "url": "assets/js/95.703d5be8.js",
    "revision": "95845900ce4cde2f65e63b2262c8b161"
  },
  {
    "url": "assets/js/96.7fb301b9.js",
    "revision": "400008715ab904de437e963fdb069a17"
  },
  {
    "url": "assets/js/97.f6fe3be5.js",
    "revision": "30233deca012346528ee34492ae50350"
  },
  {
    "url": "assets/js/98.6281f9c9.js",
    "revision": "2f0c31389cab53affc83fbdfe45ec76a"
  },
  {
    "url": "assets/js/99.a255cbaa.js",
    "revision": "93ec114c01283d680bccf5699f121821"
  },
  {
    "url": "assets/js/app.809eba2e.js",
    "revision": "01ec435226b474f2a04389ddbb75a428"
  },
  {
    "url": "author.jpeg",
    "revision": "7e1bfc6337e85b76f0f6e95859ed93d6"
  },
  {
    "url": "basis/algorithms/index.html",
    "revision": "4c3f2b1a3c9be6894c4e0cb2ebf56f3a"
  },
  {
    "url": "basis/algorithms/t1-buble-sort.html",
    "revision": "9dc980e4835f936fcf88bd6d2fabb5d9"
  },
  {
    "url": "basis/algorithms/t2-selection-sort.html",
    "revision": "02656b1658275ac29a865a42f3771f70"
  },
  {
    "url": "basis/algorithms/t3-insertion-sort.html",
    "revision": "de660e85297183031d3393c0795f6ab4"
  },
  {
    "url": "basis/algorithms/t4-shell-sort.html",
    "revision": "f65fad558c6e45d9e5b18ae785c1e48a"
  },
  {
    "url": "basis/algorithms/t5-quick-sort.html",
    "revision": "206734e88b7a9543a61d3588df94d61f"
  },
  {
    "url": "basis/algorithms/t6-heap-sort.html",
    "revision": "f2de5a7ec8fa561f3b4600a6965817d1"
  },
  {
    "url": "basis/algorithms/t7-merge-sort.html",
    "revision": "6f741ac5d53c67ee877760a01e1c7e65"
  },
  {
    "url": "basis/algorithms/t8-radix-sort.html",
    "revision": "e23f67c0c50626050684bbab3e72afdb"
  },
  {
    "url": "basis/algorithms/t9-count-sort.html",
    "revision": "0a1caf0a0477e3108edc8ccb77d69384"
  },
  {
    "url": "basis/algorithms/u1-bucket-sort.html",
    "revision": "8cbd9c3599b708e065f4f8f0202620a5"
  },
  {
    "url": "basis/design/0. Class Releation.html",
    "revision": "e3ec5c34ae94ff3463ec96e4489b6bf9"
  },
  {
    "url": "basis/design/0.1 Design Principles.html",
    "revision": "6cefb3b67d38d0e25bcc55fb6894da52"
  },
  {
    "url": "basis/design/1. Factory Pattern.html",
    "revision": "cb82734b566c2d79e4cf3db831d3e1bc"
  },
  {
    "url": "basis/design/10. Facade Pattern.html",
    "revision": "3883ec3a4ec4918b88b85d37267f0103"
  },
  {
    "url": "basis/design/11. Flyweight Pattern.html",
    "revision": "85fa057087adf89bc0598c7e5f7a6553"
  },
  {
    "url": "basis/design/12. Proxy Pattern.html",
    "revision": "d403cde3ef4ccdbcaa5151d86281d7c6"
  },
  {
    "url": "basis/design/13. Chain of Responsibility Pattern.html",
    "revision": "d9a2c3bfa491653a9db20a52b4819fba"
  },
  {
    "url": "basis/design/14. Command Pattern.html",
    "revision": "97fcb61eff3ee443233a556402ce8e44"
  },
  {
    "url": "basis/design/15. Interpreter Pattern.html",
    "revision": "77d1e2cf24e720ffddc2c18ff7a558c0"
  },
  {
    "url": "basis/design/16. Iterator Pattern.html",
    "revision": "9299437e190dcb7d5e93e1973fb8bb55"
  },
  {
    "url": "basis/design/17. Mediator Pattern.html",
    "revision": "756f17bc347ed96be02a9296f1196533"
  },
  {
    "url": "basis/design/18. Memento Pattern.html",
    "revision": "bab2e20e2b4579bddcc15c2499a1f106"
  },
  {
    "url": "basis/design/19. Observer Pattern.html",
    "revision": "ccce1968601d872e822a9b225d87fb85"
  },
  {
    "url": "basis/design/2. Builder Pattern.html",
    "revision": "c0bee48430352a440ac10e3e38fb9127"
  },
  {
    "url": "basis/design/20. State Pattern.html",
    "revision": "902b1216bdff4d0f02df250b1ee6a4cf"
  },
  {
    "url": "basis/design/21. Null Object Pattern.html",
    "revision": "cb84090054f829813549b781564664e3"
  },
  {
    "url": "basis/design/22. Strategy Pattern.html",
    "revision": "fc36ae5647e6288ede40bd862481bd72"
  },
  {
    "url": "basis/design/23. Template Pattern.html",
    "revision": "06f35a4f6196dcfc7429e6d64d6b1de3"
  },
  {
    "url": "basis/design/24. Visitor Pattern.html",
    "revision": "aec818c93d82b508b6ed4f2ba0e1f5eb"
  },
  {
    "url": "basis/design/3. Prototype Pattern.html",
    "revision": "02744879e07dd6da791da23c539f2bff"
  },
  {
    "url": "basis/design/4.Singleton Pattern.html",
    "revision": "e0e334264e7acbb3fe7bb07d9eedb5aa"
  },
  {
    "url": "basis/design/5. Adapter Pattern.html",
    "revision": "ec5aa5817e5f649b87224bf3e37e1fec"
  },
  {
    "url": "basis/design/6. Bridge Pattern.html",
    "revision": "bf650c041a12d8e61d72bb44d79e343f"
  },
  {
    "url": "basis/design/7. Filter、Criteria Pattern.html",
    "revision": "34d8f6004dcff565ba3198696e8c3a6e"
  },
  {
    "url": "basis/design/8. Composite Pattern.html",
    "revision": "cb898a0a04e75d9b087d8be3ee762ca0"
  },
  {
    "url": "basis/design/9. Decorator Pattern.html",
    "revision": "57b29ebbee8cf1991f155ae1a6ecec96"
  },
  {
    "url": "basis/design/index.html",
    "revision": "6ef05ef713cb5ee410f7586b8a608639"
  },
  {
    "url": "basis/index/index.html",
    "revision": "0961b64d85eee5b4ee50bfa7f0e9dd4e"
  },
  {
    "url": "basis/os/index.html",
    "revision": "97d0ed70c9688b6552fc29a3026ba4e3"
  },
  {
    "url": "book/index.html",
    "revision": "b30222670ffc876cd023d923eaed0dc9"
  },
  {
    "url": "book/t-find-books.html",
    "revision": "37bcced52b5e6847a4382e24f10841fb"
  },
  {
    "url": "categories/index.html",
    "revision": "67bdf3ba8a178c9388033c49061a6b2f"
  },
  {
    "url": "figma/index.html",
    "revision": "8eaf3b0bec8c20253d7ec24b2ecda409"
  },
  {
    "url": "flutter/index.html",
    "revision": "90ec9e9a1357189b7401d333bd7fa220"
  },
  {
    "url": "flutter/t1-tips.html",
    "revision": "9cc81b24cd881b9851dca26d4c4ab41f"
  },
  {
    "url": "flutter/t2-what.html",
    "revision": "804abd767755f0ed69823a9ed8e3f8de"
  },
  {
    "url": "flutter/t3-messages.html",
    "revision": "1eb3d66ae5ef8bf252e93e850f2b6908"
  },
  {
    "url": "flutter/t3-mixin.html",
    "revision": "e2df430543370d98e46056576c814cc4"
  },
  {
    "url": "flutter/t4-lifecycle.html",
    "revision": "83d20eccab159abef5299ec5116560d9"
  },
  {
    "url": "flutter/t5-flutter-web-deploy.html",
    "revision": "b3e7d2ab4afba27847f8fa7da4dd0293"
  },
  {
    "url": "flutter/t6-docker-web-deploy.html",
    "revision": "a47a35fe7c38c13d558331b66be857e8"
  },
  {
    "url": "flutter/t7-fvm.html",
    "revision": "dcaab8c8807f861e1687cc09329cd39c"
  },
  {
    "url": "flutter/t8-const.html",
    "revision": "043b572a1be7ab641145d48bb96b0e90"
  },
  {
    "url": "flutter/t9-logs.html",
    "revision": "f1f9a17e5d9da06862e946081cea144b"
  },
  {
    "url": "flutter/u10-fvm-flutter2.html",
    "revision": "c81077474725cd0670926d6fcfde1fbc"
  },
  {
    "url": "flutter/u11-flutter-render.html",
    "revision": "6afc52c0b04bbd97c8b8aca642b33818"
  },
  {
    "url": "flutter/u12-flutter-create-w.html",
    "revision": "c357a78db93f55174630bf9e5a034a1d"
  },
  {
    "url": "flutter/u12-flutter-web-01.html",
    "revision": "24d84cc70b9f2008ebb64a3642377a34"
  },
  {
    "url": "flutter/u12-flutter-web-02.html",
    "revision": "10d0e3271266707bf216c9ffc803b5c6"
  },
  {
    "url": "flutter/u13-sliverappbar.html",
    "revision": "8f8137d3b5366a6bad3a9b6897e46efc"
  },
  {
    "url": "flutter/u14-navbar-color.html",
    "revision": "87494a67123e44b2506da906f1018a7a"
  },
  {
    "url": "haskell/1-install.html",
    "revision": "afda2b97a2dc21f7de62f3efb4b546e1"
  },
  {
    "url": "haskell/2-vscode.html",
    "revision": "e97b263ca4b262462b8d25f7440c831f"
  },
  {
    "url": "haskell/3-pktool.html",
    "revision": "1b170a2b7f0c012fd52a2feeaac2a054"
  },
  {
    "url": "haskell/4-digui.html",
    "revision": "8eb955ae4cb52a3b9efb2f558b33741e"
  },
  {
    "url": "haskell/index.html",
    "revision": "278ffef18db7bb408b40e00ab8bf0b52"
  },
  {
    "url": "index.html",
    "revision": "026bb9350b9c67ec8a3df55d1545d1cf"
  },
  {
    "url": "logo.png",
    "revision": "4e1f6d935d94a65b5a4455cbc8cb09fb"
  },
  {
    "url": "swift/fp/index.html",
    "revision": "6d7365b8364e2050b9115b5db1e3cc63"
  },
  {
    "url": "swift/fp/t1-fp.html",
    "revision": "d905ba7691221e9ce9f8c0cbb36b9907"
  },
  {
    "url": "swift/fp/t2-lens.html",
    "revision": "49aef86468b519d0b83cc742e993a006"
  },
  {
    "url": "swift/fp/t3-json1.html",
    "revision": "7e504eca6422a914a479030207692f80"
  },
  {
    "url": "swift/fp/t3-json2.html",
    "revision": "ea375d4d1c2930774060f837690f2910"
  },
  {
    "url": "swift/fp/t3-json3.html",
    "revision": "9856d9c5417de496a6a131f72dcf58f1"
  },
  {
    "url": "swift/fp/t4-length.html",
    "revision": "1a5ca4a97b467342ca578dfa990b6dc0"
  },
  {
    "url": "swift/ios/index.html",
    "revision": "754a87969a22184b741d071bf4179e95"
  },
  {
    "url": "swift/ios/t1-pod-webp.html",
    "revision": "debb276d1d0df63b4b0905937b8cebb0"
  },
  {
    "url": "swift/ios/t2-youhua.html",
    "revision": "12ccb85c2548dd7cb4292db790e07a86"
  },
  {
    "url": "swift/swiftui/index.html",
    "revision": "c06c76684ded9e6aef388608f6500176"
  },
  {
    "url": "swift/swiftui/t1-principle.html",
    "revision": "8ef564f3b2a26db8cd06ac2a44b69b1f"
  },
  {
    "url": "swift/swiftui/t1.0-propertywrapper.html",
    "revision": "1797825f75b4612c5577e6fdb00a280d"
  },
  {
    "url": "swift/swiftui/t1.1-functionBuilder.html",
    "revision": "263e0f406d0abd7267f8ae83cc646b50"
  },
  {
    "url": "swift/swiftui/t1.2-propertys.html",
    "revision": "52dfb9b6516514ce11b1f7889f2c0396"
  },
  {
    "url": "swift/swiftui/t2-views_control.html",
    "revision": "7ab89ae881f863704e26916861b35d22"
  },
  {
    "url": "swift/swiftui/t3-layout_presentation.html",
    "revision": "74ea445db2ea31942ba4b6466492676e"
  },
  {
    "url": "swift/swiftui/t4-uikit_in_swiftui.html",
    "revision": "d55bb5e8f3c3d7622de85264d668d814"
  },
  {
    "url": "swift/swiftui/t5-swiftui_in_uikit.html",
    "revision": "d8b3d192005727ea0efd4bc76562ae6b"
  },
  {
    "url": "swift/swiftui/t6-viewmodifier.html",
    "revision": "7c46b60461438db24af8d0153686844d"
  },
  {
    "url": "swift/swiftui/t7-geometryreader.html",
    "revision": "bae5637ef28f52ef414f93f55b158544"
  },
  {
    "url": "swift/swiftui/t8-preferencekey.html",
    "revision": "f27bd5606b7af2a60267476f8481d4e8"
  },
  {
    "url": "swift/tips/index.html",
    "revision": "82e81402e44e8631d27e832b9ac18b58"
  },
  {
    "url": "swift/vapor/index.html",
    "revision": "60a4ea3c6669167cfbac635cc3f965da"
  },
  {
    "url": "swift/vapor/t1-install.html",
    "revision": "a647e1d63eaf6d0005d22330d0b434a5"
  },
  {
    "url": "swift/vapor/t2-quickstart.html",
    "revision": "7452d84322d2782cb70362fdede11378"
  },
  {
    "url": "swift/vapor/t3-turotial.html",
    "revision": "f54dc63da8eb7b383ac1877f58d27e31"
  },
  {
    "url": "swift/vapor/t4-advanced.html",
    "revision": "eaba031097e44aca2b2c377aeb1b4a1d"
  },
  {
    "url": "swift/vapor/t5-deploy.html",
    "revision": "ad04eba7b7db739c412c950efa8ce69b"
  },
  {
    "url": "swift/vapor/t6-say-oldbirds.html",
    "revision": "e27b3d976618f54c3d8d89fcb4a47aa8"
  },
  {
    "url": "swift/vapor/t9-docker.html",
    "revision": "d05c421863336e6671008177f7446bd4"
  },
  {
    "url": "swift/vapor/u-11-auth.html",
    "revision": "73ce929a77e387eb1c6626047eb81aae"
  },
  {
    "url": "swift/vapor/u-12-permission.html",
    "revision": "cea81625c0c523f1679cd69c13ddfb40"
  },
  {
    "url": "swift/vapor/v-20-read-code.html",
    "revision": "45863d991352fed4523cf955eb2a503e"
  },
  {
    "url": "swift/vapor/v-21-io.html",
    "revision": "c8229a89d125ac98241f7a9aa621c084"
  },
  {
    "url": "swift/vapor/v-22-bio2.html",
    "revision": "de4ddf47cd72e8dfa602f39eeed6ce75"
  },
  {
    "url": "swift/vapor/v-23-swiftnio-do-text.html",
    "revision": "74edd5e9b0abf895114223d25544f5f0"
  },
  {
    "url": "swift/vapor/v-24-swift-zhan-package.html",
    "revision": "c4274151f17655206e83fc2245e6390d"
  },
  {
    "url": "swift/vapor/v-25-swiftnio-do-serisize.html",
    "revision": "422227c9ba00a66adfe2204e33d1fd73"
  },
  {
    "url": "swift/vapor/v-26-swfitnio-grpc-1.html",
    "revision": "c0ed601353a1997214c88e44311f0dff"
  },
  {
    "url": "swiftoldbird.jpeg",
    "revision": "99e1b091a757e3f1542d8e33cc99cbd2"
  },
  {
    "url": "tag/ai/index.html",
    "revision": "2b62f58e6b99fd31e076bb8d447d5c21"
  },
  {
    "url": "tag/flutter/index.html",
    "revision": "27b224eedf4a6b9255059f5a9a41ba54"
  },
  {
    "url": "tag/flutter/page/2/index.html",
    "revision": "ca05eaf59cf560873655163b948eeae5"
  },
  {
    "url": "tag/git/index.html",
    "revision": "6f5fddca47bfaca4558c1eedfd8dacc0"
  },
  {
    "url": "tag/haskell/index.html",
    "revision": "1633ec7f74066c17e9ad8abf8b9ba085"
  },
  {
    "url": "tag/html/index.html",
    "revision": "85623fcf7122b1efd3ae9dcaa3f6b03f"
  },
  {
    "url": "tag/index.html",
    "revision": "67af00304ca4f68fc096ce5f9671d1d6"
  },
  {
    "url": "tag/ios/index.html",
    "revision": "2ab5a32a2bde2e8779505c3f2433b93f"
  },
  {
    "url": "tag/json/index.html",
    "revision": "bb7808067dc7567ee3666031353abc0d"
  },
  {
    "url": "tag/plantuml/index.html",
    "revision": "09b0f43d53d0ab7d2e58eb37a3bf1c39"
  },
  {
    "url": "tag/swift/index.html",
    "revision": "ddc4ce3b498dde62f4a1996948e8c848"
  },
  {
    "url": "tag/swift/page/2/index.html",
    "revision": "831f7e0914ce8f17340317c49da681d8"
  },
  {
    "url": "tag/swift/page/3/index.html",
    "revision": "6e1b284b31a374cb693e21a43ee216c2"
  },
  {
    "url": "tag/swift/page/4/index.html",
    "revision": "d6efe540c4f56ffc5603c38950b76717"
  },
  {
    "url": "tag/swiftnio/index.html",
    "revision": "81be109565c1b5b5deac61141fe8da51"
  },
  {
    "url": "tag/swiftui/index.html",
    "revision": "61f83d78514ef6e6d6c69e252e5cebd9"
  },
  {
    "url": "tag/swiftui/page/2/index.html",
    "revision": "360e5f27f97c328a0b1d12675cf88ff3"
  },
  {
    "url": "tag/tips/index.html",
    "revision": "d73a56534bc0cdb5496faa84e6b792c4"
  },
  {
    "url": "tag/tools/index.html",
    "revision": "9bfc899b2c9744789acac8d1cc7ef77c"
  },
  {
    "url": "tag/vapor/index.html",
    "revision": "61588988e09c9dbc7a2c10e912deaa3b"
  },
  {
    "url": "tag/vapor/page/2/index.html",
    "revision": "1c9fbf745cfb32f403b82be9e8366aa0"
  },
  {
    "url": "tag/vscode/index.html",
    "revision": "d88be7a65fb33194b4bf6a1692a551ef"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "0fca8585ac46ef5817eb82ee177a6c29"
  },
  {
    "url": "tag/yaml/index.html",
    "revision": "b9184d91d3f082225452d7ca4fb66036"
  },
  {
    "url": "tag/书单/index.html",
    "revision": "a6f7e9a0c5a3b028e9929254f1b2dee2"
  },
  {
    "url": "tag/函数式编程/index.html",
    "revision": "7e560901de893667e8c3ce21c583fa14"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "22066552c278299f1db4af09e4430d79"
  },
  {
    "url": "tag/基础/page/2/index.html",
    "revision": "eeaa349ba98613e3c9143a0cd83abdb8"
  },
  {
    "url": "tag/基础/page/3/index.html",
    "revision": "0305148ac501c2f7a4b6a214ce21bf47"
  },
  {
    "url": "tag/基础/page/4/index.html",
    "revision": "48ff40773ef8bb8c8c120c1a8e80cbab"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "b7f3122164702174fe52e47b55dd41ea"
  },
  {
    "url": "tag/数据结构与算法/page/2/index.html",
    "revision": "ae2cac0b9d6902e93beeafc15b6034f8"
  },
  {
    "url": "tag/设计模式/index.html",
    "revision": "9c063babbf33c63847cb88b48a94edac"
  },
  {
    "url": "tag/设计模式/page/2/index.html",
    "revision": "7c2caa5e7d058dc6978712a501a95b7c"
  },
  {
    "url": "tag/设计模式/page/3/index.html",
    "revision": "5dab8e9f283ee155121f31bdbf9aff73"
  },
  {
    "url": "timeline/index.html",
    "revision": "6f62c3b4aab0a68e76a4b47fb79d6f30"
  },
  {
    "url": "tools/git/index.html",
    "revision": "578fce19bfb987a8f849d32310b5c820"
  },
  {
    "url": "tools/git/t1-change-history.html",
    "revision": "b51958593643f0254f7bbca7de8c20de"
  },
  {
    "url": "tools/git/t2-git-submodule.html",
    "revision": "71e17d5e6a3c6838a8c700dfaa1a9b82"
  },
  {
    "url": "tools/html/index.html",
    "revision": "123d315c666b1d0c36a70b2744964e71"
  },
  {
    "url": "tools/plantuml/index.html",
    "revision": "e6c454de2740bccbd1ffb559057ac485"
  },
  {
    "url": "tools/plantuml/t1-sequence-diagram.html",
    "revision": "33b8d68b51b6555f0d07fc2f2833ec41"
  },
  {
    "url": "tools/plantuml/t2-class-diagram.html",
    "revision": "a16ebc53740af11faecc6adad2a7d947"
  },
  {
    "url": "tools/vuepress/deploy.html",
    "revision": "c2e21ac986a7588b8c9817b0c1831397"
  },
  {
    "url": "tools/vuepress/index.html",
    "revision": "b1c8a1b8404222e5b3eb28eb7cbaf588"
  },
  {
    "url": "tools/yaml/index.html",
    "revision": "776efc83d9d273dc197817991c5dd182"
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
